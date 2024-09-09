import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next/react";

export default function Index(): JSX.Element {
  const { t, i18n } = useTranslation();
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <span>{t("app.name")}</span>
      <button
        className="border-2 border-concrete-800"
        onClick={() => i18n.changeLanguage("zh-TW")}
      >
        {t("lng.change_to_zh")}
      </button>
    </div>
  );
}
