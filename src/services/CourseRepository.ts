import Course from '../entities/Course';

interface ICourseRepository {
  getByCode(code: string): Course;
  getAll(): Course[];
}

class CourseRepository implements ICourseRepository {
  getByCode(code: string): Course {
    return new Course('toImplement', 'soon');
  }

  getAll(): Course[] {
    return [];
  }
}

export default CourseRepository;
