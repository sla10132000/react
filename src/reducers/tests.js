const initialState = {
  test: '',
  tests: []
};

export default function testsReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TEST':
      return {
        ...state,
        test: action.payload.test
      };
    case 'ADD_TEST':
      return {
        ...state,
        tests: state.tests.concat([action.payload.test])
      };
    default:
      return state;
  }
}
