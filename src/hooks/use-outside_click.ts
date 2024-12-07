import React, { useEffect } from "react";

// Define the type of the callback function for better type safety
type OutsideClickCallback = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: OutsideClickCallback
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    // Add event listeners for mousedown and touchstart
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup the event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
