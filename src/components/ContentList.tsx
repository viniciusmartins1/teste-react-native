import { Button, FlatList, TouchableOpacity, View } from 'react-native';
import { ContentCard } from './ContentCard';
import { Content } from '@models/content';
import { Text } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { TNavigationScreenProps } from '../Routes';

type ContentListProps = {
  contents: Content[];
  isFavoriteList?: boolean;
  onDeleteFavorite?: (contentId: number) => void;
};

export function ContentList({ contents, isFavoriteList, onDeleteFavorite }: ContentListProps) {
  const navigate = useNavigation<TNavigationScreenProps>();

  return (
    <FlatList
      data={contents}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="flex">
          <TouchableOpacity onPress={() => navigate.navigate('detail', { contentId: item.id })}>
            <ContentCard
              title={item.title}
              thumbnailUrl={item.thumbnailUrl}
              category={item.category}
              duration={item.duration}
            />
          </TouchableOpacity>
          {isFavoriteList && (
            <Button
              title="Remover dos favoritos"
              onPress={() => {
                if (onDeleteFavorite) onDeleteFavorite(item.id);
              }}
            />
          )}
        </View>
      )}
      ListEmptyComponent={
        <View style={{ padding: 16 }} className="flex flex-1">
          <Text className="text-center text-xl">Nenhum dado disponível</Text>
        </View>
      }
      ItemSeparatorComponent={() => <View style={{ marginVertical: 12 }}></View>}
    />
  );
}
