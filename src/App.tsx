import React from "react";

import { Refine } from "@pankod/refine-core";

import dataProvider from "@pankod/refine-airtable";
import routerProvider from "@pankod/refine-react-router-v6";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const API_TOKEN = "your-airtable-api-token";
  const BASE_ID = "your-airtable-base-id";

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <Refine
      dataProvider={dataProvider(API_TOKEN, BASE_ID)}
      routerProvider={routerProvider}
      i18nProvider={i18nProvider}
    />
  );
}

export default App;
