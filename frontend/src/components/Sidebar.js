// src/components/Sidebar.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, Analytics, Settings, Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Box sx={{ width: 250, bgcolor: 'grey.100', height: '100vh', padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Pro Manage</Typography>
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon><Dashboard /></ListItemIcon>
                    <ListItemText primary="Board" />
                </ListItem>
                <ListItem button component={Link} to="/analytics">
                    <ListItemIcon><Analytics /></ListItemIcon>
                    <ListItemText primary="Analytics" />
                </ListItem>
                <ListItem button component={Link} to="/settings">
                    <ListItemIcon><Settings /></ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
                <ListItem button component={Link} to="/logout">
                    <ListItemIcon><Logout /></ListItemIcon>
                    <ListItemText primary="Log out" />
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;
