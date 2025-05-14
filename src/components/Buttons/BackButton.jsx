import { useDispatch } from "react-redux";
import { goBack } from "../../slices/formSlice";

function BackButton() {
    const dispatch = useDispatch();

    return (
      <div className="flex justify-end">
        <button
          className="border rounded-lg px-8 py-3 text-[#9699ab] hover:text-[#02295a] border-none font-semibold  cursor-pointer active:opacity-70"
          onClick={() => dispatch(goBack())}
        >
          Go Back
        </button>
      </div>
    );
}

export default BackButton
