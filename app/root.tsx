import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import "./tailwind.css";
import { FC } from "react";
import i18next from "./i18n.server";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next/react";
import { MetaFunction } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const locale = await i18next.getLocale(request);
  const t = await i18next.getFixedT(request, "common", {
    keyPrefix: "app",
  });
  const appName = t("name");
  const appDescription = t("description");
  return json({ locale, appName, appDescription });
};

export const meta: MetaFunction = ({
  data,
}: {
  data: { locale: string; appName: string; appDescription: string };
}) => {
  return [
    { title: data.appName },
    { name: "description", content: data.appDescription },
  ];
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { locale } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();
  useChangeLanguage(locale);
  const Head: FC = () => (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
  );
  return (
    <html lang={locale} dir={i18n.dir()}>
      <Head />
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const App = () => {
  return <Outlet />;
};

export default App;
