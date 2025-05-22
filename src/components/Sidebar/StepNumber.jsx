import { useDispatch, useSelector } from "react-redux";
import { goTo, setPersonalInfoErrors } from "../../slices/formSlice";
import { validatePersonalInfoFields } from "../../utils/errorHelpers";

export default function StepNumber({ stepNumber, step }) {
  const state = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleGoto = (stepNumber) => {
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
      dispatch(goTo(stepNumber));
    }
}

  return (
    <div
      className={`flex border rounded-full p-2 justify-center items-center text-xl font-semibold cursor-pointer ${
        step === stepNumber ? "bg-[#bfe2fd] border-none text-black" : "text-white"
      }`}
      onClick={() => handleGoto(stepNumber)}
    >
      {stepNumber}
    </div>
  );
}
