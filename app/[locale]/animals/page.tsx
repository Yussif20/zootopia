// app/[locale]/animals/page.tsx
import { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const AnimalsPage: FC = () => {
  const t = useTranslations("Animals");

  const animalList = ["lion", "elephant", "tiger"]; // مثال، يمكن تكون من Appwrite لاحقًا

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="mt-4">{t("description")}</p>
      <ul className="mt-6 space-y-2">
        {animalList.map((animal) => (
          <li key={animal}>
            <Link
              href={`/animals/${animal}`}
              className="text-[var(--primary-orange)] hover:underline"
            >
              {animal}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalsPage;
