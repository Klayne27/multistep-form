import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { validatePersonalInfoFields } from '../utils/errorHelpers'

const initialState = {
  step: 1,
  name: "",
  email: "",
  phoneNumber: "",
  selectedPlan: { id: 1, name: "Arcade", monthlyPrice: 9, yearlyPrice: 90 },
  selectedAddons: [],
  billingCycle: "Monthly",
  formConfirmed: false,
  personalInfoErrors: {
    name: null,
    email: null,
    phoneNumber: null,
  },
  plans: [
    { id: 1, name: "Basic", description: "", monthlyPrice: 9, yearlyPrice: 90 },
    { id: 2, name: "Advanced", description: "", monthlyPrice: 19, yearlyPrice: 190 },
    { id: 3, name: "Pro", description: "", monthlyPrice: 24, yearlyPrice: 240 },
  ],
  addOns: [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ],
};

const formSilce = createSlice({
  name: "form",
  initialState,
  reducers: {
    onChange(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    selectPlan(state, action) {
      state.selectedPlan = action.payload;
    },
    toggleBillingCycle(state, action) {
      state.billingCycle = action.payload;
    },
    toggleAddon(state, action) {
      const isAddonSelected = state.selectedAddons.some(
        (addOn) => addOn.name === action.payload.name
      );

      if (isAddonSelected) {
        state.selectedAddons = state.selectedAddons.filter(
          (addOn) => addOn.name !== action.payload.name
        );
      } else {
        state.selectedAddons.push(action.payload);
      }
    },
    setPersonalInfoErrors(state, action) {
      state.personalInfoErrors = action.payload;
    },
    changePlan(state) {
      state.step = 2
    },
    goNext(state) {
      state.step++;
    },
    goBack(state) {
      state.step--;
    },
    goTo(state, action) {
      state.step = action.payload
    },
    confirmForm(state) {
      state.formConfirmed = true;
    },
  },
});

export const validateCurrentStepAndGoNext = createAsyncThunk(
  "form/validateCurrentStepAndGoNext",
  async (_, { dispatch, getState }) => {
    const state = getState().form; 

    let isValid = true;
    let errors = {};

    if (state.step === 1) {
      const personalInfoState = {
        name: state.name,
        email: state.email,
        phoneNumber: state.phoneNumber,
      };
      errors = validatePersonalInfoFields(personalInfoState);
      const hasErrors = Object.values(errors).some((error) => error !== null);
      isValid = !hasErrors;
      dispatch(setPersonalInfoErrors(errors));
    } 

    if (isValid) {
      dispatch(goNext());
    }
  }
);

export default formSilce.reducer;

export const {
  goNext,
  goBack,
  goTo,
  onChange,
  selectPlan,
  toggleBillingCycle,
  toggleAddon,
  confirmForm,
  setPersonalInfoErrors,
  changePlan,
} = formSilce.actions;
