// Entity - contain any enterprise-wide business rules and logic
// alternative name: Business Objects - rules that are not application specific

import Course from './Course';

class Student {
  firstName: string;
  lastName: string;

  registeredCourses: Course[];
  enrolledCourse: Course[];

  constructor() {
    this.registeredCourses = [];
    this.enrolledCourse = [];
  }

  registerForCourse(course: Course): boolean {
    if (this.enrolledCourse.find((enrolledCourse): boolean => { return enrolledCourse.Code == course.Code })) {
      return false;
    }
    if (Date.now() > Date.now(course.StartDate - (3600 * 24 * 5))) {
      return false;
    }

    this.registeredCourses.push(course);
    return true;
  }
}

export default Student;
