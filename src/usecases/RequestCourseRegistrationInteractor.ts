import CourseRegistrationRequestMessage from '../messages/CourseRegistrationRequestMessage';
import CourseRegistrationResponseMessage from '../messages/CourseRegistrationResponseMessage';

export interface IRequestHandler {
  handle(message: CourseRegistrationRequestMessage): CourseRegistrationResponseMessage;
}

class RequestCourseRegistrationInteractor implements IRequestHandler {
  handle(message: CourseRegistrationRequestMessage): CourseRegistrationResponseMessage {
    
  }
}

export default RequestCourseRegistrationInteractor;
