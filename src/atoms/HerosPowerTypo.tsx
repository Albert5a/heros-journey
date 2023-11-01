import Typography from "@mui/material/Typography";

interface HerosPowerTypoProps {
  child: React.ReactNode;
  fontSize?: number;
  fontWeight?: string;
}

const HerosPowerTypo = ({
  child,
  fontWeight,
  fontSize,
}: HerosPowerTypoProps) => {
  return (
    <Typography
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={"black"}
      id="modal-modal-description"
      sx={{ mt: 1 }}
    >
      {child}
    </Typography>
  );
};

export default HerosPowerTypo;
