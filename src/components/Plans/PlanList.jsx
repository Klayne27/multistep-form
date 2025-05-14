import { useDispatch, useSelector } from "react-redux";
import { selectPlan } from "../../slices/formSlice";

function PlanList({plan}) {
    const {selectedPlan, billingCycle} = useSelector(state => state.form)
    const dispatch = useDispatch()

      const handleSelectPlan = (plan) => {
        dispatch(selectPlan(plan));
      };

    return (
      <div
        className={`border-1 rounded-xl px-4 pt-6 pb-4 ${
          selectedPlan?.id === plan.id ? "bg-blue-50 border-[#483EFF]" : ""
        }`}
        onClick={() => handleSelectPlan(plan)}
        key={plan.id}
      >
        <div className="grid grid-cols-1 justify-between h-38 cursor-pointer">
          <img src={`./icon-${plan.name}.svg`} />
          <div className="self-end">
            <h1 className="text-[#02295a] font-bold">{plan.name}</h1>
            {billingCycle === "Monthly" && (
              <p className="text-[#9699ab]">${plan.monthlyPrice}/mo</p>
            )}
            {billingCycle === "Yearly" && (
              <>
                <p className="text-[#9699ab]">${plan.yearlyPrice}/yr</p>
                <p className="text-[#02295a]">2 months free</p>
              </>
            )}
          </div>
        </div>
      </div>
    );
}

export default PlanList
