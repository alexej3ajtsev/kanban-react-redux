import columns from '~reducers/columns';
import * as consts from '~actions/consts';
import expect from 'expect';

describe('columns reducer', () => {
  it('should return initial state', () => {
    expect(columns(undefined, {})).toEqual([]);
  });

  it('should handle ADD_COLUMN', () => {
    expect(
      columns(
        [
          {
            id: '0',
            title: 'column first',
            tasks: []
          }
        ],
        {
          type: consts.ADD_COLUMN,
          payload: {
            column: {
              id: '1',
              title: 'column title'
            }
          }
        }
      )
    ).toEqual([
      {
        id: '0',
        title: 'column first',
        tasks: []
      },
      {
        id: '1',
        title: 'column title',
        tasks: []
      }
    ]);
  });

  it('should add task to only one column ADD_TASK', () => {
    const addTask = {
      id: 'another-task',
      title: 'another title',
      priority: 10
    };

    const initialState = [
      {
        id: '0',
        title: 'column first',
        tasks: [
          {
            id: 'task1',
            title: 'test-title',
            priority: 0
          }
        ]
      },
      {
        id: '1',
        title: 'column title',
        tasks: []
      }
    ];

    const afterAddTask = columns(initialState, {
      type: consts.ADD_TASK,
      payload: {
        columnId: '1',
        task: addTask
      }
    });

    const anotherColumn = afterAddTask.find(c => c.id === '0');
    const columnTo = afterAddTask.find(c => c.id === '1');

    expect(anotherColumn.tasks).toHaveLength(1);
    expect(columnTo.tasks).toHaveLength(1);
  });

  it('should handle REMOVE_COLUMN', () => {
    expect(
      columns([{ id: '1', title: 'column title', tasks: [] }], {
        type: consts.REMOVE_COLUMN,
        payload: { columnId: '1' }
      })
    ).toEqual([]);
  });
});
