// TaskStepChart.jsx
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";

// Sample data for the chart
const data = [
  { name: "Jan", task: 10000 },
  { name: "Feb", task: 40000 },
  { name: "Mar", task: 20000 },
  { name: "Apr", task: 50000 },
  { name: "May", task: 10000 },
  { name: "Jun", task: 30000 },
  { name: "Jul", task: 20000 },
  { name: "Aug", task: 40000 },
  { name: "Sep", task: 20000 },
  { name: "Oct", task: 50000 },
  { name: "Nov", task: 30000 },
  { name: "Dec", task: 20000 },
];

const Llnewdev = () => {
  const [dateRange, setDateRange] = useState("03/14/2025 - 03/20/2025");

return (
    <Paper
        elevation={3}
        sx={{
            margin : 1,
            padding: 3,
            borderRadius: 3,
            width: "100%", // Ensures the container takes up 100% width
        }}
    >
        {/* Header with title and date range */}
        <Box
            fullwidth
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
        >
            <Typography variant="h6" fontWeight="bold">
                📊 Tasks by Year
            </Typography>

            <TextField
                variant="outlined"
                size="small"
                value={dateRange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CalendarMonth />
                        </InputAdornment>
                    ),
                }}
                sx={{ width: 220 }}
            />
        </Box>

        {/* Responsive Container with Step Line Chart */}
        <ResponsiveContainer width="100%" height={350}>
            <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value / 1000}K`} />
                <Tooltip />
                <Line
                    type="stepAfter"
                    dataKey="task"
                    stroke="#4a00e0"
                    strokeWidth={3}
                    dot={{ fill: "#4a00e0", stroke: "#4a00e0", r: 5 }}
                />
            </LineChart>
        </ResponsiveContainer>
    </Paper>
);
};

export default Llnewdev;
