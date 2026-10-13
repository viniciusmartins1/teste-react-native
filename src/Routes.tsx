import { HomePage } from './screens/Home';
import { DetailPage } from './screens/Detail';
import { FavoritesPage } from './screens/Favorites';

import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type TScreenDefinitions = {
  home: undefined;
  detail: { contentId: number };
  favorites: undefined;
};

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="detail"
          component={DetailPage}
          options={{
            title: 'Detalhe do Conteúdo',
          }}
        />
        <Stack.Screen
          name="favorites"
          component={FavoritesPage}
          options={{
            title: 'Favoritos',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>;

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>;
