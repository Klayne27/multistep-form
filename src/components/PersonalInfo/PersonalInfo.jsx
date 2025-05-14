import { useDispatch, useSelector } from "react-redux";
import { onChange } from "../../slices/formSlice";
import InputFields from "./InputFields";


function PersonalInfo() {
  const { name, email, phoneNumber, personalInfoErrors } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(onChange({ field: name, value: value }));
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold text-[#02295a]">Personal Info</p>
        <p className="mb-12 text-[#9699ab]">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <InputFields
        name="name"
        value={name}
        onChange={handleChange}
        label="Name"
        placeholder="e.g. Wayne Austria"
        error={personalInfoErrors?.name}
      />
      <InputFields
        name="email"
        value={email}
        onChange={handleChange}
        label="Email Address"
        placeholder="e.g. wayneaustria@email.com"
        error={personalInfoErrors?.email}
      />
      <InputFields
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
        label="Phone Number"
        placeholder="e.g. 1 234 567 890"
        error={personalInfoErrors?.phoneNumber}
      />
    </div>
  );
}



export default PersonalInfo;
