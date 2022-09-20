import store from "..";

export const addNewBooking = (data) => {
  store.dispatch({
    type: "ADD_NEW_BOOKING",
    payload: data,
  });
};
