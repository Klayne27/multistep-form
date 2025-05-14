import { useDispatch, useSelector } from "react-redux";
import { validateCurrentStepAndGoNext } from "./slices/formSlice";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import StepsSidebar from './components/Sidebar/StepsSidebar'
import SelectPlan from "./components/Plans/SelectPlan";
import AddOns from "./components/AddOns/AddOns";
import Summary from "./components/Summary/Summary";
import BackButton from "./components/Buttons/BackButton";
import NextButton from "./components/Buttons/NextButton";
import ConfirmButton from "./components/Buttons/ConfirmButton";
import Confirmation from "./components/Confirmation/Confirmation";

function App() {
  const { step, formConfirmed } = useSelector((state) => state.form);
  const dispatch = useDispatch()

  const handleNextClick = () => {
    dispatch(validateCurrentStepAndGoNext());
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#dce8f8]">
      <div className="grid grid-cols-[1fr_2fr] w-[1000px] justify-center p-4 bg-white rounded-xl">
        <StepsSidebar />

        {!formConfirmed ? (
          <div className="px-20 pt-10 pb-4 flex flex-col justify-between">
            {step === 1 && <PersonalInfo />}
            {step === 2 && <SelectPlan />}
            {step === 3 && <AddOns />}
            {step === 4 && <Summary />}

            <div className="flex justify-between">
              {step > 1 && <BackButton />}
              {step >= 4 ? (
                <ConfirmButton />
              ) : (
                <>
                  <div></div>
                  <NextButton onClick={handleNextClick} />
                </>
              )}
            </div>
          </div>
        ) : (
          <Confirmation />
        )}
      </div>
    </div>
  );
}

export default App;
