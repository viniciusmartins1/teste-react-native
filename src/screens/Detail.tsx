import { useRoute } from '@react-navigation/native';
import { Image, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { TRouteProps } from '../Routes';
import { useContext, useEffect } from 'react';
import { ContentContext } from '@contexts/ContentContext';
import { LoadingContext } from '@contexts/LoadingContext';

export const DetailPage = () => {
  const {
    params: { contentId },
  } = useRoute<TRouteProps<'detail'>>();
  const {
    getContent,
    contentSelected: content,
    markAsFavorite,
    unmarkAsFavorite,
  } = useContext(ContentContext);
  const { loading } = useContext(LoadingContext);

  useEffect(() => {
    getContent(contentId);
  }, [getContent, contentId]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!loading && !content) {
    return (
      <View style={{ padding: 16 }} className="flex flex-1">
        <Text className="text-center text-xl">Nenhum dado disponível</Text>
      </View>
    );
  }

  return (
    <View style={{ marginVertical: 16, paddingHorizontal: 8 }} className="flex gap-4">
      <Image
        source={
          content?.thumbnailUrl
            ? { uri: content.thumbnailUrl }
            : require('@assets/imageDefault.png')
        }
        className="w-full h-80 rounded-md"
      />

      <View className="flex gap-5">
        <Text className="text-3xl">{content?.title}</Text>
        <Text className="text-lg">{content?.description}</Text>
        <Text className="text-lg">Instrutor(a): {content?.instructor}</Text>

        <View className="flex flex-row gap-10">
          <Text className="text-md">{content?.category}</Text>
          <Text className="text-md">{content?.contentType}</Text>
          <Text className="text-md">{content?.duration}</Text>
        </View>

        {content?.isFavorite && <Text className="text-xl text-yellow-500">Favorito ⭐</Text>}

        <TouchableOpacity
          onPress={() =>
            content?.isFavorite ? unmarkAsFavorite(content!.id) : markAsFavorite(content!.id)
          }
        >
          <Text className="bg-green-400 mt-10 py-2 px-2 rounded-lg text-lg text-white text-center font-bold">
            {content?.isFavorite ? 'Desfavoritar' : 'Marcar como Favorito'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
