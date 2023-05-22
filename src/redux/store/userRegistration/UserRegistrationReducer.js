import * as types from "./UserRegistrationActionTypes";

const INITIAL_STATE = {
  registrations: [], // Initialize registrations array to store payload values
};

const userRegistrationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REGISTERATION_SUCCESS:
      console.log(action.payload, "action.payload");
      const updatedRegistrations = state?.registrations.map((registration) => {
        return {
          ...registration,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          occupation: action.payload.occupation,
        };
      });

      const registrations =
        state?.registrations.length > 0
          ? updatedRegistrations
          : [action.payload];

      console.log(registrations, "registrations log");

      return {
        ...state,
        registrations,
      };
    default:
      return state;
  }
};

export default userRegistrationReducer;
