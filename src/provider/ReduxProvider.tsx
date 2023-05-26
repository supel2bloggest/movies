"use client";

import { setupLanguage } from "@/redux/slice/settingSlice";
import store from "@/redux/store";
import { useEffect } from "react";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
  locale: string;
}

export default function ReduxProvider({ children, locale }: Props) {
  useEffect(() => {
    if (locale) {
      store.dispatch(setupLanguage(locale));
    }
  }, [locale]);

  return <Provider store={store}>{children}</Provider>;
}
