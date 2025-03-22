import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Avatar,
  Chip,
} from "@mui/material";

const Companies = () => {
  const [data, setData] = useState([]);

  // Fetching API data
  useEffect(() => {
    axios
      .get("http://localhost:6060/getcompanies") // 
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  src={row.logo}
                  alt={row.name}
                  style={{ marginRight: 8 }}
                />
                {row.name}
              </TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <Chip
                  label={row.tag}
                  color={row.tag === "Promotion" ? "primary" : "warning"}
                />
              </TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>⭐ {row.rating}</TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={row.status === "Active" ? "success" : "error"}
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" size="small">
                  Action
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Companies;
