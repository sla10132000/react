import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TestApp from '../components/TestApp';
import { inputTest, addTest } from '../actions/tasks';

function mapStateToProps(state) {
  return {
    test: state.tests.test,
    tests: state.tests.tests
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTest(test) {
      dispatch(addTest(test));
    },
    inputTest(test) {
      dispatch(inputTest(test))
    },
    redirectToError() {
      dispatch(push('/error'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestApp);
