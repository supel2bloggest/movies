import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-5 h-16 grid grid-flow-col items-center border-b shadow-green-400">
      <h1 className="text-lg font-bold">
        <Link href="/">MOVIES CATCHER</Link>
      </h1>
      <div className="flex justify-end">
        <div className="cursor-pointer transition-opacity hover:opacity-60 font-bold text-blue-500">
          TH
        </div>
        <div className="mx-1">|</div>
        <div className="cursor-pointer transition-opacity hover:opacity-60 font-bold">
          EN
        </div>
      </div>
    </nav>
  );
}
