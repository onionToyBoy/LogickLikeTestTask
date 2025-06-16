import { ICourse } from '../globalTypes';

export const getCourses = async (): Promise<ICourse[]> => {
  const res = await fetch('https://logiclike.com/docs/courses.json');

  if (!res.ok) {
    throw new Error('Failed to fetch courses');
  }

  return await res.json();
};
