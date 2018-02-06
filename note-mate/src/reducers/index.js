import { NEW_LIST, TOGGLE_COMPLETE } from "../Actions";

export default (lists = [], action) => {
  switch (action.type) {
    case NEW_LIST:
      return lists.concat(action.payload);
    case TOGGLE_COMPLETE:
      const newLists = lists.slice(0);
      newLists[action.payload].completed = !newLists[action.payload].completed;
      return newLists;
    default:
      return lists;
  }
};
