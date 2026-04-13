"use client";

import { useState } from "react";
import Link from "next/link";
import countriesData from "@/data/countries.json";
import type { Country } from "@/types";

const countries = countriesData as Country[];

export default function CountryQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    { id: "region", question: "Where are you going?", options: [
      { label: "Europe", value: "Europe" },
      { label: "Asia Pacific", value: "APAC" },
      { label: "Americas", value: "Americas" },
      { label: "Middle East", value: "Middle East" },
      { label: "Africa", value: "Africa" },
    ]},
    { id: "concern", question: "What's your main concern?", options: [
      { label: "Public Wi-Fi Security", value: "wifi" },
      { label: "Internet Censorship", value: "censorship" },
      { label: "VoIP/Call Restrictions", value: "voip" },
      { label: "General Privacy", value: "privacy" },
      { label: "Streaming Access", value: "streaming" },
    ]},
    { id: "budget", question: "What's your budget?", options: [
      { label: "Free", value: "free" },
      { label: "Under $3/month", value: "budget" },
      { label: "Under $7/month", value: "mid" },
      { label: "Any price for the best", value: "premium" },
    ]},
    { id: "usage", question: "How will you use VPN?", options: [
      { label: "Remote Work", value: "work" },
      { label: "Travel / Tourism", value: "travel" },
      { label: "Long-term Expat", value: "expat" },
      { label: "Occasional Use", value: "occasional" },
    ]},
  ];

  function getRecommendation() {
    const region = answers.region;
    const concern = answers.concern;
    const budget = answers.budget;

    let vpn = "NordVPN";
    let reason = "Best all-around VPN for most users.";

    if (concern === "censorship" || concern === "voip") {
      vpn = "FastestVPN";
      reason = "Affordable and reliable in restrictive countries. Works in China, UAE, Turkey.";
    } else if (budget === "free") {
      vpn = "Proton VPN Free";
      reason = "Only trustworthy free VPN. No data caps, no ads, Swiss-based.";
    } else if (budget === "budget") {
      vpn = "Surfshark";
      reason = "Cheapest premium VPN at $2.29/mo. Unlimited devices.";
    } else if (concern === "privacy") {
      vpn = "Mullvad";
      reason = "Maximum privacy. No email, no name, cash payments. €5/mo.";
    }

    const regionCountries = countries.filter((c) => c.region === region).slice(0, 8);

    return { vpn, reason, regionCountries };
  }

  const isComplete = step >= questions.length;
  const rec = isComplete ? getRecommendation() : null;

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quiz · 2 min
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">Find Your Perfect VPN</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Answer 4 quick questions and we&apos;ll recommend the best VPN for your specific situation.
          </p>
        </div>
      </section>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {!isComplete ? (
        <div>
          {/* Progress */}
          <div className="flex gap-1 mb-8">
            {questions.map((_, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-blue-600" : "bg-zinc-200 dark:bg-zinc-700"}`} />
            ))}
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              {questions[step].question}
            </h2>
            <div className="space-y-2">
              {questions[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, [questions[step].id]: opt.value }));
                    setStep((s) => s + 1);
                  }}
                  className="w-full p-4 text-left border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all text-sm font-medium text-zinc-900 dark:text-zinc-100"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {step > 0 && (
            <button onClick={() => setStep((s) => s - 1)} className="text-sm text-zinc-500 hover:text-blue-600">
              &larr; Back
            </button>
          )}
        </div>
      ) : rec && (
        <div>
          {/* Result */}
          <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl mb-8 text-center">
            <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">Your Best Match</p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{rec.vpn}</h2>
            <p className="text-zinc-600 dark:text-zinc-400">{rec.reason}</p>
          </div>

          {/* Country suggestions */}
          {rec.regionCountries.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">VPN Guides for Your Region</h3>
              <div className="grid grid-cols-2 gap-2">
                {rec.regionCountries.map((c) => (
                  <Link key={c.iso2} href={`/vpn/best/${c.slug}/`} className="p-3 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-zinc-100">
                    Best VPN for {c.nameEn}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Next steps */}
          <div className="space-y-3">
            <Link href="/best/vpn" className="block w-full text-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              See Full VPN Comparison &rarr;
            </Link>
            <button onClick={() => { setStep(0); setAnswers({}); }} className="block w-full text-center px-6 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors">
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
