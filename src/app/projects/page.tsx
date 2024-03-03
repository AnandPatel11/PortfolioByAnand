import React from "react";
import { H1 } from "@/components/ui/H1";
import Image from "next/image";
import me from "@/assets/me.jpg";
import project1Image from "@/assets/njit-random-challenges.jpg"; // Replace with actual path
import project2Image from "@/assets/my-web-class.jpg"; // Replace with actual path
import project3Image from "@/assets/calculate-sample-size.jpg"; // Replace with actual path

const projects = [
  {
    image: me,
    title: "NJIT Random Challenges",
    period: "Aug 2023 – Present",
    details:
      "A web application for facilitating randomized challenges, featuring secure authentication and session management.",
    link: "#", // Replace "#" with the actual link to your project
  },
  {
    image: me,
    title: "My Web Class",
    period: "Feb 2023 – May 2023",
    details:
      "A marketing blog website aimed at enhancing UX with Playwright testing and content strategy via Google Analytics.",
    link: "#", // Replace "#" with the actual link to your project
  },
  {
    image: me,
    title: "Calculate Sample Size",
    period: "Sep 2022 – Dec 2022",
    details:
      "A web application for calculating sample size using Python with Flask, containerized using Docker.",
    link: "#", // Replace "#" with the actual link to your project
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <H1 className="text-3xl text-center font-bold my-8">My Projects</H1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <Image src={project.image} alt={project.title} width={400} height={225} className="object-cover" />
              <div className="p-6">
                <h2 className="font-bold text-xl mb-2">{project.title}</h2>
                <p className="text-gray-700 text-base">{project.details}</p>
                <a href={project.link} className="mt-4 inline-block bg-blue-500 text-white rounded-full px-6 py-2 font-semibold text-sm">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
