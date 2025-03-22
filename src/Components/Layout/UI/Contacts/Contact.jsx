import { useEffect, useState } from "react";
import React from "react";
import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  Typography,
  Tooltip,
} from "@mui/material";
import { MoreVert, Email, Phone, VideoCall, Chat, Facebook, Add } from "@mui/icons-material";

export const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6060/getcontact") // Use your actual backend URL
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="end" mb={2}>
        
        <Button variant="contained" color="error" startIcon={<Add />}>Add Contacts</Button>
      </Box>
      <TableContainer component={Paper}>
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
              <TableCell>Contact</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={contact.avatar || "https://via.placeholder.com/40"} />
                    <Box>
                      <Typography variant="subtitle1">{contact.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{contact.role}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>
                  <Chip label={contact.tag} color="secondary" size="small" />
                </TableCell>
                <TableCell>{contact.location}</TableCell>
                <TableCell>
                  <Typography color="warning.main">⭐ {contact.rating}</Typography>
                </TableCell>
                <TableCell>{contact.owner}</TableCell>
                <TableCell>
                  <Tooltip title="Email"><IconButton><Email /></IconButton></Tooltip>
                  <Tooltip title="Call"><IconButton><Phone /></IconButton></Tooltip>
                  <Tooltip title="Video Call"><IconButton><VideoCall /></IconButton></Tooltip>
                  <Tooltip title="Chat"><IconButton><Chat /></IconButton></Tooltip>
                  <Tooltip title="Facebook"><IconButton><Facebook /></IconButton></Tooltip>
                </TableCell>
                <TableCell>
                  <Chip label={contact.status} color={contact.status === "Active" ? "success" : "error"} />
                </TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Contact
