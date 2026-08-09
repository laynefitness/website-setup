import type { Metadata } from "next";
import Image from "next/image";
import { ServicePage } from "@/components/service-page";
import { fitnessService } from "@/data/services";

export const metadata: Metadata = {
  title: "Online Fitness Coaching",
  description: fitnessService.description,
  alternates: { canonical: "/fitness-coaching" },
  openGraph: { title: fitnessService.title, description: fitnessService.description, url: "/fitness-coaching", images: ["/images/fitness-dumbbell.jpg"] },
};

export default function FitnessCoachingPage() {
  return (
    <ServicePage data={fitnessService} label="Custom training, real accountability">
      <section className="section section-dark">
        <div className="media-split wrap">
          <div className="media-panel"><Image src="/images/fitness-dumbbell-rack.jpg" alt="Eight adjustable dumbbells lined up for a strength workout" fill sizes="(max-width: 820px) 100vw, 52vw" /></div>
          <div><span className="kicker">How the plan gets built</span><h2>Start with your real constraints.</h2><div className="content-stack"><div className="content-note"><h3>Goal and starting point</h3><p>Muscle gain, fat loss, strength, consistency, or a return to training each require a different first move.</p></div><div className="content-note"><h3>Equipment and time</h3><p>Your program fits the gym or home setup you actually use and the days you can consistently protect.</p></div><div className="content-note"><h3>Progress and feedback</h3><p>Sets, reps, exercise choices, and workload change when your performance and recovery say they should.</p></div></div></div>
        </div>
      </section>
    </ServicePage>
  );
}
