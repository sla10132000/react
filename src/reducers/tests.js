const initialState = {
  task: '',
  tasks: []
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
        tests: state.tasks.concat([action.payload.test])
      };
    default:
      return state;
  }
}
