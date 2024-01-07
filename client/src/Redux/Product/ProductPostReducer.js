


const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const ProductPostReducer = (state = initialState, action) => {
    console.log("action.type in ProductPostReducer", action.type);
  switch (action.type) {
    case 'POST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'POST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: "Successfully Added Datas",
      };
    case 'POST_FAILURE':
      return {
        ...state,
        loading: false,
        error: "Fail Inserting Data",
      };
    default:
      return state;
  }
};



