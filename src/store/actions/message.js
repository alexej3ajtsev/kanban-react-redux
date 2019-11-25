import * as consts from "./consts";
import { v4 } from "uuid";

export const addMessage = ({ message }) => ({
  type: consts.ADD_MESSAGE,
  payload: {
    message: {
      id: v4(),
      ...message
    }
  }
});

export const removeMessage = ({ messageId }) => ({
  type: consts.REMOVE_MESSAGE,
  payload: { messageId }
});

export const removeAllMessages = () => ({
  type: consts.REMOVE_ALL_MESSAGES
});
