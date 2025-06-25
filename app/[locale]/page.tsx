// app/[locale]/page.tsx
import { FC } from "react";
import { useTranslations } from "next-intl";
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
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-poppins">
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold">{t("title")}</h1>
        <p className="mt-2 text-lg">{t("description")}</p>
      </header>
      <main className="p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {animals.map((animal) => (
            <AnimalCard
              key={animal.name}
              name={animal.name}
              image={animal.image}
              description={animal.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
 