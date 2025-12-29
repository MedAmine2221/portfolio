"use client";;
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import TypingText from "@/components/app/typing-text";
import RecommondationCard from "@/components/app/recommandation-card";
import Chatbot from "@/components/app/chatbot-form";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <Image
          src="/amine.png"
          alt="That's Me"
          width={1000}
          height={1000}
        />
        <TypingText text="> Hello world." />
        <TypingText text="> I'm Mohamed Amine LAZREG," />
        <TypingText text="> Software Developer." />
      </div>
      <Image src={"/programing.png"} width={125} alt="ReactJs" height={125} />
      <div className="flex flex-row">
        <Image src={"/js.png"} width={100} alt="JS" height={100} />
        <div className="mx-2" />
        <Image src={"/typescript.png"} width={100} alt="TS" height={100} />
        <div className="mx-2" />
        <Image src={"/git.png"} width={100} alt="GIT" height={25} />
      </div>
      <Image src={"/ReactNative.png"} width={300} alt="React Native" height={300} />
      <div className="flex gap-3">
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
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      <Chatbot />
      <div className="flex flex-row">
        <RecommondationCard />
      </div>
    </section>
  );
}
