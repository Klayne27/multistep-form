import { useSelector } from "react-redux";
import AddOnsList from "./AddOnsList";

function AddOns() {
  const { addOns } = useSelector((state) => state.form);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold text-[#02295a]">Pick add-ons</p>
        <p className="mb-12 text-[#9699ab]">
          Add-ons help enhance your chatting experience.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {addOns.map((addOn) => (
          <AddOnsList addOn={addOn} key={addOn.name} />
        ))}
      </div>
    </div>
  );
}

export default AddOns;
