import { useSelector } from "react-redux";
import PlanList from "./PlanList";
import BillingCycleToggler from "./BillingCycleToggler";

function SelectPlan() {
  const { plans } = useSelector((state) => state.form);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold text-[#02295a]">Select your Plan</p>
        <p className="mb-12 text-[#9699ab]">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {plans.map((plan) => (
          <PlanList plan={plan} key={plan.id} />
        ))}
        <BillingCycleToggler />
      </div>
    </div>
  );
}

export default SelectPlan;
