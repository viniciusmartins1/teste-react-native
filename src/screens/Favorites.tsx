import { ContentList } from '@components/ContentList';
import { ContentContext } from '@contexts/ContentContext';
import { LoadingContext } from '@contexts/LoadingContext';
import { useContext, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

export const FavoritesPage = () => {
  const { getFavorites, favorites, unmarkAsFavorite } = useContext(ContentContext);
  const { loading } = useContext(LoadingContext);

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return (
    <View style={{ marginVertical: 16, paddingHorizontal: 8 }}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ContentList
          contents={favorites}
          isFavoriteList
          onDeleteFavorite={(contentId) => unmarkAsFavorite(contentId, true)}
        />
      )}
    </View>
  );
};
