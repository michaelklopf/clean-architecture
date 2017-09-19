
class CourseRegistrationRequestMessage {
  studentId: number;
  selectedCourseCodes: string[];

  constructor(studentId: number, selectedCourseCodes: string[]) {
    this.studentId = studentId;
    this.selectedCourseCodes = selectedCourseCodes;
  }
}

export default CourseRegistrationRequestMessage;
