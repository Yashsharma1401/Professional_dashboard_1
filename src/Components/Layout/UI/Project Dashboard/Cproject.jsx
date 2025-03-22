
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

// Custom styles
const StyledTableContainer = styled(TableContainer)({
  margin: "20px auto",
  maxWidth: 800,
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
});

const priorityIcons = {
  Truellysell: "/icons/truellysell.png",
  Dreamschat: "/icons/dreamschat.png",
  Servbook: "/icons/servbook.png",
  DreamPOS: "/icons/dreampos.png",
};

const clientIcons = {
  NovaWave: "/icons/novawave.png",
  BlueSky: "/icons/bluesky.png",
  SilverHawk: "/icons/silverhawk.png",
  SummitPeak: "/icons/summitpeak.png",
  RiverStone: "/icons/riverstone.png",
};

// Data for the table
const rows = [
  {
    priority: "Truellysell",
    name: "NovaWave LLC",
    client: "High",
    dueDate: "15 Oct 2023",
    clientIcon: clientIcons.NovaWave,
  },
  {
    priority: "Dreamschat",
    name: "BlueSky Industries",
    client: "Medium",
    dueDate: "22 Oct 2023",
    clientIcon: clientIcons.BlueSky,
  },
  {
    priority: "Truellysell",
    name: "SilverHawk",
    client: "High",
    dueDate: "27 Oct 2023",
    clientIcon: clientIcons.SilverHawk,
  },
  {
    priority: "Servbook",
    name: "SummitPeak",
    client: "High",
    dueDate: "01 Oct 2023",
    clientIcon: clientIcons.SummitPeak,
  },
  {
    priority: "DreamPOS",
    name: "RiverStone Ventur",
    client: "Medium",
    dueDate: "06 Oct 2023",
    clientIcon: clientIcons.RiverStone,
  },
];

// Chip colors based on priority
const getChipColor = (priority) => {
  switch (priority) {
    case "High":
      return "error";
    case "Medium":
      return "warning";
    default:
      return "default";
  }
};

const Cproject = () => {
  return (
    <StyledTableContainer component={Paper}>
      <Table>
        {/* Table Header */}
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Priority
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Client
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Due Date
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} hover>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar
                    src={priorityIcons[row.priority]}
                    alt={row.priority}
                    sx={{ width: 24, height: 24 }}
                  />
                  <Typography>{row.priority}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar
                    src={row.clientIcon}
                    alt={row.name}
                    sx={{ width: 24, height: 24 }}
                  />
                  <Typography>{row.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Chip
                  label={row.client}
                  color={getChipColor(row.client)}
                  size="small"
                  icon={<Box component="span" sx={{ bgcolor: "red", borderRadius: "50%", width: 8, height: 8, marginLeft: 1 }} />}
                />
              </TableCell>
              <TableCell>
                <Typography>{row.dueDate}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default Cproject;
