import task from '~reducers/task';
import * as consts from '~actions/consts';
import expect from 'expect';

describe('task reducer', () => {
  it('should return initial state', () => {
    expect(task(undefined, {})).toEqual({});
  });

  it('should handle ADD_TASK', () => {
    expect(
      task(undefined, {
        type: consts.ADD_TASK,
        payload: {
          task: {
            id: '1',
            title: 'test task',
            priority: 0
          }
        }
      })
    ).toEqual({
      id: '1',
      title: 'test task',
      priority: 0,
      complete: false
    });
  });

  it('should not overwrite complete value if exist ADD_TASK', () => {
    expect(
      task(undefined, {
        type: consts.ADD_TASK,
        payload: {
          task: {
            id: '1',
            title: 'test task',
            priority: 0,
            complete: true
          }
        }
      })
    ).toEqual({
      id: '1',
      title: 'test task',
      priority: 0,
      complete: true
    });
  });

  it('should handle CHANGE_TASK_TITLE', () => {
    expect(
      task(
        { id: '1', title: 'test task', priority: 0 },
        {
          type: consts.CHANGE_TASK_TITLE,
          payload: { title: 'changed title' }
        }
      )
    ).toEqual({
      id: '1',
      title: 'changed title',
      priority: 0
    });
  });
  it('should handle CHANGE_TASK_TITLE', () => {
    expect(
      task(
        { id: '1', title: 'test task', complete: false },
        {
          type: consts.TOGGLE_TASK_COMPLETE
        }
      )
    ).toEqual({ id: '1', title: 'test task', complete: true });
  });

  it('should handle CHANGE_TASK_TERMS', () => {
    expect(
      task(
        { id: '1', title: 'test task', terms: 'test terms' },
        {
          type: consts.CHANGE_TASK_TERMS,
          payload: { terms: 'changed terms' }
        }
      )
    ).toEqual({
      id: '1',
      title: 'test task',
      terms: 'changed terms'
    });
  });

  it('should handle CHANGE_TASK_PRIORITY', () => {
    expect(
      task(
        { id: '1', title: 'test task', priority: 0 },
        {
          type: consts.CHANGE_TASK_PRIORITY,
          payload: { priority: 100 }
        }
      )
    ).toEqual({
      id: '1',
      title: 'test task',
      priority: 100
    });
  });
});
