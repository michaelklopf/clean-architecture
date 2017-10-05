import { Dispatch } from 'redux';

import Student from '../entities/Student';
import StudentGateway from './StudentGateway';
import { saveStudent, StudentAction } from '../actions/StudentActions';
import { State } from '../reducer';

class StudentRedux implements StudentGateway {
  getState: () => State;
  dispatch: Dispatch<StudentAction>;

  constructor(getState: () => State, dispatch: Dispatch<StudentAction>) {
    this.getState = getState;
    this.dispatch = dispatch;
  }

  getById(id: number): Student {
    let state = this.getState();
    var foundStudents = state.students.students.filter((student): boolean => { return student.id === id; });
    return foundStudents[0];
  }

  save(student: Student): void {
    this.dispatch(saveStudent(student));
  }
}

export default StudentRedux;
