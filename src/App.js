import { forwardRef, useImperativeHandle, useRef } from "react";
import "./App.css";

function FancyButton(props, ref) {
  const inputRef = useRef();
  const fancyFocus = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: fancyFocus,
    };
  });
  return <input ref={inputRef} {...props} />;
}
FancyButton = forwardRef(FancyButton);

function App() {
  const fancyInputRef = useRef();
  const focusInput = () => {
    fancyInputRef.current.focus();
  };

  return (
    <>
      <button onClick={focusInput}>Focus Input</button>
      <FancyButton defulatValue={"hello world"} ref={fancyInputRef} />
    </>
  );
}

export default App;
