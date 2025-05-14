import { useDispatch, useSelector } from "react-redux";
import { toggleBillingCycle } from "../../slices/formSlice";

function BillingCycleToggler() {
  const { billingCycle } = useSelector((state) => state.form);
  const dispatch = useDispatch()

  const handleBillingCycle = () => {
    const newCycle = billingCycle === "Monthly" ? "Yearly" : "Monthly";
    dispatch(toggleBillingCycle(newCycle));
  };

  return (
    <div className=" col-span-3 rounded-lg mt-4 p-3 bg-blue-50 flex justify-center items-center gap-5">
      <p
        className={`font-semibold ${
          billingCycle === "Monthly" ? "text-[#02295a]" : "text-[#9699ab]"
        }`}
      >
        Monthly
      </p>
      <label className="switch">
        <input
          type="checkbox"
          checked={billingCycle === "Yearly"}
          onChange={handleBillingCycle}
        />
        <span className="slider round"></span>
      </label>
      <p
        className={`font-semibold ${
          billingCycle === "Yearly" ? "text-[#02295a]" : "text-[#9699ab]"
        }`}
      >
        Yearly
      </p>
    </div>
  );
}

export default BillingCycleToggler;
