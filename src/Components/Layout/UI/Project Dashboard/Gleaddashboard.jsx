// StageBarCharts.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Sample data for Leads By Stage
const leadsData = [
  { stage: "Conversation", value: 400 },
  { stage: "Follow Up", value: 250 },
  { stage: "Inpipeline", value: 450 },
];

// Sample data for Won Deals Stage
const wonDealsData = [
  { stage: "Conversation", value: 350 },
  { stage: "Follow Up", value: 150 },
  { stage: "Inpipeline", value: 300 },
];

const Gleaddashboard = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{ marginTop: 2, padding: 2 }}
    >
      {/* Leads By Stage Chart */}
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: 3,
          flex: 1,
        }}
      >
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight="bold">
            📈 Leads By Stage
          </Typography>
          <ButtonGroup variant="outlined" size="small">
            <Button endIcon={<KeyboardArrowDownIcon />}>
              Marketing Pipeline
            </Button>
            <Button endIcon={<KeyboardArrowDownIcon />}>Last 3 months</Button>
          </ButtonGroup>
        </Box>

        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={leadsData}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="stage" type="category" />
            <Tooltip />
            <Bar dataKey="value" fill="#ff4d4f" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Won Deals Stage Chart */}
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: 3,
          flex: 1,
        }}
      >
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight="bold">
            ✅ Won Deals Stage
          </Typography>
          <ButtonGroup variant="outlined" size="small">
            <Button endIcon={<KeyboardArrowDownIcon />}>
              Marketing Pipeline
            </Button>
            <Button endIcon={<KeyboardArrowDownIcon />}>Last 3 months</Button>
          </ButtonGroup>
        </Box>

        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={wonDealsData}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="stage" type="category" />
            <Tooltip />
            <Bar dataKey="value" fill="#52c41a" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Stack>
  );
};

export default Gleaddashboard;
