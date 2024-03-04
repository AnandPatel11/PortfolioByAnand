import React from "react";
import { H1 } from "@/components/ui/H1";
import Image from "next/image";
import me from "@/assets/me.jpg";
import markhamLogo from "@/assets/markhamLogo.png"; // Replace with actual path
import sayapAfricaLogo from "@/assets/sayapAfricaLogo.jpg"; // Replace with actual path
import admissionsLogo from "@/assets/admissionsLogo.jpg"; // Replace with actual path
import peerMentorLogo from "@/assets/peerMentorLogo.jpg"; 
import redFeatherLogo from "@/assets/rfsLogo.jpg"; // Replace with actual path



const experiences = [
  {
    image: markhamLogo,
    title: "API Automation AI-integrated Intern",
    period: "Jan 2024 – Present",
    company: "Markham Group",
    details:
      "Collaborated in QuickBase development, integrated external systems, and engineered AI solutions.",
  },
  {
    image: sayapAfricaLogo,
    title: "Website Developer Intern",
    period: "Jul 2023 – Nov 2023",
    company: "Sayap Africa",
    details:
      "Revamped WordPress website, boosted user engagement, and contributed to strategic content updates.",
  },
  {
    image: peerMentorLogo,
    title: "Peer Mentor",
    period: "Sep 2022 – Present",
    company: "NJIT Learning Communities",
    details:
      "Utilized my expertise to mentor new NJIT students, fostering their academic and social development.",
  },
  {
    image: admissionsLogo,
    title: "Vice President of the Student Ambassador",
    period: "Aug 2021 – Dec 2023",
    company: "NJIT Office of Admissions",
    details:
      "Spearheaded initiatives that contributed to a significant rise in freshman enrollment.",
  },
  {
    image: redFeatherLogo,
    title: "Software Developer Intern",
    period: "Jul 2022 – Aug 2022",
    company: "Red Feather Software",
    details:
      "Enhanced custom ERP solutions and contributed to redesigning the company's website.",
  },
];

export default function ExperiencesPage() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <H1 className="my-8 text-center text-3xl font-bold">
          Professional Experiences
        </H1>
        <div className="flex flex-wrap justify-center gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-item w-full md:w-1/2 lg:w-1/3"
            >
              <Image
                src={exp.image}
                alt={exp.title}
                width={150}
                height={150}
                className="experience-image rounded-full mx-auto"
              />
              <h2>{exp.title}</h2>
              <p className="text-gray-600">{exp.period}</p>
              <p>{exp.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
