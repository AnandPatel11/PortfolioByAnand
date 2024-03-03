import Image from "next/image";
import { H1 } from "@/components/ui/H1";
import me from "@/assets/me.jpg";

const experiences = [
  {
    title: "API Automation AI-integrated Intern at Markham Group",
    period: "Jan 2024 – Present",
    details: "Collaborated in QuickBase development, integrated external systems, and engineered AI solutions.",
    image: me
  },
  {
    title: "Website Developer Intern at Sayap Africa",
    period: "Jul 2023 – Nov 2023",
    details: "Revamped WordPress website, boosted user engagement, and contributed to strategic content updates.",
    image: me
  },
  // Add other experiences similarly
];

export default function Experiences() {
  return (
    <section className="p-4">
      <H1>My Experiences</H1>
      <div className="flex flex-col space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center">
            <Image src={exp.image} alt={exp.title} width={50} height={50} className="rounded" />
            <div className="ml-4">
              <h2>{exp.title}</h2>
              <p>{exp.period}</p>
              <p>{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
