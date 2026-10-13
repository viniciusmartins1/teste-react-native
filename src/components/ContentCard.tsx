import { Image, Text, View } from 'react-native';

type ContentCardProps = {
  title: string;
  thumbnailUrl: string;
  category: string;
  duration: string;
};

export function ContentCard({ title, thumbnailUrl, category, duration }: ContentCardProps) {
  return (
    <View className="w-full gap-5 flex-row rounded-lg h-50 border-2 border-gray-300">
      <Image
        source={thumbnailUrl ? { uri: thumbnailUrl } : require('@assets/imageDefault.png')}
        className="w-40 h-40 rounded-md"
      />
      <View className="flex ml-3 min-w-0 py-2 gap-10" style={{ width: 250 }}>
        <Text numberOfLines={2} className="text-lg font-bold" style={{ marginRight: 32 }}>
          {title}
        </Text>
        <View className=" flex flex-row gap-5">
          <Text className="text-lg">{category}</Text>
          <Text className="text-lg">{duration}</Text>
        </View>
      </View>
    </View>
  );
}
