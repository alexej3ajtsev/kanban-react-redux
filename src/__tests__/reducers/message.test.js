import message from '~reducers/message';
import * as consts from '~actions/consts';
import expect from 'expect';

describe('message reducer', () => {
  it('should return initial state', () => {
    expect(message(undefined, {})).toEqual({});
  });

  it('should handle ADD_MESSAGE', () => {
    expect(
      message(undefined, {
        type: consts.ADD_MESSAGE,
        payload: {
          message: {
            id: '1',
            title: 'test message',
            type: 'success' // warning, error
          }
        }
      })
    ).toEqual({
      id: '1',
      title: 'test message',
      type: 'success' // warning, error
    });
  });
});
