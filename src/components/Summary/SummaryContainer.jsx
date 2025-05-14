import { useSelector } from "react-redux";
import SummaryList from "./SummaryList";

function SummaryContainer() {
  const { selectedPlan, billingCycle, selectedAddons } = useSelector(
    (state) => state.form
  );

  const planPrice =
    billingCycle === "Monthly" ? selectedPlan.monthlyPrice : selectedPlan.yearlyPrice;

  return (
    <div className="px-6 rounded-lg bg-blue-50">
      <div className="grid grid-cols-2 items-center border-b py-6 border-[#cdcfdb]">
        <div className="">
          <h1 className="font-bold text-blue-900">
            {selectedPlan.name} ({billingCycle})
          </h1>
          <p className="text-sm text-[#9699ab]">Change</p>
        </div>

        <p className="justify-self-end font-bold text-blue-900">
          ${planPrice}/{billingCycle === "Monthly" ? "mo" : "yr"}
        </p>
      </div>
      <div className="py-6">
        {selectedAddons.length === 0 && (
          <p className="text-[#9699ab] text-center">No add-ons selected</p>
        )}
        {selectedAddons.map((addon) => (
          <SummaryList addon={addon} key={addon.id} />
        ))}
      </div>
    </div>
  );
}

export default SummaryContainer;
