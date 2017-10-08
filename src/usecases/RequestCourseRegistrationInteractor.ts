import CourseRegistrationRequestMessage from '../messages/CourseRegistrationRequestMessage';
import CourseRegistrationResponseMessage from '../messages/CourseRegistrationResponseMessage';
import AuthService from '../gateways/AuthService';
import CourseGateway from '../gateways/CourseGateway';
import StudentGateway from '../gateways/StudentGateway';

export interface RequestHandler {
  handle(message: CourseRegistrationRequestMessage): CourseRegistrationResponseMessage;
}

class RequestCourseRegistrationInteractor implements RequestHandler {

  // these things are Gateways, they deal with database, rest service or other external agencies
  authService: AuthService;
  courseGateway: CourseGateway;
  studentGateway: StudentGateway;
  // Gateways - fin

  constructor(authService: AuthService, courseGateway: CourseGateway, studentGateway: StudentGateway) {
    this.authService = authService;
    this.courseGateway = courseGateway;
    this.studentGateway = studentGateway;
  }

  handle(message: CourseRegistrationRequestMessage): CourseRegistrationResponseMessage {
    // student must be logged into system
    if (!this.authService.isAuthenticated()) {
      return new CourseRegistrationResponseMessage(false, [], 'Operation failed, not authenticated.');
    }

    // get the student
    var student = this.studentGateway.getById(message.studentId);
    console.log(student);
    if (student === undefined || student === null) {
      return new CourseRegistrationResponseMessage(false, [], 'Student is not enrolled.');
    }

    // save off any failures in here
    var errors: string[] = [];

    // register student for each course if possible
    message.selectedCourseCodes.forEach(courseCode => {
      var course = this.courseGateway.getByCode(courseCode);

      if (!student.registerForCourse(course)) {
        errors.push('Unable to register for ', course.code);
      }
    });

    this.studentGateway.save(student);

    return new CourseRegistrationResponseMessage(errors.length === 0, errors);
  }
}

export default RequestCourseRegistrationInteractor;
