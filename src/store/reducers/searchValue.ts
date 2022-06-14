export const SEARCH_VALUE = "SEARCH_VALUE";

interface ValueType {
  value: string;
}
const initialState: ValueType = {
  value: "",
};

export const searchValuereducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return {
        value: action.value,
      };
    default:
      return state;
  }
};
