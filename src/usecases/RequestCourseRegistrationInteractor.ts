import CourseRegistrationRequestMessage from '../messages/CourseRegistrationRequestMessage';
import CourseRegistrationResponseMessage from '../messages/CourseRegistrationResponseMessage';
import AuthService from '../gateways/AuthService';
import CourseRepository from '../gateways/CourseRepository';
import StudentRepository from '../gateways/StudentRepository';

interface IRequestHandler {
  handle(message: CourseRegistrationRequestMessage): CourseRegistrationResponseMessage;
}

class RequestCourseRegistrationInteractor implements IRequestHandler {

  // these things are Gateways, they deal with database, rest service or other external agencies
  authService: AuthService;
  courseRepository: CourseRepository;
  studentRepository: StudentRepository;
  // Gateways - fin

  constructor(authService: AuthService, courseRepository: CourseRepository, studentRepository: StudentRepository) {
    this.authService = authService;
    this.courseRepository = courseRepository;
    this.studentRepository = studentRepository;
  }

  handle(message: CourseRegistrationRequestMessage): CourseRegistrationResponseMessage {
    // student must be logged into system
    if (!this.authService.isAuthenticated()) {
      return new CourseRegistrationResponseMessage(false, [], 'Operation failed, not authenticated.');
    }

    // get the student
    var student = this.studentRepository.getById(message.studentId);

    // save off any failures in here
    var errors: string[] = [];

    // register student for each course if possible
    message.selectedCourseCodes.forEach(courseCode => {
      var course = this.courseRepository.getByCode(courseCode);

      if (!student.registerForCourse(course)) {
        errors.push("Unable to register for ", course.code);
      }
    });

    this.studentRepository.save(student);

    return new CourseRegistrationResponseMessage(errors.length == 0, errors);
  }
}

export default RequestCourseRegistrationInteractor;
