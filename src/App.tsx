import './styles/global.css';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-cyan-300 text-2xl">Hello World</Text>
      <StatusBar style="dark" />
    </View>
  );
}
