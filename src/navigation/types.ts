export type RootStackParamList = {
  MainScreen: { selectedTopic?: string };
  TopicsScreen: {
    topics: string[];
    selectedTopic: string;
  };
};
