import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { contentDetailsAdapter, contentListAdapter } from '@models/adapters/contentAdapter';

import type { Content, ContentDetails } from '@models/content';

import * as contentService from '@api/services/content';

import { LoadingContext } from './LoadingContext';
import Toast from 'react-native-toast-message';

type ContentContextType = {
  contents: Content[];
  contentSelected: ContentDetails | undefined;
  favorites: Content[];
  getContents: () => void;
  getContent: (contentId: number) => void;
  getFavorites: () => void;
  markAsFavorite: (contentId: number) => void;
  unmarkAsFavorite: (contentId: number, loadFavorites?: boolean) => void;
};

const ContentContext = createContext<ContentContextType>({
  contents: [],
  contentSelected: undefined,
  favorites: [],
  getContents: () => {},
  getContent: () => {},
  getFavorites: () => {},
  markAsFavorite: () => {},
  unmarkAsFavorite: () => {},
});

type ContentProviderProps = {
  children: ReactNode;
};

const ContentContextProvider = ({ children }: ContentProviderProps) => {
  const [contents, setContents] = useState<Content[]>([]);
  const [contentSelected, setContentSelected] = useState<ContentDetails>();
  const [favorites, setFavorites] = useState<Content[]>([]);

  const { openLoading, closeLoading } = useContext(LoadingContext);

  const getContents = useCallback(async () => {
    try {
      openLoading();
      const { data } = await contentService.getAllContents();

      setContents(
        data && data.data.length ? data.data.map((content) => contentListAdapter(content)) : []
      );
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao carregar catálogo de conteúdos',
        position: 'bottom',
      });
      setContents([]);
    } finally {
      closeLoading();
    }
  }, [openLoading, closeLoading]);

  const getContent = useCallback(
    async (contentId: number) => {
      try {
        openLoading();
        if (!contentId) {
          throw new Error('Id Inválido');
        }

        const { data } = await contentService.getContentById(Number(contentId));
        setContentSelected(contentDetailsAdapter(data));
      } catch (error) {
        setContentSelected(undefined);
        Toast.show({
          type: 'error',
          text1: 'Erro ao carregar detalhes do conteúdo',
          position: 'bottom',
        });
      } finally {
        closeLoading();
      }
    },
    [openLoading, closeLoading]
  );

  const getFavorites = useCallback(async () => {
    try {
      openLoading();
      const { data } = await contentService.getAllFavorites();
      setFavorites(
        data && data.data.length ? data.data.map((content) => contentListAdapter(content)) : []
      );
    } catch (error) {
      setFavorites([]);
      Toast.show({
        type: 'error',
        text1: 'Erro ao carregar favoritos',
        position: 'bottom',
      });
    } finally {
      closeLoading();
    }
  }, [openLoading, closeLoading]);

  const markAsFavorite = async (contentId: number) => {
    try {
      openLoading();
      await contentService.markAsFavorite(contentId);
      getContent(contentId);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao marcar conteúdo como favorito',
        position: 'bottom',
      });
      closeLoading();
    }
  };

  const unmarkAsFavorite = async (contentId: number, loadingFavorites?: boolean) => {
    try {
      openLoading();
      await contentService.unmarkAsFavorite(contentId);
      if (!loadingFavorites) {
        getContent(contentId);
        return;
      }
      getFavorites();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao desfavoritar conteúdo',
        position: 'bottom',
      });
      closeLoading();
    }
  };

  return (
    <ContentContext.Provider
      value={{
        contents,
        contentSelected,
        favorites,
        getContents,
        getContent,
        getFavorites,
        markAsFavorite,
        unmarkAsFavorite,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export { ContentContext, ContentContextProvider };
