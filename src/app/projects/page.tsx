import React from "react";
import { H1 } from "@/components/ui/H1";
import Image from "next/image";
import me from "@/assets/me.jpg";
import randomChallanges from "@/assets/projRandomChallanges.png"; // Replace with actual path
import project2Image from "@/assets/my-web-class.jpg"; // Replace with actual path
import project3Image from "@/assets/calculate-sample-size.jpg"; // Replace with actual path
import adulting101 from "@/assets/projAdulting101.jpg"; // Replace with actual path
import githubLogo from "@/assets/githubLogo.png"; // Replace with actual path

const projects = [
  {
    image: randomChallanges,
    title: "NJIT Random Challenges",
    period: "Aug 2023 – Present",
    details:
      "A web application for facilitating randomized challenges, featuring secure authentication and session management.",
    link: "https://anandpatel11.github.io/NJIT-Hunt/", // Replace "#" with the actual link to your project
  },
  //   {
  //     image: me,
  //     title: "My Web Class",
  //     period: "Feb 2023 – May 2023",
  //     details:
  //       "A marketing blog website aimed at enhancing UX with Playwright testing and content strategy via Google Analytics.",
  //     link: "#", // Replace "#" with the actual link to your project
  //   },
  //   {
  //     image: me,
  //     title: "Calculate Sample Size",
  //     period: "Sep 2022 – Dec 2022",
  //     details:
  //       "A web application for calculating sample size using Python with Flask, containerized using Docker.",
  //     link: "#", // Replace "#" with the actual link to your project
  //   },
  
  {
    image: adulting101,
    title: "Adulting 101",
    period: "",
    details:
      "A web application teaching life skills to young adults, featuring lessons and quizes.",
    link: "https://adulting101.vercel.app/", // Replace "#" with the actual link to your project
  },
  {
    image: githubLogo,
    title: "GitHub Profile",
    period: "Aug 2022 – Present",
    details:
      "My GitHub profile featuring my open-source projects and contributions to other repositories.",
    link: "https://github.com/AnandPatel11",
  }


];

export default function ProjectsPage() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <H1 className="my-8 text-center text-3xl font-bold">My Projects</H1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={225}
                className="object-cover"
              />
              <div className="p-6">
                <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
                <p className="text-base text-gray-700">{project.details}</p>
                <a
                  target="_blank"
                  href={project.link}
                  className="mt-4 inline-block rounded-full bg-blue-500 px-6 py-2 text-sm font-semibold text-white"
                >
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
