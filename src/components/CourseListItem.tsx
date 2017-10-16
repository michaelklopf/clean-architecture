import React, { Component } from 'react';

interface CourseListItemProps {
  courseName: string;
  courseCode: string;
  toggleCheck: Function;
}

class CourseListItem extends Component<CourseListItemProps> {
  render() {
    const courseName = this.props.courseName;
    const courseCode = this.props.courseCode;
    return (
      <li>
        <label>
          <input
              type="checkbox"
              name="course"
              value={courseName}
              onChange={this.props.toggleCheck(courseCode)} />
          {courseName}
        </label>
      </li>
    );
  }
}

export default CourseListItem;
