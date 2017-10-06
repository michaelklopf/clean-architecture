import React, { Component } from 'react';

interface CourseListItemProps {
  courseName: string;
}

class CourseListItem extends Component<CourseListItemProps, {}> {
  render() {
    const courseName = this.props.courseName;
    return (
      <li>  
        <label>
          <input type="checkbox" name="course" value={courseName} />
          {courseName}
        </label>
      </li>
    );
  }
}

export default CourseListItem;
