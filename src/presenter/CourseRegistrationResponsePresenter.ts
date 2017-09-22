import CourseRegistrationResponseMessage from '../messages/CourseRegistrationResponseMessage';

class CourseRegistrationResponsePresenter {

  handle(message: CourseRegistrationResponseMessage): void {
    if (message.success) {
      console.log('Course registration successful!');
    }

    var errorOutput = '';
    message.errors.forEach(error => {
      errorOutput = errorOutput + 'Failed to register course(s)' + '\n' + error;
    });

    console.log(errorOutput);
  }
}

export default CourseRegistrationResponsePresenter;
