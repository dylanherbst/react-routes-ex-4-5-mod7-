import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { ThemeProvider } from './CONTEXT FOLDER/theme context'
// import ThemeToggleBtn from './COMPONENTS FOLDER/Theme Toggle Btn'
// import UserProfile from './COMPONENTS FOLDER/UserProfile'
// import UserInfoDisplay from './COMPONENTS FOLDER/Display user'
// import { UserContextProvider } from './CONTEXT FOLDER/example user context'
import AppRoutes from './ROUTES/AppRoutes'
import NavBar from './COMPONENTS FOLDER/NavBar'
import { UserProvider } from './CONTEXT FOLDER/userContext'
import { tealTheme } from '../THEME/theme'
import { ThemeProvider } from '@mui/material'
import ResponsiveAppBar from './COMPONENTS FOLDER/App bar'


function App() {


  return (
    <>
    <ThemeProvider theme={tealTheme}>
      <ResponsiveAppBar></ResponsiveAppBar>
    <UserProvider>
    <NavBar></NavBar>
<AppRoutes></AppRoutes>
</UserProvider>
</ThemeProvider>



 {/* <ThemeProvider>
  <UserContextProvider>

 <UserInfoDisplay></UserInfoDisplay>
  <ThemeToggleBtn></ThemeToggleBtn>

  <UserProfile></UserProfile>
  </UserContextProvider>
 </ThemeProvider> */}
    </>
  )
}

export default App
