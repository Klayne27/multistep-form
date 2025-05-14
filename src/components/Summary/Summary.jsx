import { useSelector } from "react-redux";
import SummaryContainer from "./SummaryContainer";

function Summary() {
  const { selectedPlan, selectedAddons, billingCycle } = useSelector(
    (state) => state.form
  );

  const calculateTotal = (plan, cycle, addons) => {
    const basePrice = cycle === "Monthly" ? plan.monthlyPrice : plan.yearlyPrice;
    const addonsTotal = addons.reduce(
      (sum, addon) =>
        sum + (cycle === "Monthly" ? addon.monthlyPrice : addon.yearlyPrice),
      0
    );

    return basePrice + addonsTotal;
  };

  const totalPrice = calculateTotal(selectedPlan, billingCycle, selectedAddons);

  return (
    <div className="flex flex-col gap-1 h-full">
      <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold text-[#02295a]">Finishing up</p>
        <p className="mb-12 text-[#9699ab]">
          Double-check everything looks OK before confirming
        </p>
      </div>
      <SummaryContainer />
      <div className="flex justify-between p-6">
        <p className="text-sm text-gray-400">
          Total {billingCycle === "Monthly" ? "(per month)" : "(per year)"}
        </p>
        <p className="text-xl font-bold text-[#483EFF]">
          +${totalPrice}/{billingCycle === "Monthly" ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
}

export default Summary;
