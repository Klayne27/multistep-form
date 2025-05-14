import { useSelector } from "react-redux";

function NextButton({ onClick }) {
  const {step, selectedAddons} = useSelector(state => state.form)

  return (
    <div className="flex justify-end">
      <button
        className={`border rounded-lg px-8 py-3 text-white bg-[#02295a] cursor-pointer font-semibold active:opacity-70`}
        onClick={onClick}
      >
        {step === 3 && !selectedAddons.length ? "Skip" : "Next Step"}
      </button>
    </div>
  );
}

export default NextButton;
