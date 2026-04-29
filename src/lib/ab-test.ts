"use client";

export interface Experiment {
  id: string;
  variants: string[];
}

export const EXPERIMENTS = {
  ctaText: {
    id: "cta_text_v1",
    variants: ["get", "try", "claim"],
  },
  ctaPosition: {
    id: "cta_position_v1",
    variants: ["above", "below"],
  },
  stickyDelay: {
    id: "sticky_delay_v1",
    variants: ["400", "800", "1200"],
  },
} satisfies Record<string, Experiment>;

export type ExperimentKey = keyof typeof EXPERIMENTS;

const STORAGE_PREFIX = "ab_";

function getStoredVariant(experimentId: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(`${STORAGE_PREFIX}${experimentId}`);
  } catch {
    return null;
  }
}

function storeVariant(experimentId: string, variant: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${experimentId}`, variant);
  } catch {
    // localStorage unavailable
  }
}

export function getVariant(key: ExperimentKey): string {
  const experiment = EXPERIMENTS[key];
  const stored = getStoredVariant(experiment.id);
  if (stored && experiment.variants.includes(stored)) return stored;

  const picked =
    experiment.variants[Math.floor(Math.random() * experiment.variants.length)];
  storeVariant(experiment.id, picked);
  trackExperimentAssignment(experiment.id, picked);
  return picked;
}

function trackExperimentAssignment(
  experimentId: string,
  variant: string
): void {
  if (typeof window === "undefined") return;
  if ("gtag" in window) {
    (
      window as Record<string, unknown> & {
        gtag: (...args: unknown[]) => void;
      }
    ).gtag("event", "experiment_assignment", {
      experiment_id: experimentId,
      variant,
    });
  }
}

export function trackConversion(
  key: ExperimentKey,
  action: string
): void {
  if (typeof window === "undefined") return;
  const experiment = EXPERIMENTS[key];
  const variant = getStoredVariant(experiment.id);
  if (!variant) return;

  if ("gtag" in window) {
    (
      window as Record<string, unknown> & {
        gtag: (...args: unknown[]) => void;
      }
    ).gtag("event", "experiment_conversion", {
      experiment_id: experiment.id,
      variant,
      action,
    });
  }
}
