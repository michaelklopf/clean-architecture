import CourseRegistrationResponseMessage from '../messages/CourseRegistrationResponseMessage';

class CourseRegistrationResponsePresenter {

  handle(message: CourseRegistrationResponseMessage): string {
    if (message.success) {
      return 'Course registration successful!';
    }

    var errorOutput = '';
    message.errors.forEach(error => {
      errorOutput = errorOutput + 'Failed to register course(s)' + '\n' + error;
    });

    return errorOutput;
  }
}

export default CourseRegistrationResponsePresenter;
