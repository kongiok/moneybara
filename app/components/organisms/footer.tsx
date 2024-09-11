import { FC } from "react";
import type { Link as ItemLink } from "~/lib/type";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const InfoSection: FC<{ org: ItemLink }> = ({ org }) => (
  <>
    <Link to={org.url} className="flex flex-row gap-2 text-2xl font-bold">
      We are
      <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-accent">
        {org.title}
      </h1>
    </Link>
    <p className="text-base">{org.description}</p>
  </>
);

const SocialSection: FC<{ btns: ItemLink[] }> = ({ btns }) =>
  btns.map((btn, index) => (
    <Link
      key={index}
      to={btn.url}
      aria-label={btn.description}
      title={btn.title}
      className={`py-2 px-3 rounded-md ${
        index === 0
          ? `bg-primary/45 text-primary-foreground`
          : `bg-neutral-200/40 text-foreground`
      } shadow ${
        btn.icon ? `text-3xl` : `text-base`
      } hover:shadow-md active:bg-primary active:text-primary-foreground active:shadow-inner transition-all duration-250 ease-in-out`}
    >
      {btn.icon ? <Icon icon={btn.icon} /> : btn.title}
    </Link>
  ));

const Footer: FC<{ org: ItemLink }> = ({ org }) => {
  const { t: landing } = useTranslation("landing", {
    keyPrefix: "sites",
  });
  const { t: sites } = useTranslation("common", {
    keyPrefix: "sites",
  });
  const socialLinks: ItemLink[] = [
    {
      title: sites("github.name"),
      description: sites("github.description"),
      url: "https://github.com/kongiok/moneybara.git",
      icon: "ri:github-line",
    },
    {
      title: sites("giok.name"),
      description: sites("giok.description"),
      url: "https://giok.org",
    },
  ];
  return (
    <footer className="w-full h-40 mx-12 flex flex-row justify-center items-center">
      {/* Info Card */}
      <section className="flex flex-1 flex-col items-start justify-center gap-6">
        <InfoSection org={org} />
      </section>
      {/* Social Card */}
      <section className="flex flex-1 flex-col items-start justify-center gap-6">
        <div className="flex flex-1 justify-center items-start">
          <h1 className="font-bold text-2xl">{landing("heading")}</h1>
        </div>
        <div className="flex flex-1 justify-center items-center gap-4">
          <SocialSection btns={socialLinks} />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
