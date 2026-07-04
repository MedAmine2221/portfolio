"use client";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { FiDownload } from "react-icons/fi";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import TypingText from "@/components/app/typing-text";
import RecommondationCard from "@/components/app/recommandation-card";
import TypingTextEffect from "@/components/app/typing-text-effect";
import ServicesSection from "@/components/app/services-section";

const techStack = [
  { src: "/js.png", alt: "JavaScript" },
  { src: "/typescript.png", alt: "TypeScript" },
  { src: "/nest.svg", alt: "NestJS" },
  { src: "/ReactNative.png", alt: "React Native" },
  { src: "/programing.png", alt: "Next.js" },
  { src: "/git.png", alt: "Git" },
];

export default function Home() {
  const t = useTranslations("home");
  const tNavbar = useTranslations("navbar");
  const siteConfigRes = siteConfig(tNavbar);
  const pathname = usePathname();

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-10 px-4 py-14 md:py-24">
        <div className="flex flex-col items-center text-center max-w-xl gap-6">
          <div
            className="
              relative w-52 h-52 md:w-96 md:h-96
              rounded-full overflow-hidden
              border-2 border-violet-400/30
              shadow-[0_0_40px_-10px_rgba(167,139,250,0.5)]
            "
          >
            <Image
              fill
              alt="Mohamed Amine Lazreg"
              className="object-cover"
              src="/amine.png"
            />
          </div>

          <div className="space-y-1 text-sm md:text-base">
            <TypingText text={`${t("hello_world")}`} />
            <br />
            <TypingText text={`${t("i_am")}`} />
            <br />
            <TypingTextEffect
              texts={[
                `${t("full_stack_developer")}`,
                `${t("enseignant_vacataire")}`,
              ]}
            />
          </div>
        </div>

        {/* TECH STACK STRIP */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.alt}
              className="
                group relative
                w-14 h-14 md:w-16 md:h-16
                flex items-center justify-center
                rounded-xl
                bg-white/[0.03]
                border border-white/10
                hover:border-violet-400/40
                transition-colors
              "
              title={tech.alt}
            >
              <Image
                alt={tech.alt}
                className="object-contain w-3/5 h-3/5"
                height={40}
                src={tech.src}
                width={40}
              />
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={
              pathname === "/it"
                ? siteConfigRes.links.cv_it
                : pathname === "/en"
                  ? siteConfigRes.links.cv_eng
                  : siteConfigRes.links.cv
            }
          >
            <FiDownload size={18} />
            {t("download_cv")}
          </Link>

          <Link
            isExternal
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
            })}
            href={siteConfigRes.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>

      <ServicesSection />

      {/* RECOMMENDATIONS */}
      <div className="w-full flex justify-center px-2 md:px-0 pb-16">
        <RecommondationCard />
      </div>
    </>
  );
}
