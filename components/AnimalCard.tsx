import { FC } from "react";

import Image from "next/image";

interface AnimalCardProps {
  name: string;
  image: string;
  description?: string;
}

const AnimalCard: FC<AnimalCardProps> = ({ name, image, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        width={300}
        height={300}
        className="w-full"
        src={image}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnimalCard;
