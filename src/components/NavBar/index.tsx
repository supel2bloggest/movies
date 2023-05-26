import Link from "next/link";
import { LANGUAGE } from "@/redux/slice/settingSlice";
import { LanguageSetup } from "./LanguageSetup";

export default function NavBar() {
  return (
    <nav className="p-5 h-16 grid grid-flow-col items-center border-b shadow-green-400">
      <h1 className="text-lg font-bold">
        <Link href="/">MOVIES CATCHER</Link>
      </h1>
      <div className="flex justify-end">
        <LanguageSetup language={LANGUAGE.TH} />
        <div className="mx-1">|</div>
        <LanguageSetup language={LANGUAGE.EN} />
      </div>
    </nav>
  );
}
