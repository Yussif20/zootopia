"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

import logoImage from "../app/icon.png";

import Image from "next/image";

interface HeaderProps {
  locale: string;
}

const Header: FC<HeaderProps> = ({ locale }) => {
  const t = useTranslations("Header");
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageSwitch = (newLocale: string) => {
    setIsMenuOpen(false); // Close mobile menu on language switch
    router.push(`/${newLocale}`);
  };

  return (
    <header className=" bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto max-w-11/12 py-4 flex justify-between items-center">
        {/* Logo with Animation */}
        <Link
          href="/"
          className="flex items-center justify-center gap-1 text-2xl font-bold text-primary-orange"
        >
          <Image
            width={24}
            height={24}
            className="w-full"
            src={logoImage}
            alt="logo"
          />
          <p>{t("logo")}</p>
          <Image
            width={24}
            height={24}
            className="w-full"
            src={logoImage}
            alt="logo"
          />
        </Link>
        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static top-16 right-4 md:right-auto md:bg-transparent p-4 md:p-0 rounded-lg md:flex-row flex-col space-y-2 md:space-y-0 shadow-md md:shadow-none transition-all duration-300 font-semibold `}
        >
          <li>
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-orange transition-colors duration-200"
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              href="/animals"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-orange transition-colors duration-200"
            >
              {t("animals")}
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-orange transition-colors duration-200"
            >
              {t("posts")}
            </Link>
          </li>
        </ul>

        {/* Theme and Language Switchers */}
        <div className="flex items-center space-x-4">
          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* Language Switcher */}
          <select
            value={locale}
            onChange={(e) => handleLanguageSwitch(e.target.value)}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all duration-300"
          >
            <option value="en">{t("english")}</option>
            <option value="ar">{t("arabic")}</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-900 dark:text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
