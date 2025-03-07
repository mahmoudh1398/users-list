import { Box } from "@mui/material";

export default function ErrorContent() {
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
      {"Oh no, there was an error"}
    </Box>
  );
}
