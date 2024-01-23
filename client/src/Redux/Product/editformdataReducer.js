import { EDIT_FORM_DATA } from "../constatnt";

export const editFormReducerData = (state = [], action) => {
  console.log("Edit form reducer data is call", action.payload, typeof(action.payload));

  switch (action.type) {
    case EDIT_FORM_DATA:
      return typeof action.payload === 'object' ? { ...action.payload } : state;
    default:
      return state;
  }
};
