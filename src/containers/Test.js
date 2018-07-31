import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Test from '../components/Test';
import { inputTest, addTest } from '../actions/tasks';

function mapStateToProps(state) {
  return {
    task: state.tasks.task,
    tasks: state.tasks.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(test) {
      dispatch(addTest(test));
    },
    inputTask(test) {
      dispatch(inputTest(test))
    },
    redirectToError() {
      dispatch(push('/error'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
