import { useEffect, useRef } from "react";

export function useOutsideClick(handler, inCapturingPhase = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      //event handled in capturing phase not bubbling phase
      document.addEventListener("click", handleClick, inCapturingPhase);
      return () =>
        document.removeEventListener("click", handleClick, inCapturingPhase);
    },
    [handler, inCapturingPhase]
  );
  return ref;
}
