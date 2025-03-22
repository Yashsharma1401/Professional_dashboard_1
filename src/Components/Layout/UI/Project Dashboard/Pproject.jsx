// DonutChart.jsx
import React from "react";
import {
  
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

// Sample data for the chart
const data = [
    { name: "Campaigns", value: 44, color: "#5F00FF" }, // Purple
    { name: "Google", value: 55, color: "#FFA500" }, // Orange
    { name: "Referrals", value: 41, color: "#004B87" }, // Dark Blue
    { name: "Paid Social", value: 17, color: "#FF0000" }, // Red
];

const Pproject = () => {
    return (
        <div style={{ width: "100%", height: "400px" }}>

                {/* ResponsiveContainer makes the chart fully responsive */}
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        {/* Outer Pie for Donut Shape */}
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius="60%"
                            outerRadius="80%"
                            paddingAngle={3}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend
                            verticalAlign="bottom"
                            height={50}
                            iconType="circle"
                            iconSize={10}
                        />
                    </PieChart>
                </ResponsiveContainer>
          
        </div>
    );
};

export default Pproject;
