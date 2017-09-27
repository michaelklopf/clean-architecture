// Interface adapter or gateway

import Course from '../entities/Course';

import CourseGateway from './CourseGateway';

class CourseRepository implements CourseGateway {
  courses: Course[];

  constructor() {
    this.courses = [];
  }

  getByCode(code: string): Course {
    var foundCourses = this.courses.filter((course): boolean => { return course.code === code; });
    return foundCourses[0];
  }

  getAll(): Course[] {
    return this.courses;
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }
}

export default CourseRepository;
