import { useState } from "react";
import { useUserContext } from "../CONTEXT FOLDER/userContext";
import { ThemeProvider, Container, TextField, Button, Typography } from "@mui/material";
import { tealTheme } from "../../THEME/theme";

function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    const { currentUser, handleUpdateUser } = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation logic remains the same
    }

    if (currentUser.email) {
        return (
            <ThemeProvider theme={tealTheme}>
                <Container>
                    <Typography>Welcome {currentUser.email}!</Typography>
                    <Button onClick={() => handleUpdateUser({})} variant="contained" color="primary">
                        Log Out
                    </Button>
                </Container>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider theme={tealTheme}>
            <Container>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        label="Email" 
                        value={userEmail} 
                        onChange={(e) => setUserEmail(e.target.value)} 
                        fullWidth 
                        margin="normal"
                    />
                    <TextField 
                        label="Password" 
                        type="password"
                        value={userPassword} 
                        onChange={(e) => setUserPassword(e.target.value)} 
                        fullWidth 
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Login
                    </Button>
                </form>
            </Container>
        </ThemeProvider>
    );
}

export default LoginForm;

// import { useState } from "react";
// import { useUserContext } from "../CONTEXT FOLDER/userContext";
// import { tealTheme } from "../../THEME/theme";
// import { ThemeProvider } from "@emotion/react";
// // import BitcoinRates from "../BITCOIN Exercise/Bitcoin rates";

// function LoginForm() {
//     const [userEmail, setUserEmail] = useState('');
//     const [userPassword, setUserPassword] = useState('');
//     const [submitResult, setSubmitResult] = useState('');
//     // destructure the context values passed via UserProvider
//     const { currentUser, handleUpdateUser } = useUserContext();

//     // alternative using the useContext hook directly, either works
//     //const {currentUser, handleUpdateUser} = useContext(UserContext);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (userPassword.length < 5) {
//             setSubmitResult('Password must be at least 5 chars long');
//         } else if (userPassword === userEmail) {
//             setSubmitResult('Password must not match email address');
//         } else {
//             setSubmitResult('Successful login.');
//             handleUpdateUser({ email: userEmail }); // context function
//         }
//     }

//     {/* if the user is already logged in, show msg instead of form */ }
//     if (currentUser.email) return (
//         <>
//         {/* <p>Welcome {currentUser.email}!</p> */}
//         {/* <BitcoinRates></BitcoinRates> */}
//             <button onClick={() => handleUpdateUser({})}>Log Out</button>
//         </>
//     );
//     // otherwise render same form as previously, no changes

//     return <>
//     <ThemeProvider theme={tealTheme}>
//         <form onSubmit={handleSubmit}>
//             <label>Email: <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} /></label><br />
//             <label>Password: <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} /></label><br />
//             <button type="submit">Login</button>
//         </form>
//         </ThemeProvider>
//     </>
// }
// export default LoginForm