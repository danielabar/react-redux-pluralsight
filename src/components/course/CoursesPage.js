import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// reference to action(s) this component will dispatch
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div className="courses-page">
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// return object with properties that we would like to see exposed to our component
// for example, component can access this.props.courses
// property "courses" on state object comes from root reducer
// ownProps is a reference to props attached to this component,
// useful for accessing routing related props injected by react-router
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

// determines what actions are available in this component
// wrap action in call to dispatch so its easy to use in component
// see onClickSave for usage
// bindActionCreators goes through all actions in courseActions and
// wraps them in call to dispatch
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// invoke function returned by connect function on our container component CoursesPage
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
