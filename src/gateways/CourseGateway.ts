import Course from '../entities/Course';

export default interface CourseGateway {
  getByCode(code: string): Course;
  getAll(): Course[];
  addCourse(course: Course): void;
}
