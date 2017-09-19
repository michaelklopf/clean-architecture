import CourseRegistrationRequestMessage from '../messages/CourseRegistrationRequestMessage';
import CourseRegistrationResponseMessage from '../messages/CourseRegistrationResponseMessage';
import AuthService from '../services/AuthService';
import CourseRepository from '../services/CourseRepository';
import StudentRepository from '../services/StudentRepository';

interface IRequestHandler {
  handle(message: CourseRegistrationRequestMessage): CourseRegistrationResponseMessage;
}

class RequestCourseRegistrationInteractor implements IRequestHandler {
  authService: AuthService;
  courseRepository: CourseRepository;
  studentRepository: StudentRepository;

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
    
  }
}

export default RequestCourseRegistrationInteractor;
