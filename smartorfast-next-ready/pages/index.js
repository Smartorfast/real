import { Button } from "../components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Become the player who makes the difference
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          Choose your path: play smarter with tactics & mindset, or get more explosive with speed & skills.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white text-black rounded-2xl p-8 text-left shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Get Smarter</h2>
            <p className="mb-4">6 weeks of mental and tactical training. For players who want calmness on the ball, leadership on the pitch, and smarter decision-making.</p>
            <Link href="/mindset-mastery">
              <Button className="bg-black text-white w-full hover:bg-gray-900">Explore Mindset & Mastery</Button>
            </Link>
          </div>

          <div className="bg-white text-black rounded-2xl p-8 text-left shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Get Explosive</h2>
            <p className="mb-4">6 weeks of speed, agility, and technical control. Build your first steps, your power, and your dominance in 1v1 duels.</p>
            <Link href="/explode-program">
              <Button className="bg-black text-white w-full hover:bg-gray-900">Explore EXPLODE</Button>
            </Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-16">Powered by smartorfast.academy • Coaching by real performance specialists</p>
      </div>
    </section>
  );
}
