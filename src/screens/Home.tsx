import { ContentList } from '@components/ContentList';
import { ContentContext } from '@contexts/ContentContext';
import { LoadingContext } from '@contexts/LoadingContext';
import { useContext, useEffect } from 'react';

import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { TNavigationScreenProps } from '../Routes';
import { useNavigation } from '@react-navigation/native';

export const HomePage = () => {
  const navigation = useNavigation<TNavigationScreenProps>();
  const { contents, getContents } = useContext(ContentContext);
  const { loading } = useContext(LoadingContext);

  useEffect(() => {
    getContents();
  }, [getContents]);

  return (
    <View style={{ marginVertical: 16, paddingHorizontal: 8 }}>
      <TouchableOpacity
        className="flex justify-end mb-4 bg-orange-500 disabled:bg-gray-400"
        onPress={() => navigation.navigate('favorites')}
        disabled={loading}
      >
        <Text className="text-xl  text-white rounded-md font-semibold text-center w-full p-2">
          Acessar Favoritos
        </Text>
      </TouchableOpacity>
      {loading ? <ActivityIndicator size="large" /> : <ContentList contents={contents} />}
    </View>
  );
};
