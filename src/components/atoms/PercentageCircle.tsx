import { CircularProgress, Typography, Box } from "@mui/material";

interface PercentageCircleProps {
  value: number; // Percentage value
}

const PercentageCircle: React.FC<PercentageCircleProps> = ({ value }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={100} // Background Circle
        size={50}
        thickness={4}
        sx={{ color: "#f0f0f0", position: "absolute" }}
      />
      <CircularProgress
        variant="determinate"
        value={value} // Dynamic Progress
        size={50}
        thickness={4}
        sx={{ color: "#FF8A80" }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
          sx={{ fontWeight: "bold", color: "#FF8A80" }}
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default PercentageCircle;
