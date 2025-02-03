import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 bg-zinc-100 dark:bg-zinc-900">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} WHOAMI. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/MRWICKJ" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/shubhendu-halder-5752762ba/" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-500">
            <FaLinkedin size={20} />
          </a>
          <a href="https://x.com/SHalder90020" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
