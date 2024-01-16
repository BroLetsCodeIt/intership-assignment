
import { CssBaseline, createTheme } from '@mui/material';
import './App.css'
import {ThemeProvider} from '@mui/material';
import Main from './components/Main';
import {Route , Routes } from 'react-router-dom';
import SecondPage from './components/SecondPage';
const darkTheme = createTheme({
   palette:{
    mode:'light'
   }
})


function App() {

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/secondpage' element={<SecondPage/>}/>
      </Routes>
      
    </ThemeProvider>
    </>
  )
}

export default App
