import { Alert, FlatList, View } from 'react-native';
import { styles } from './styles';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { TMainScreenProps } from './types';
import { TopicsButton, CourseItem } from '../../components';
import { getCourses } from '../../requests/getCourses';
import { ICourse } from '../../globalTypes';

export function MainScreen(props: TMainScreenProps) {
  const { route, navigation } = props;
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string>('Все темы');

  useEffect(() => {
    if (route.params?.selectedTopic) {
      setSelectedTopic(route.params.selectedTopic);
    }
  }, [route.params?.selectedTopic]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (e) {
        Alert.alert('Oops', 'Something went wrong', [
          {
            text: 'Go back',
          },
        ]);
      }
    };

    fetchCourses();
  }, []);

  const topics = useMemo(() => {
    const tagSet = new Set<string>();

    courses?.forEach(course => {
      course?.tags?.forEach(tag => tagSet.add(tag));
    });

    return ['Все темы', ...Array.from(tagSet)];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    if (selectedTopic === 'Все темы') {
      return courses;
    }

    return courses?.filter(course => course.tags.includes(selectedTopic));
  }, [selectedTopic, courses]);

  const renderItem = useCallback(({ item }: { item: ICourse }) => {
    return <CourseItem item={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.allTopicsBtn}>
        <TopicsButton
          selectedTopic={selectedTopic}
          onPress={() => {
            navigation.navigate('TopicsScreen', {
              topics: topics,
              selectedTopic: selectedTopic,
            });
          }}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={filteredCourses}
          renderItem={renderItem}
          horizontal
          initialNumToRender={6}
          keyExtractor={el => el?.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </View>
  );
}
