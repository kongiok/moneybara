import { FC } from "react";
import { useTranslation } from "react-i18next";
import Footer from "~/components/organisms/footer";
import Header from "~/components/organisms/header";
import Landing from "~/components/templates/landing";
import { Link, Logo } from "~/lib/type";

export default function Index(): JSX.Element {
  const { t } = useTranslation();
  const { t: nav } = useTranslation("common", {
    keyPrefix: "nav",
  });
  const logo: Logo = {
    title: t("app.name"),
    src: "",
    description: t("app.description"),
  };
  const navItems: Link[] = [
    {
      title: nav("app.name"),
      description: nav("app.description"),
      url: "/app",
    },
  ];
  const HeroSection: FC = () => (
    <section className="w-full h-[60vh] grid place-items-center bg-gradient-to-tr from-primary-300 via-neutral-100 to-secondary-300 from-10% to-65% rounded-[4.5em] shadow-md">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-primary-foreground text-4xl">{t("app.name")}</h1>
      </div>
    </section>
  );
  return (
    <Landing
      header={<Header navItems={navItems} logo={logo} />}
      footer={
        <Footer
          org={{
            title: t("sites.giok.name"),
            description: t("sites.giok.description"),
            url: "https://giok.org",
          }}
        />
      }
    >
      <HeroSection />
    </Landing>
  );
}
