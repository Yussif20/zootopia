import { FC } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface AnimalCardProps {
  name: string;
  image: string;
  description?: string;
}

const AnimalCard: FC<AnimalCardProps> = ({ name, image, description }) => {
  return (
    <Link
      href={`/animals/${name.toLowerCase().replace(" ", "-")}`}
      className="block"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {name}
          </h3>
          {description && (
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default AnimalCard;
