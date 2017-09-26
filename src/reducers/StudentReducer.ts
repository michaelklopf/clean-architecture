import Student from '../entities/Student';

import { StudentAction } from '../actions/StudentActions';

export const initialStateForStudent: { students: Student[] } = {
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
