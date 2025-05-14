export default function StepNumber({ stepNumber, step }) {
  return (
    <div
      className={`flex border rounded-full p-2 justify-center items-center text-xl font-semibold ${
        step === stepNumber ? "bg-[#bfe2fd] border-none text-black" : "text-white"
      }`}
    >
      {stepNumber}
    </div>
  );
}
