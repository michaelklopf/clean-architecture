import CourseRepository from './CourseRepository';
import Course from '../entities/Course';

it('can find the right course', () => {
  // arrange
  var courseRepository = new CourseRepository();
  courseRepository.addCourse(new Course('test1', 'Inception'));
  courseRepository.addCourse(new Course('test2', 'The Dark Knight'));

  // act
  var course = courseRepository.getByCode('test2');

  //console.log('The repo is ', courseRepository);
  //console.log('The course is', course);

  // assert
  expect(course.code).toBe('test2');
});