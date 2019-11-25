import column from '~reducers/column';
import * as consts from '~actions/consts';
import expect from 'expect';

describe('column reducer', () => {
  it('should return initial state', () => {
    expect(column(undefined, {})).toEqual({});
  });

  it('should handle ADD_COLUMN', () => {
    expect(
      column(undefined, {
        type: consts.ADD_COLUMN,
        payload: {
          column: {
            id: '1',
            title: 'column title'
          }
        }
      })
    ).toEqual({
      id: '1',
      title: 'column title',
      tasks: []
    });
  });

  it('should handle CHANGE_COLUMNS_TITLE', () => {
    expect(
      column(
        { id: '1', title: 'column title' },
        {
          type: consts.CHANGE_COLUMNS_TITLE,
          payload: { title: 'changed title' }
        }
      )
    ).toEqual({
      id: '1',
      title: 'changed title'
    });
  });
});
