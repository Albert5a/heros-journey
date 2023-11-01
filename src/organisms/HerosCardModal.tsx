import HerosPicture from "@/atoms/HerosPicture";
import HerosCardContend from "@/molecules/HerosCardContent";
import { HeroCardProps } from "@/props/herosJourneyProps";
import Card from "@mui/material/Card";

const HerosCardModal = ({ image, name, powerStats }: HeroCardProps) => {

  return (
    <Card sx={{ width: 160 }}>
      <HerosPicture image={image} />
      <HerosCardContend name={name} powerStats={powerStats} />
    </Card>
  );
};

export default HerosCardModal;
