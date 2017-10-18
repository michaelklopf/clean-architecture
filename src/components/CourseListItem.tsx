import React, { Component } from 'react';

interface CourseListItemProps {
  courseName?: string;
  courseCode?: string;
  toggleCheck?: Function;
}

class CourseListItem extends Component<CourseListItemProps> {
  constructor(props: any) {
    super(props);

    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem() {
    this.props.toggleCheck!(this.props.courseCode);
  }

  render() {
    const courseName = this.props.courseName;
    return (
      <li>
        <label>
          <input
              type="checkbox"
              name="course"
              value={courseName}
              onChange={this.toggleItem}
          />
          {courseName}
        </label>
      </li>
    );
  }
}

export default CourseListItem;
