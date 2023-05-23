import * as types from "./UserRegistrationActionTypes";

const INITIAL_STATE = {
  registrations: {}, // Initialize registrations object to store payload values
};

const userRegistrationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REGISTERATION_SUCCESS:
      let updatedRegistration = {};
      if (action?.payload && Object.keys(action.payload).length > 0) {
        updatedRegistration = {
          ...state.registrations,
          firstName: action.payload?.firstName,
          lastName: action.payload?.lastName,
          email: action.payload?.email,
          occupation: action.payload?.occupation,
          address1: action.payload?.address1,
          address2: action.payload?.address2,
          city: action.payload?.city,
          state: action.payload?.state,
          country: action.payload?.country,
          pincode: action.payload?.pincode,
        };
      }
      return {
        ...state,
        registrations: updatedRegistration,
      };

    case types.CLEAR_REGISTRATION_DATA:
      return {
        registrations: {},
      };
    default:
      return state;
  }
};

export default userRegistrationReducer;
