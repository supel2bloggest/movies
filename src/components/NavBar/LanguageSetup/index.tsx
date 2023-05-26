"use client";

import { useAppSelector } from "@/redux/hooks";
import clsx from "clsx";
import Link from "next-intl/link";

interface Props {
  language: string;
}

export function LanguageSetup({ language }: Props) {
  const { language: stateLanguage } = useAppSelector((state) => state.setting);
  return (
    <Link href={`/`} locale={language}>
      <div
        className={clsx(
          "cursor-pointer transition-opacity hover:opacity-60 font-bold",
          {
            "text-blue-500": stateLanguage === language,
          }
        )}
      >
        {language.toUpperCase()}
      </div>
    </Link>
  );
}
