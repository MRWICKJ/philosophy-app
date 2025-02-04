import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <nav className="flex items-center justify-between space-x-4 p-6 border-b border-zinc-800 bg-zinc-900 text-white sticky top-0 z-10 ">
      <Link
        to="/"
        className="text-lg font-medium transition-colors hover:text-primary"
      >
        Philosophy Hunter
      </Link>
    </nav>
  );
}
