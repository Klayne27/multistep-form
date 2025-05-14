import { useSelector } from "react-redux";

function SummaryList({addon}) {
    const {billingCycle} = useSelector(state => state.form)

    const addonPrice =
      billingCycle === "Monthly"
        ? `+$${addon.monthlyPrice}/mo`
        : `+$${addon.yearlyPrice}/yr`;

    return (
      <div key={addon.name} className="flex justify-between space-y-4">
        <p className="text-sm text-gray-400">{addon.name}</p>
        <p>{addonPrice}</p>
      </div>
    );
}

export default SummaryList
