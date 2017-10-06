// actions for students
import Student from '../entities/Student';

export interface SaveStudentAction {
  type: 'SAVE_STUDENT';
  student: Student;
}

export function saveStudent(student: Student): SaveStudentAction {
  return {
    type: 'SAVE_STUDENT',
    student: student
  };
}

export interface DefaultStudentAction {
  type: 'UNKNOWN';
}

export type StudentAction = SaveStudentAction | DefaultStudentAction;
