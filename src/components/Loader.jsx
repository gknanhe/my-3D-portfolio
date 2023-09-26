import { Html, useProgress } from "@react-three/drei";
// import { progress } from "framer-motion";

const Loader = () => {
  const { progress } = useProgress();

  // Convert progress to a number (if it's not already) and check for NaN
  const numericProgress = parseFloat(progress);
  const formattedProgress = isNaN(numericProgress)
    ? "Loading..."
    : `${numericProgress.toFixed(2)}%`;
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {formattedProgress}
      </p>
    </Html>
  );
};

export default Loader;
