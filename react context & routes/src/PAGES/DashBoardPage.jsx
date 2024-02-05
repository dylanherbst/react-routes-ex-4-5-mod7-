import { useNavigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../CONTEXT FOLDER/userContext';
import { Container, Typography, Button, Box } from '@mui/material';

export default function DashboardPage() {
    const navigate = useNavigate();
    const { currentUser } = useUserContext();

    return (
        <Container>
            <Typography variant="h1" sx={{ mt: 2 }}>Dashboard</Typography>
            <Typography variant="h2" sx={{ mb: 2 }}>Welcome back, {currentUser.email}</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button variant="contained" color="primary" onClick={() => navigate('/dash/tasks')}>
                    Show Tasks
                </Button>
                <Button variant="contained" color="primary" onClick={() => navigate('/dash/messages')}>
                    Show Messages
                </Button>
                <Button variant="contained" color="secondary" onClick={() => navigate(-1)}>
                    Back
                </Button>
            </Box>

            <Outlet />
        </Container>
    );
}

// For DashboardMessages
export function DashboardMessages(props) {
    const { currentUser } = useUserContext();
    return (
        <Typography variant="body1">
            Welcome to your dashboard, {currentUser.email}. Here is your inbox.
        </Typography>
    );
}


// import { useNavigate, Outlet } from 'react-router-dom'
// import { useUserContext } from '../CONTEXT FOLDER/userContext';

// export default function DashboardPage() {
// // built-in hook in React Router DOM, returns a function

// const navigate = useNavigate();
// const { currentUser } = useUserContext();

// return (
// <div className="DashboardPage componentBox">
// <h1>Dashboard</h1>
// <h2>Welcome back!{currentUser.email}</h2>

// <Outlet /> 

// <button onClick={() => navigate('/dash/tasks')}>
// Show Tasks</button>
// <button onClick={() => navigate('/dash/messages')}>
// Show Messages</button>
// <button onClick={() => navigate(-1)}>
// Back</button>
// </div>
// )
// }

// // Add this code to DashboardPage.jsx : nested route path components
// // rendered by matching nested routes in AppRoutes.jsx
// // These components will appear in the <Outlet /> placeholder spot
// // in the DashboardPage component if the route matches

// export function DashboardMessages(props) {

// const { currentUser } = useUserContext();
// return (
// <div className="DashboardMessages">
// <p>Welcome to your dashboard,{currentUser.email} here is your inbox </p>
// </div>
// )
// }


export function DashboardTasks(props) {
const tasks = [
{ id: 1, name: 'Learn React' },
{ id: 2, name: 'Decide on capstone project' },
{ id: 3, name: 'Learn databases' }
]
return (
<div className="DashboardTasks">
<ul className="tasks">
{ tasks.map(task => <li key={task.id}>{task.name}</li>) }
</ul>
</div>
)
}