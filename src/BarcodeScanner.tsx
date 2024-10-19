import { useState } from "react";
import { useZxing } from "react-zxing";
import "./BarcodeScanner.css";

function BarcodeScanner() {
  const [result, setResult] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <>
      <video
        ref={ref}
        style={{
          width: "100%",
          maxWidth: "380px",
          height: "100%",
          maxHeight: "250px",
        }}
      />

      <p>
        <span>ISBN:</span>
        <span>{result}</span>
      </p>
    </>
  );
}

export default BarcodeScanner;
