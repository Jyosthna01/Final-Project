// src/components/TaskCard.js
import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

const TaskCard = ({ task }) => {
    return (
        <Card sx={{ mb: 2, padding: 1 }}>
            <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    Checklist ({task.checklist.completed}/{task.checklist.total})
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <Chip
                        label={task.priority}
                        color={task.priority === "High" ? "error" : "success"}
                        size="small"
                        sx={{ mr: 1 }}
                    />
                    <Chip
                        label={task.dueDate}
                        color={task.isDuePassed ? "error" : "success"}
                        size="small"
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default TaskCard;
