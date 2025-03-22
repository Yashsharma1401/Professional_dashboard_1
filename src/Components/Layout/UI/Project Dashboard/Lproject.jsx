import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  Paper,
} from "@mui/material";

// Sample data for the chart
const data = [
  { name: "Jan", value: 40000 },
  { name: "Feb", value: 30000 },
  { name: "Mar", value: 20000 },
  { name: "Apr", value: 28000 },
  { name: "May", value: 22000 },
  { name: "Jun", value: 21000 },
  { name: "Jul", value: 30000 },
  { name: "Aug", value: 25000 },
  { name: "Sep", value: 27000 },
  { name: "Oct", value: 35000 },
  { name: "Nov", value: 15000 },
  { name: "Dec", value: 20000 },
];

const Lproject = () => {
  const [timeRange, setTimeRange] = useState("Last 30 Days");

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: 3,
          margin: "20px auto",
          width: "100%",
          maxWidth: "100%", // Ensure the Paper takes full width
        }}
      >
        {/* Header with title and filters */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight="bold">
            📊 Projects By Stage
          </Typography>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button size="small" color="primary">
              Sales Pipeline ⌄
            </Button>
            <Button size="small" color="primary">
              {timeRange} ⌄
            </Button>
          </ButtonGroup>
        </Box>

        {/* Responsive Container with Area Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorStage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4a00e0" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8e44ad" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="7 7" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `${value / 1000}K`} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4a00e0"
              fillOpacity={1}
              fill="url(#colorStage)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default Lproject;
