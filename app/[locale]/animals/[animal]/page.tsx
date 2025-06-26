import { FC } from "react";

interface AnimalPageProps {
  params: {
    // locale: string;
    animal: string;
  };
}
const AnimalPage: FC<AnimalPageProps> = ({ params }) => {
  const { animal } = params;
  return <p>this is the {animal}</p>;
};

export default AnimalPage;
