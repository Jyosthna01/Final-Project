// src/components/TaskBoard.js
import React from 'react';
import { Grid, Typography } from '@mui/material';
import TaskCard from './TaskCard';

const TaskBoard = ({ tasks }) => {
    const columns = {
        backlog: "Backlog",
        todo: "To do",
        inProgress: "In progress",
        done: "Done"
    };

    return (
        <Grid container spacing={2} sx={{ mt: 2 }}>
            {Object.keys(columns).map((columnKey) => (
                <Grid item xs={3} key={columnKey}>
                    <Typography variant="h6">{columns[columnKey]}</Typography>
                    {tasks[columnKey].map((task, index) => (
                        <TaskCard key={index} task={task} />
                    ))}
                </Grid>
            ))}
        </Grid>
    );
};

export default TaskBoard;
