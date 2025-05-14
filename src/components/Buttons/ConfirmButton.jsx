import { useDispatch } from "react-redux";
import { confirmForm } from "../../slices/formSlice";

function ConfirmButton() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-end">
      <button
        className={`border rounded-lg px-8 py-3 text-white bg-[#483EFF] cursor-pointer font-semibold active:opacity-70`}
        onClick={() => dispatch(confirmForm())}
      >
        Confirm
      </button>
    </div>
  );
}

export default ConfirmButton;
