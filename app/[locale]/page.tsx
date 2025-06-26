import { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AnimalCard from "@/components/AnimalCard";
import { Animal } from "@/types";

const Home: FC = () => {
  const t = useTranslations("HomePage");

  const animals: Animal[] = [
    {
      name: "Leo the Lion",
      image: "/images/lion.jpg",
      description: "The king of the jungle!",
      species: "Lion",
      habitat: "Savanna",
    },
    {
      name: "Ella the Elephant",
      image: "/images/elephant.avif",
      description: "Gentle giant with a long trunk.",
      species: "Elephant",
      habitat: "Forest",
    },
    {
      name: "Tara the Tiger",
      image: "/images/tiger.jpg",
      description: "Striped beauty of the wild.",
      species: "Tiger",
      habitat: "Jungle",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-fredoka">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/wildlife.jpg')] bg-center bg-cover text-white py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-orange opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">{t("hero.title")}</h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>
          <Link
            href="/animals"
            className="inline-block px-8 py-3 bg-white text-primary-orange rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            {t("hero.explore")}
          </Link>
        </div>
      </section>

      {/* Animals Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100 animate-fade-in-delay">
          {t("animals.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <AnimalCard
              key={animal.name}
              name={animal.name}
              image={animal.image}
              description={animal.description}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/animals"
            className="px-6 py-3 bg-primary-orange text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
          >
            {t("animals.viewAll")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
