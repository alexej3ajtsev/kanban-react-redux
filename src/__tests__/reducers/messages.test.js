import messages from '~reducers/messages';
import * as consts from '~actions/consts';
import expect from 'expect';

describe('messages reducer', () => {
  const initialState = [
    {
      id: '1',
      title: 'test message',
      type: 'success' // warning, error
    }
  ];

  it('should return initial state', () => {
    expect(messages(initialState, {})).toEqual(initialState);
  });

  it('should handle ADD_MESSAGE', () => {
    const initialState = [
      {
        id: '1',
        title: 'test message',
        type: 'success'
      }
    ];
    expect(
      messages(initialState, {
        type: consts.ADD_MESSAGE,
        payload: {
          message: {
            id: '2',
            title: 'test message2',
            type: 'warning'
          }
        }
      })
    ).toEqual([
      {
        id: '1',
        title: 'test message',
        type: 'success'
      },
      {
        id: '2',
        title: 'test message2',
        type: 'warning'
      }
    ]);
  });

  it('should handle REMOVE_MESSAGE', () => {
    const initialState = [
      {
        id: '1',
        title: 'test message',
        type: 'success'
      }
    ];
    expect(
      messages(initialState, {
        type: consts.REMOVE_MESSAGE,
        payload: { messageId: '1' }
      })
    ).toEqual([]);
  });

  it('should handle TOGGLE_TASK_COMPLETE', () => {
    const initialState = [
      {
        id: '1',
        title: 'test message',
        type: 'success'
      },
      {
        id: '2',
        title: 'warning message',
        type: 'warning'
      }
    ];
    expect(
      messages(initialState, {
        type: consts.REMOVE_ALL_MESSAGES
      })
    ).toEqual([]);
  });
});
