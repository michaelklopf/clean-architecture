
class CourseRegistrationResponseMessage {
  success: boolean;
  errors: string[];
  message: string;

  constructor(success: boolean, errors: string[], message: string) {
    this.success = success;
    this.errors = errors;
    this.message = message || '';
  }
}

export default CourseRegistrationResponseMessage;
