import React, { Component } from 'react';

import CourseListItem from './CourseListItem';

class CourseRegistration extends Component {
  render() {
    return (
      <form>
        <h3>Enter your student identification:</h3> 
        <label htmlFor="studentId">Student id</label>
        <input
          id="studentId"
          type="text"
          placeholder="Enter student id..."
        />
        <h3>Choose your courses:</h3> 
        <ul>
          <CourseListItem courseName="testcoursename" />
        </ul>
      </form>
    );
  }
}

export default CourseRegistration;
