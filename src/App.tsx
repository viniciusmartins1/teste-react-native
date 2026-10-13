import '@styles/global.css';
import { AppRoutes } from './Routes';
import { LoadingContextProvider } from '@contexts/LoadingContext';
import { ContentContextProvider } from '@contexts/ContentContext';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <LoadingContextProvider>
      <ContentContextProvider>
        <AppRoutes />
        <Toast />
      </ContentContextProvider>
    </LoadingContextProvider>
  );
}
