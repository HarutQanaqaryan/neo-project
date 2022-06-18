export const SEARCH_VALUE = "SEARCH_VALUE";
export const SORT_VALUE = "SORT_VALUE";

interface ValueType {
  searchValue: string;
  sortValue: string;
}
const initialState: ValueType = {
  searchValue: "",
  sortValue: "",
};

export const filterValuereducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
      };
      case SORT_VALUE:
        return {
          ...state,
          sortValue: action.sortValue,
        };
    default:
      return state;
  }
};
