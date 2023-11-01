import Card from "@mui/material/Card";
import HerosPicture from "@/atoms/HerosPicture";
import { HeroCardProps } from "@/props/herosJourneyProps";
import HerosCardContend from "@/molecules/HerosCardContent";

const HerosCard = ({ powerStats, name, image }: HeroCardProps) => {
  return (
    <Card sx={{ width: 160 }}>
      <HerosPicture image={image} />
      <HerosCardContend name={name} powerStats={powerStats} />
    </Card>
  );
};

export default HerosCard;
