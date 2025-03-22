// LeadsTable.jsx
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
  Typography,
  Paper,
  Box,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// Lead data
export const leadData = [
  {
    leadName: "Collins",
    companyName: "NovaWave LLC",
    location: "Newyork, USA",
    phone: "+1 875455453",
    status: "Not Contacted",
    logo: "/icons/novawave.png",
  },
  {
    leadName: "Konopelski",
    companyName: "BlueSky Industries",
    location: "Winchester, KY",
    phone: "+1 989757485",
    status: "Contacted",
    logo: "/icons/bluesky.png",
  },
  {
    leadName: "Adams",
    companyName: "SilverHawk",
    location: "Jametown, NY",
    phone: "+1 546555455",
    status: "Contacted",
    logo: "/icons/silverhawk.png",
  },
  {
    leadName: "Schumm",
    companyName: "SummitPeak",
    location: "Compton, RI",
    phone: "+1 454478787",
    status: "Not Contacted",
    logo: "/icons/summitpeak.png",
  },
];

// Status color mapping
const getStatusColor = (status) => {
  switch (status) {
    case "Contacted":
      return "warning";
    case "Not Contacted":
      return "primary";
    default:
      return "default";
  }
};

const Leaddashboard = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        margin: "10px 20px",
        maxWidth: 1000,
        padding: 2,
        borderRadius: 3,
      }}
    >
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" fontWeight="bold">
          📋 Recently Created Leads
        </Typography>
        <Button
          variant="outlined"
          size="small"
          startIcon={<CalendarMonthIcon />}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Last 30 days
        </Button>
      </Box>

      {/* Table Container */}
      <TableContainer>
        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Lead Name</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Company Name</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Phone</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Lead Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {leadData.map((lead, index) => (
              <TableRow key={index} hover>
                <TableCell>
                  <Typography>{lead.leadName}</Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar
                      src={lead.logo}
                      alt={lead.companyName}
                      sx={{ width: 32, height: 32 }}
                    />
                    <Box>
                      <Typography>{lead.companyName}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {lead.location}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography>{lead.phone}</Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={lead.status}
                    color={getStatusColor(lead.status)}
                    size="small"
                    sx={{
                      borderRadius: "8px",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Leaddashboard;
