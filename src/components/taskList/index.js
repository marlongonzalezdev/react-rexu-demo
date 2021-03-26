import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TaskList from "./task-list";
import {loadTasksAction} from "../../redux/actions/tasks";
import {getTasks} from "../../redux/selectors/tasks"

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadTasksAction,
}, dispatch);

const mapStateToProps = (state) => {
    return {
        tasks: getTasks(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
