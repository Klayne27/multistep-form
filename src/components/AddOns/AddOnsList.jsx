import { useDispatch, useSelector } from "react-redux";
import { toggleAddon } from "../../slices/formSlice";

function AddOnsList({ addOn }) {
  const { billingCycle, selectedAddons } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleSelectAddon = (addOn) => {
    dispatch(toggleAddon(addOn));
  };

  const isAddonSelected = (addOn) => {
    return selectedAddons.some((selected) => selected.name === addOn.name);
  };

  const isSelected = isAddonSelected(addOn);

  return (
    <div
      className={`rounded-lg grid grid-cols-[1fr_5fr_1fr] border py-5 px-7 justify-center items-center ${
        isSelected ? "border-[#483EFF] bg-blue-50" : ""
      }`}
      key={addOn.name}
      onClick={() => handleSelectAddon(addOn)}
    >
      <input
        type="checkbox"
        className=" h-5 w-5 accent-[#483EFF]"
        checked={isSelected}
        onChange={() => handleSelectAddon(addOn)}
        onClick={(e) => e.stopPropagation()}
      />
      <div>
        <label>
          <p className="text-[#02295a] font-bold">{addOn.name}</p>
          <p className="text-[#9699ab]">{addOn.description}</p>
        </label>
      </div>
      {billingCycle === "Monthly" && (
        <p className="text-[#483EFF]">+${addOn.monthlyPrice}/mo</p>
      )}
      {billingCycle === "Yearly" && (
        <p className="text-[#483EFF]">+${addOn.yearlyPrice}/yr</p>
      )}
    </div>
  );
}

export default AddOnsList;
