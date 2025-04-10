"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">Train Like a Champion</h1>
        <p className="text-lg text-gray-400 mb-6">
          Welcome to Smart or Fast Academy – a high-performance hub built for footballers who want more. More mindset. More explosiveness. More control.
        </p>
        <p className="text-lg text-gray-400 mb-12">
          Choose your program below and commit to becoming the player who dominates every moment.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <Link href="/mindset-weeks/week-1">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg hover:scale-105 transition cursor-pointer">
              <h2 className="text-2xl font-semibold mb-2">🧠 Mindset & Mastery</h2>
              <p className="text-gray-400">
                Build leadership, resilience, and confidence on and off the pitch. Mental sharpness = total performance.
              </p>
            </div>
          </Link>

          <Link href="/explode-weeks/week-1">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg hover:scale-105 transition cursor-pointer">
              <h2 className="text-2xl font-semibold mb-2">⚡ EXPLODE – Speed & Skills</h2>
              <p className="text-gray-400">
                Increase explosiveness, improve 1v1 control, and master match tempo. Physical dominance = total threat.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}