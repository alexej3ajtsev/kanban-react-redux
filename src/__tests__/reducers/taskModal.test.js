import taskModal from '~reducers/taskModal';
import * as consts from '~actions/consts';
import expect from 'expect';

describe('taskModal reducer', () => {
  it('should return initial state', () => {
    expect(taskModal(undefined, {})).toEqual({});
  });

  it('should toggle modal visible TOGGLE_MODAL_TASK_FORM', () => {
    expect(
      taskModal(
        { isVisible: false, columnId: null },
        {
          type: consts.TOGGLE_MODAL_TASK_FORM
        }
      )
    ).toEqual({ isVisible: true, columnId: null });
  });

  it('should set modal initial value SET_ACTIVE_COLUMN_MODAL_VALUE', () => {
    expect(
      taskModal(
        { isVisible: false, columnId: null },
        {
          type: consts.SET_ACTIVE_COLUMN_MODAL_VALUE,
          payload: { columnId: 'test value' }
        }
      )
    ).toEqual({ isVisible: false, columnId: 'test value' });
  });
});
