"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  id: string;
  text: string;
  riskWeight: number;
  category: string;
}

const questions: Question[] = [
  { id: "vpn", text: "Do you use a VPN when connecting to public Wi-Fi?", riskWeight: 3, category: "Network" },
  { id: "auto-connect", text: "Have you disabled auto-connect to open Wi-Fi networks?", riskWeight: 2, category: "Network" },
  { id: "verify", text: "Do you verify the network name with staff before connecting?", riskWeight: 2, category: "Network" },
  { id: "forget", text: "Do you remove/forget public networks after use?", riskWeight: 1, category: "Network" },
  { id: "2fa", text: "Do you have 2FA enabled on your email and cloud accounts?", riskWeight: 3, category: "Accounts" },
  { id: "password-manager", text: "Do you use a password manager with unique passwords?", riskWeight: 3, category: "Accounts" },
  { id: "https", text: "Do you check for HTTPS (padlock icon) before entering credentials?", riskWeight: 2, category: "Browsing" },
  { id: "banking", text: "Do you avoid banking/financial transactions on public Wi-Fi without a VPN?", riskWeight: 3, category: "Browsing" },
  { id: "firewall", text: "Is your device's firewall enabled?", riskWeight: 2, category: "Device" },
  { id: "encryption", text: "Is full-disk encryption enabled on your work devices?", riskWeight: 2, category: "Device" },
  { id: "updates", text: "Are automatic software updates enabled?", riskWeight: 2, category: "Device" },
  { id: "sharing", text: "Have you disabled file sharing and AirDrop on public networks?", riskWeight: 1, category: "Device" },
];

export default function WifiAuditPage() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = questions.length;
  const answeredCount = Object.values(answers).filter((a) => a !== null && a !== undefined).length;
  const yesCount = Object.values(answers).filter((a) => a === true).length;

  const maxScore = questions.reduce((sum, q) => sum + q.riskWeight, 0);
  const score = questions.reduce(
    (sum, q) => sum + (answers[q.id] === true ? q.riskWeight : 0),
    0
  );
  const percentage = Math.round((score / maxScore) * 100);

  function getRating() {
    if (percentage >= 85) return { label: "Excellent", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20", desc: "Your public Wi-Fi security practices are strong. Keep it up!" };
    if (percentage >= 65) return { label: "Good", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20", desc: "You have solid practices but there are gaps to address." };
    if (percentage >= 40) return { label: "Needs Improvement", color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-900/20", desc: "You have some protections in place but significant vulnerabilities remain." };
    return { label: "At Risk", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20", desc: "Your public Wi-Fi usage puts your data at serious risk. Take action now." };
  }

  const missedQuestions = questions.filter((q) => answers[q.id] !== true);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Public Wi-Fi Risk Self-Audit
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Answer these {totalQuestions} questions to assess your security posture
          on public Wi-Fi networks. Get personalized recommendations to close
          any gaps.
        </p>
      </header>

      {!showResults ? (
        <div>
          <div className="space-y-4">
            {questions.map((q, i) => (
              <div
                key={q.id}
                className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-medium text-zinc-400 mt-0.5">
                      {i + 1}.
                    </span>
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {q.text}
                      </p>
                      <span className="text-xs text-zinc-500">
                        {q.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() =>
                        setAnswers((a) => ({ ...a, [q.id]: true }))
                      }
                      className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                        answers[q.id] === true
                          ? "bg-green-600 text-white"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-green-50 dark:hover:bg-green-900/20"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() =>
                        setAnswers((a) => ({ ...a, [q.id]: false }))
                      }
                      className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                        answers[q.id] === false
                          ? "bg-red-600 text-white"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-zinc-500">
              {answeredCount}/{totalQuestions} answered
            </span>
            <button
              onClick={() => setShowResults(true)}
              disabled={answeredCount < totalQuestions}
              className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-300 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              Get My Results
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* Score */}
          <div className={`p-6 rounded-xl mb-8 ${getRating().bg}`}>
            <div className="flex items-center gap-4 mb-3">
              <div className={`text-4xl font-bold ${getRating().color}`}>
                {percentage}%
              </div>
              <div>
                <div className={`text-lg font-semibold ${getRating().color}`}>
                  {getRating().label}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {yesCount}/{totalQuestions} security measures in place
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              {getRating().desc}
            </p>
          </div>

          {/* Recommendations */}
          {missedQuestions.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                Recommended Actions
              </h2>
              <div className="space-y-3">
                {missedQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="flex items-start gap-3 p-3 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <span className="text-red-500 mt-0.5">!</span>
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {q.text.replace("Do you ", "").replace("Have you ", "").replace("Is ", "Enable ").replace("Are ", "Enable ")}
                      </p>
                      <p className="text-xs text-zinc-500">
                        Impact: {q.riskWeight === 3 ? "High" : q.riskWeight === 2 ? "Medium" : "Low"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next steps */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Next Steps
            </h2>
            <Link
              href="/security/public-wifi"
              className="block p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Public Wi-Fi Safety Guide
              </span>
              <span className="block text-sm text-zinc-500">
                Detailed protection steps for every scenario
              </span>
            </Link>
            <Link
              href="/best/vpn"
              className="block p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Best VPN 2026
              </span>
              <span className="block text-sm text-zinc-500">
                Compare top VPNs for public Wi-Fi protection
              </span>
            </Link>
            <Link
              href="/security/2fa"
              className="block p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                2FA Setup Guide
              </span>
              <span className="block text-sm text-zinc-500">
                Protect your accounts even if passwords are compromised
              </span>
            </Link>
          </section>

          <button
            onClick={() => {
              setShowResults(false);
              setAnswers({});
            }}
            className="mt-6 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            Retake Audit
          </button>
        </div>
      )}
    </div>
  );
}
