import { Provider } from 'react-redux';

import { store } from '../../my_redux';

import { ThemeProvider, createTheme } from '@mui/material';

import MyRoutes from '../my_routes';

export default function App() {

  // Створюємо темну тему для material компонентів.
  const darkTheme = createTheme({
    palette: {
    mode: 'dark',
    },
  });
  
  return (
    // Передаємо store для всіх компонентів.
    <Provider store={ store }>
      {/* Передаємо темну тему для material компонентів. */}
      <ThemeProvider theme={ darkTheme }>
        <MyRoutes />
      </ThemeProvider> 
    </Provider> 
  );
}