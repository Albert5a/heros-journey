import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { HeroCardProps } from "@/props/herosJourneyProps";

const HerosCardContend = ({ name, powerStats }: HeroCardProps) => {
  return (
    <CardContent>
      <Typography
        fontSize={18}
        gutterBottom
        variant="h5"
        component="div"
      >
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {powerStats}
      </Typography>
    </CardContent>
  );
};

export default HerosCardContend;
