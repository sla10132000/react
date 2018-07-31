export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});


export const inputTest = (test) => ({
  type: 'INPUT_TEST',
  payload: {
    test
  }
});

export const addTest = (test) => ({
  type: 'ADD_TEST',
  payload: {
    test
  }
});
