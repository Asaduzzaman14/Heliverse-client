
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/router';

import { ThemeProvider } from "@material-tailwind/react";
function App() {

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
}

export default App;
