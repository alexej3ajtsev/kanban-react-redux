import draggedTask from '~reducers/draggedTask';
import * as consts from '~actions/consts';
import expect from 'expect';

describe('draggedTask reducer', () => {
  it('should return initial state', () => {
    expect(draggedTask(undefined, {})).toEqual({});
  });

  it('should handle SET_DRAGGED_TASK', () => {
    expect(
      draggedTask(undefined, {
        type: consts.SET_DRAGGED_TASK,
        payload: {
          task: {
            id: '1',
            title: 'dragged task'
          }
        }
      })
    ).toEqual({
      id: '1',
      title: 'dragged task'
    });
  });

  it('should handle REMOVE_DRAGGED_TASK', () => {
    expect(
      draggedTask(
        {
          id: '1',
          title: 'dragged task'
        },
        {
          type: consts.REMOVE_DRAGGED_TASK
        }
      )
    ).toEqual({});
  });
});
