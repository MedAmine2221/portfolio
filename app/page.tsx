"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import TypingText from "@/components/app/typing-text";
import RecommondationCard from "@/components/app/recommandation-card";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-4 py-8 md:py-16">
      
      {/* PROFILE + TEXT */}
      <div className="flex flex-col items-center text-center max-w-xl">
        <Image
          src="/amine.png"
          alt="That's Me"
          width={300}
          height={300}
          className="w-48 md:w-64 lg:w-72 h-auto"
        />

        <div className="mt-4 space-y-1 text-sm md:text-base">
          <TypingText text="> Hello world." />
          <TypingText text="> I'm Mohamed Amine LAZREG," />
          <TypingText text="> Software Developer." />
        </div>
      </div>

      {/* PROGRAMMING IMAGE */}
      <Image
        src="/programing.png"
        width={125}
        height={125}
        alt="Programming"
        className="w-24 md:w-32 h-auto"
      />

      {/* TECH STACK */}
      <div className="flex flex-wrap justify-center gap-4">
        <Image src="/js.png" width={80} height={80} alt="JS" className="w-16 md:w-20" />
        <Image src="/typescript.png" width={80} height={80} alt="TS" className="w-16 md:w-20" />
        <Image src="/git.png" width={80} height={40} alt="GIT" className="w-20 md:w-24" />
      </div>

      {/* REACT NATIVE */}
      <Image
        src="/ReactNative.png"
        width={300}
        height={300}
        alt="React Native"
        className="w-48 md:w-64 lg:w-72 h-auto"
      />

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.cv}
        >
          Download My CV
        </Link>

        <Link
          isExternal
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
          })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      {/* RECOMMENDATIONS */}
      <div className="w-full flex justify-center px-2 md:px-0">
        <RecommondationCard />
      </div>
    </section>
  );
}
