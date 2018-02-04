import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';
import Loader from 'react-loader';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow = (course, index) => {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage = () => {
        browserHistory.push('/course');
    }

    render() {
        const { courses, loading } = this.props;
        return (
            
            <div className="container-fluid">
                <h1>Courses</h1>
                <input
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                <Loader loaded={!loading}>
                    <CourseList courses={courses} />
                </Loader>
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        courses: state.courses,
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);