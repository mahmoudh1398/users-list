import { Box } from "@mui/material";

export default function NoDataFound() {
  return (
    <Box
      component="p"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {"No data found."}
    </Box>
  );
}
