
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/router';
import { Provider } from 'react-redux';
import { ThemeProvider } from "@material-tailwind/react";
import store from './redux/store';
function App() {

  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={routes} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
