import CardMedia from "@mui/material/CardMedia";

interface HerosPicturePros {
    image: string
}

const HerosPicture = ({image}: HerosPicturePros) => {
  return <CardMedia sx={{ height: 240 }} image={image} />;
};

export default HerosPicture;
