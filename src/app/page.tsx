import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import me from "@/assets/me.jpg";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Anand Patel - My Smart Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hi, I&apos;m Anand 👋</H1>
          <p className="text-center sm:text-start">
            Welcome to my portfolio. Here, I share my journey in Computer Science
            at NJIT, minoring in Mobile and Web Development. You will find a mix
            of school projects and tech experiments.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            alt="Anand Patel's Picture"
            width={300}
            height={300}
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Coming Soon... Ask the chatbot anything about me</H2>
        <p>
          <p className="italic">
            Click the little <Bot className="inline pb-1" /> icon in the top bar
            to activate the AI chatbot. You can ask it anything about me and it
            will find the relavent info on this website. The bot can even
            provide links to pages you&apos;re looking for.
          </p>
        </p>
      </section>
    </section>
  );
}
