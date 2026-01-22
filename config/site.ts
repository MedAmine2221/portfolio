export type SiteConfig = typeof siteConfig;

export const siteConfig = (t: any) => {
  return {
    navItems: [
      {
        label: t("home"),
        href: "/",
      },
      {
        label: t("about"),
        href: "/about",
      },
      {
        label: t("professional_experience"),
        href: "/expPro",
      },
      {
        label: t("projects"),
        href: "/projects",
      },
      {
        label: t("contact"),
        href: "/contact",
      },
    ],
    navMenuItems: [
      {
        label: t("home"),
        href: "/",
      },
      {
        label: t("about"),
        href: "/about",
      },
      {
        label: t("professional_experience"),
        href: "/expPro",
      },
      {
        label: t("projects"),
        href: "/projects",
      },
      {
        label: t("contact"),
        href: "/contact",
      },
    ],
    links: {
      github: "https://github.com/MedAmine2221",
      facebook: "https://www.facebook.com/mouhamed.amine.lazreg/",
      instagram: "https://www.instagram.com/mouhamedaminelz/",
      linkedIn: "https://www.linkedin.com/in/mohamed-amine-lazreg-831b1817a/",
      cv: "https://drive.google.com/file/d/1O9x7NPP4k_LY7dTgn05yWSeeSM-1YlNR/view?usp=sharing",
      cv_eng:
        "https://drive.google.com/file/d/1viXojhmGuCqGYOGsagrq4wlNxaoLMXe6/view?usp=sharing",
      cv_it:
        "https://drive.google.com/file/d/1mc07Lp21XHr02ejZNTNuU-3baYR-vlcG/view?usp=sharing",
    },
  };
};
