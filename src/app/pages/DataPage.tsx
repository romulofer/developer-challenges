import { Box, Container, Typography } from "@mui/material";

function DataPage() {
  return (
    <>
      <Box
        component="header"
        sx={{
          bgcolor: "background.paper",
          borderBottom: 1,
          borderColor: "divider",
          px: { xs: 2, md: 3 },
          py: 2,
        }}
      >
        <Typography variant="h6" component="h1">
          Análise de Dados
        </Typography>
      </Box>
      <Container
        component="main"
        maxWidth={false}
        sx={{ py: 2, px: { xs: 2, md: 3 } }}
      />
    </>
  );
}

export default DataPage;
