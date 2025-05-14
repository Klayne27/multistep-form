import { useSelector } from "react-redux";
import { useCreateAccount } from "../../hooks/useCreateAccount";
import { useEffect } from "react";

function Confirmation() {
  const {
    name,
    email,
    phoneNumber,
    selectedPlan,
    billingCycle,
    selectedAddons,
    formConfirmed,
  } = useSelector((state) => state.form);

  const { createAccount } = useCreateAccount();

  const calculateTotal = (plan, cycle, addons) => {
    const basePrice = plan
      ? cycle === "Monthly"
        ? plan.monthlyPrice
        : plan.yearlyPrice
      : 0;

    const addonsTotal = addons.reduce(
      (sum, addon) =>
        sum + (cycle === "Monthly" ? addon.monthlyPrice : addon.yearlyPrice),
      0
    );

    return basePrice + addonsTotal;
  };

  useEffect(() => {
    const totalPrice = calculateTotal(selectedPlan, billingCycle, selectedAddons);

    if (formConfirmed) {
      const resultData = {
        name: name,
        email: email,
        phone_number: phoneNumber,
        selected_plan: selectedPlan,
        billing_cycle: billingCycle,
        selected_addons: selectedAddons,
        total_price: totalPrice,
      };

      console.log("Attempting to submit data from useEffect:", resultData);

      createAccount(resultData);
    }
  }, [
    formConfirmed,
    name,
    email,
    phoneNumber,
    selectedAddons,
    selectedPlan,
    billingCycle,
    createAccount,
  ]);

  return (
    <div className="flex flex-col  items-center px-25 py-50">
      <img src="icon-thank-you.svg" className="mb-10" />
      <h1 className="text-3xl text-[#02295a] font-bold mb-5">Thank you!</h1>
      <p className="text-center text-[#9699ab]">
        Thanks for confirming your subscription! I hope you enjoy my services.
        If you ever need love and support, please feel free to send me a message on discord.
      </p>
    </div>
  );
}

export default Confirmation;
