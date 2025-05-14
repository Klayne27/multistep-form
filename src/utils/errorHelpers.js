export const validatePersonalInfoFields = (personalInfoState) => {
  const errors = { name: null, email: null, phoneNumber: null };
  if (!personalInfoState.name?.trim()) {
    errors.name = "This field is required";
  }
  if (!personalInfoState.email?.trim()) {
    errors.email = "This field is required";
  } else if (!/\S+@\S+\.\S+/.test(personalInfoState.email)) {
    errors.email = "Invalid email format";
  }
  if (!personalInfoState.phoneNumber?.trim()) {
    errors.phoneNumber = "This field is required";
  } else if (!/^\d+$/.test(personalInfoState.phoneNumber.trim())) {
    errors.phoneNumber = "Phone number must contain only digits";
  }
  return errors;
};

