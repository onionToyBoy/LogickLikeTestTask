import { Pressable, View, FlatList, StyleSheet } from 'react-native';
import { TTopicsScreenPropstype } from './types';
import { styles } from './styles';
import { useCallback, useState } from 'react';
import { UIText } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CrossIcon } from '../../assets/icons';

export const TopicsScreen = (props: TTopicsScreenPropstype) => {
  const { route, navigation } = props;
  const topics = route.params.topics;
  const selectedTopic = route.params.selectedTopic;

  const [selectedValue, setSelectedValue] = useState<string>(selectedTopic);

  const renderItem = useCallback(
    ({ item }: { item: string }) => {
      return (
        <Pressable
          onPress={() => {
            setSelectedValue(item);
          }}
          style={StyleSheet.flatten([
            styles.topicItemContainer,
            selectedValue === item ? styles.selectedItemContainer : {},
          ])}
        >
          <UIText
            style={StyleSheet.flatten([
              styles.text,
              selectedValue === item ? styles.selectedItemText : {},
            ])}
          >
            {item}
          </UIText>
        </Pressable>
      );
    },
    [selectedValue],
  );

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <UIText style={styles.text}>Выбор темы</UIText>
          <Pressable
            onPress={() => {
              navigation.navigate('MainScreen', {
                selectedTopic: selectedValue,
              });
            }}
            style={styles.closeBtn}
          >
            <CrossIcon />
          </Pressable>
        </View>
        <FlatList
          data={topics}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
