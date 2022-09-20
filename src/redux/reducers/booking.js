var initialState = {
  booking: {},
};

export default function booking(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_NEW_BOOKING":
      return {
        ...state,
        booking: { ...state.booking, ...action.payload },
      };
    default:
      return {
        ...state,
      };
  }
}
