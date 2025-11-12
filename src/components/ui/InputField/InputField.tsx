import React, { useEffect, useState } from "react";
import { InputTypes } from "./types";
import "./InputField.scss";
import CancelIcon from "@/assets/icons/cancel.svg?react";
import { useDebounce } from "@/hooks";

type Props = {
  type?: InputTypes;
  placeholder?: string;
  debounce?: number;
  onType: (query: string) => void;
  defaultValue?: string;
};

const InputField: React.FC<Props> = ({
  type = InputTypes.TEXT,
  placeholder = "",
  debounce = 1000,
  defaultValue = "",
  onType,
}) => {
  const [val, setVal] = useState(defaultValue);
  const debouncedValue = useDebounce(val, debounce);

  const handleChanges = (newVal: string) => {
    const cleanedVal = newVal
      .replace(/[^a-zA-Z\u0400-\u04FF0-9\s]/g, "")
      .replace(/\s{2,}/g, " ");

    setVal(cleanedVal);
  };

  const clearInput = () => setVal("");

  useEffect(() => {
    onType(debouncedValue);
  }, [debouncedValue, onType]);

  return (
    <div className="input-field">
      <input
        className="input-field__input"
        type={type}
        value={val.trimStart()}
        placeholder={placeholder}
        onChange={(event) => handleChanges(event.target.value)}
      />

      <div className="input-field__action">
        {val && (
          <button onClick={clearInput}>
            <span className="input-field__icon input-field__icon--clear">
              <CancelIcon />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
