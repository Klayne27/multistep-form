export default function StepLabel({ stepNumber, stepName }) {
  return (
    <div>
      <p className="text-sm text-[#d3d3d3]  p-0 m-0">STEP {stepNumber}</p>
      <p className="text-md font-semibold text-white p-0 m-0">{stepName}</p>
    </div>
  );
}
