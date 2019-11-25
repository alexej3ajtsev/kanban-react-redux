import tasks from '~reducers/tasks';
import * as consts from '~actions/consts';
import expect from 'expect';

describe('tasks reducer', () => {
  const initialState = [
    {
      id: '1',
      title: 'test task',
      priority: 0
    }
  ];
  it('should return initial state', () => {
    expect(tasks(initialState, {})).toEqual(initialState);
  });

  it('should handle ADD_TASK', () => {
    const initialState = [
      {
        id: '1',
        title: 'test task',
        priority: 0,
        complete: false
      }
    ];
    expect(
      tasks(initialState, {
        type: consts.ADD_TASK,
        payload: {
          task: {
            id: '2',
            title: 'test task2',
            priority: 0
          }
        }
      })
    ).toEqual([
      {
        id: '1',
        title: 'test task',
        priority: 0,
        complete: false
      },
      {
        id: '2',
        title: 'test task2',
        priority: 0,
        complete: false
      }
    ]);
  });

  it('should handle REMOVE_TASK', () => {
    const initialState = [
      {
        id: '1',
        title: 'test task',
        priority: 0
      }
    ];
    expect(
      tasks(initialState, {
        type: consts.REMOVE_TASK,
        payload: { taskId: '1' }
      })
    ).toEqual([]);
  });

  it('should handle TOGGLE_TASK_COMPLETE', () => {
    const initialState = [
      {
        id: '1',
        title: 'test task',
        priority: 0,
        complete: false
      }
    ];
    expect(
      tasks(initialState, {
        type: consts.TOGGLE_TASK_COMPLETE,
        payload: { taskId: '1' }
      })
    ).toEqual([
      {
        id: '1',
        title: 'test task',
        priority: 0,
        complete: true
      }
    ]);
  });
});
