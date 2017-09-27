import Student from '../entities/Student';

import { StudentAction } from '../actions/StudentActions';

export type StudentState {
  students: Student[]
}

export const initialStateForStudent: StudentState = {
  students: []
};

export default function students(state = initialStateForStudent, action: StudentAction) {
  switch (action.type) {
    case 'SAVE_STUDENT':
      return Object.assign({}, state, {
        students: state.students.concat(action.student)
      });
    default:
      return state;
  }
}
