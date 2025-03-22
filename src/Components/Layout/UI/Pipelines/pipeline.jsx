import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  LinearProgress,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const PipelineTable = () => {
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  // Fetching data from API
  useEffect(() => {
    axios
      .get("http://localhost:6060/getpipelines") // ✅ Replace with your API URL
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Handle menu action
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Get progress value and color based on stage
  const getStageDetails = (stage) => {
    switch (stage) {
      case "Win":
        return { value: 100, color: "success", label: "Win" };
      case "Lost":
        return { value: 0, color: "error", label: "Lost" };
      case "In Pipeline":
        return { value: 50, color: "secondary", label: "In Pipeline" };
      case "Conversation":
        return { value: 70, color: "info", label: "Conversation" };
      default:
        return { value: 0, color: "default", label: "Unknown" };
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Search and Buttons */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <TextField
          variant="outlined"
          placeholder="Search Pipeline"
          size="small"
          style={{ width: "300px" }}
        />
        <div>
          <Button variant="outlined" style={{ marginRight: "10px" }}>
            Sort
          </Button>
          <Button variant="outlined" style={{ marginRight: "10px" }}>
            Export
          </Button>
          <Button variant="contained" color="error">
            Add Pipeline
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Pipeline Name</TableCell>
            <TableCell>Total Deal Value</TableCell>
            <TableCell>No of Deals</TableCell>
            <TableCell>Stages</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            const stageDetails = getStageDetails(row.stage);
            return (
              <TableRow key={index}>
                <TableCell>
                  <strong>{row.pipeline_name}</strong>
                </TableCell>
                <TableCell>{row.total_deal_value}</TableCell>
                <TableCell>{row.no_of_deals}</TableCell>
                <TableCell>
                  <div style={{ width: "150px" }}>
                    <LinearProgress
                      variant="determinate"
                      value={stageDetails.value}
                      color={stageDetails.color}
                      style={{ height: "8px", borderRadius: "5px" }}
                    />
                    <span
                      style={{
                        display: "block",
                        marginTop: "5px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        textAlign: "center",
                        color:
                          stageDetails.color === "error"
                            ? "red"
                            : stageDetails.color === "success"
                            ? "green"
                            : stageDetails.color === "info"
                            ? "teal"
                            : "purple",
                      }}
                    >
                      {stageDetails.label}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{row.created_date}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={row.status === "Active" ? "success" : "error"}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default PipelineTable;
