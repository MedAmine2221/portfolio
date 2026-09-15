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
      cv: "https://drive.google.com/file/d/1Ho3aJTbHWRnwHwbwLh8wPFiiJxg-A7H0/view?usp=drive_link",
      cv_eng:
        "https://drive.google.com/file/d/1g6FwHHQSthMjaJ3I5QoqxSKUrwdcLB5j/view?usp=drive_link",
      cv_it:
        "https://drive.google.com/file/d/1vQc3s7aBVZ7wJZxrDCtOdCWnv1m53BLG/view?usp=drive_link",
    },
  };
};
