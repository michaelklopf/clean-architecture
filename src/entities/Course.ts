// Entity

class Course {
  code: string;
  name: string;
  startDate: Date;

  constructor(code: string, name: string, startDate: Date) {
    this.code = code;
    this.name = name;
    this.startDate = startDate;
  }
}

export default Course;
