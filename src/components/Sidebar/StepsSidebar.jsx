import { useSelector } from "react-redux";
import StepLabel from "./StepLabel";
import StepNumber from "./StepNumber";

function StepsSidebar() {
  const {step} = useSelector(state => state.form)

  return (
    <div className="relative">
      <img src="./bg-sidebar-desktop.svg" className="w-full " />
      <div className="absolute top-0 left-0 right-0 p-4">
        <div className="p-4 flex flex-col gap-7">
          <div className="grid grid-cols-[1fr_4.5fr] gap-x-4">
            <div className="flex flex-col gap-6.5 ">
              <StepNumber stepNumber={1} step={step} />
              <StepNumber stepNumber={2} step={step} />
              <StepNumber stepNumber={3} step={step} />
              <StepNumber stepNumber={4} step={step} />
            </div>
            <div className="flex flex-col gap-7">
              <StepLabel stepNumber={1} stepName="YOUR INFO" />
              <StepLabel stepNumber={2} stepName="SELECT PLAN" />
              <StepLabel stepNumber={3} stepName="ADD-ONS" />
              <StepLabel stepNumber={4} stepName="SUMMARY" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





export default StepsSidebar;
