"use client"

import { useEffect, useState } from "react";

const activeCircleStyles =
  "flex items-center justify-center w-5 h-5 rounded-full transition-colors duration-300 ring-2 ring-transparent";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("dark"); // Default to 'dark'

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || "dark"; // Default to 'dark' if no saved theme

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const themeToggleHandler = (newTheme: string) => {
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex items-center justify-around h-8 w-14 bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-sm transition-colors duration-300">
      <button
        className={`${activeCircleStyles} ${
          theme === "light"
            ? "bg-white ring-[#ee2e3a]/50"
            : "bg-gray-700 ring-gray-600"
        }`}
        onClick={() => themeToggleHandler("light")}
        aria-label="Switch to light mode"
      >
        <svg
          width="14"
          className="fill-yellow-500 cursor-pointer"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.29396 10.5089C9.50822 10.5089 11.3032 8.71388 11.3032 6.49961C11.3032 4.28535 9.50822 2.49033 7.29396 2.49033C5.07969 2.49033 3.28467 4.28535 3.28467 6.49961C3.28467 8.71388 5.07969 10.5089 7.29396 10.5089Z" />
          <path d="M7.29387 0C7.1785 0 7.08411 0.0943926 7.08411 0.209761V1.38652C7.08411 1.50189 7.1785 1.59628 7.29387 1.59628C7.40924 1.59628 7.50363 1.50189 7.50363 1.38652V0.209761C7.50363 0.0943926 7.40924 0 7.29387 0Z" />
          <path d="M7.29387 11.4038C7.1785 11.4038 7.08411 11.4982 7.08411 11.6135V12.7903C7.08411 12.9057 7.1785 13.0001 7.29387 13.0001C7.40924 13.0001 7.50363 12.9057 7.50363 12.7903V11.6135C7.50363 11.4971 7.40924 11.4038 7.29387 11.4038Z" />
          <path d="M11.593 1.90356L10.7613 2.73527C10.6795 2.81707 10.6795 2.95027 10.7613 3.03208C10.8022 3.07298 10.8557 3.09396 10.9092 3.09396C10.9627 3.09396 11.0162 3.07298 11.0571 3.03208L11.8888 2.20038C11.9706 2.11857 11.9706 1.98537 11.8888 1.90356C11.807 1.82176 11.6748 1.82176 11.593 1.90356Z" />
          <path d="M3.52978 9.96681L2.69807 10.7985C2.61627 10.8803 2.61627 11.0135 2.69807 11.0953C2.73898 11.1362 2.79247 11.1572 2.84596 11.1572C2.89944 11.1572 2.95293 11.1362 2.99384 11.0953L3.82554 10.2636C3.90735 10.1818 3.90735 10.0486 3.82554 9.96681C3.74373 9.885 3.61158 9.885 3.52978 9.96681Z" />
          <path d="M13.5837 6.28965H12.4069C12.2915 6.28965 12.1971 6.38404 12.1971 6.49941C12.1971 6.61478 12.2915 6.70917 12.4069 6.70917H13.5837C13.699 6.70917 13.7934 6.61478 13.7934 6.49941C13.7934 6.38404 13.7001 6.28965 13.5837 6.28965Z" />
          <path d="M2.18108 6.28965H1.00432C0.888948 6.28965 0.794556 6.38404 0.794556 6.49941C0.794556 6.61478 0.888948 6.70917 1.00432 6.70917H2.18108C2.29645 6.70917 2.39084 6.49941C2.39084 6.38404 2.29645 6.28965 2.18108 6.28965Z" />
          <path d="M11.0581 9.96681C10.9763 9.885 10.8431 9.885 10.7613 9.96681C10.6795 10.0486 10.6795 10.1818 10.7613 10.2636L11.593 11.0953C11.6339 11.1362 11.6874 11.1572 11.7409 11.1572C11.7944 11.1572 11.8479 11.1362 11.8888 11.0953C11.9706 11.0135 11.9706 10.8803 11.8888 10.7985L11.0581 9.96681Z" />
          <path d="M2.99489 1.90356C2.91308 1.82176 2.77988 1.82176 2.69807 1.90356C2.61627 1.98537 2.61627 2.11857 2.69807 2.20038L3.52978 3.03208C3.57068 3.07298 3.62417 3.09396 3.67766 3.09396C3.73115 3.09396 3.78464 3.07298 3.82554 3.03208C3.90735 2.95027 3.90735 2.81707 3.82554 2.73527L2.99489 1.90356Z" />
        </svg>
      </button>
      <button
        className={`${activeCircleStyles} ${
          theme === "dark"
            ? "bg-gray-200 ring-[#ee2e3a]/50"
            : "bg-gray-200 ring-gray-400"
        }`}
        onClick={() => themeToggleHandler("dark")}
        aria-label="Switch to dark mode"
      >
        <svg
          className="fill-gray-900 cursor-pointer"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6C12 5.90273 11.9057 5.8348 11.8115 5.85853C11.4452 5.95093 11.0617 6 10.6667 6C8.08933 6 6 3.91066 6 1.33333C6 0.938353 6.04907 0.554833 6.14147 0.188533C6.1652 0.0942333 6.09727 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31373 2.68629 12 6 12C9.31373 12 12 9.31373 12 6Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
