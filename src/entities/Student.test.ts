import Student from './Student';
import Course from './Course';

it('cannot register for course within 5 days of start date', () => {
  // arrange
  var student = new Student(1);

  var course = new Course(
    'BIOL-1507EL',
    'Biology II',
    new Date(new Date().setDate(new Date().getDate()-3))
  );

  console.log("Today is ", new Date(Date.now()));
  console.log("If today later than final date for entering, then false");
  console.log("Final date for entering with 5 day margin is ", new Date(course.startDate.setDate(new Date().getDate()-5)));

  // act
  var result = student.registerForCourse(course);

  // assert
  expect(result).toBe(false);
});

it('cannot register for course already enrolled in', () => {
  // arrange
  var student = new Student(1);
  student.enrolledCourses.push(new Course('BIOL-1507EL', 'Biology II', new Date(new Date().setDate(new Date().getDate()+20))));
  student.enrolledCourses.push(new Course('MATH-4067EL', 'Math I', new Date(new Date().setDate(new Date().getDate()+30))));

  // act
  var result = student.registerForCourse(new Course('BIOL-1507EL', 'Biology II', new Date(new Date().setDate(new Date().getDate()+30))));

  // assert
  expect(result).toBe(false);
});

it('can register for a course not rolled in and not within 5 days of start', () => {
    // arrange
    var student = new Student(1);
    var course = new Course('BIOL-1507EL', 'Biology II', new Date(new Date().setDate(new Date().getDate()+30)));

    // act
    var result = student.registerForCourse(course);

    // assert
    expect(result).toBe(true);
    expect(student.registeredCourses.length).toBe(1);
});
