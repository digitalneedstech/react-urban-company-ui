import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    fontSize: "14px",
    fontWeight: 500,
    paddingLeft: "45px",
    background: "#FFFFFF",
    boxShadow: "0px 12px 34px #20345914",
    borderRadius: "10px",
    paddingTop: "17px",
    paddingBottom: "17px",
    border: isFocused ? "2px solid #5A9E45B3" : "2px solid #FFFFFF",
  }),
};

export default function CustomTagInput(props) {
  const { placeholder, name, onChange, defaultValue } = props;
  const [inputValue, setInput] = useState("");
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    if (defaultValue) {
      let temp = defaultValue.split(",").map((item) => {
        return { value: item, label: item };
      });
      setValue([...temp]);
    }
  }, [defaultValue]);

  const onKeyDown = (e) => {
    const input = String.fromCharCode(e.keyCode);

    if (e.keyCode === 188) {
      e.preventDefault();
      if (inputValue !== "") {
        handleCreate(inputValue.slice(0));
      }
    } else if (/[a-zA-Z0-9-_ ]/.test(input)) {
      setInput(inputValue + e.key);
    }
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleCreate = (inputValue) => {
    const newOption = createOption(inputValue);
    setInput("");
    setOptions([...options, newOption]);
    setValue([...value, newOption]);
    onChange({
      target: {
        name: name,
        value: [...value, newOption].map((item) => item.value).join(),
      },
    });
  };

  return (
    <CreatableSelect
      isClearable
      styles={colourStyles}
      isMulti
      inputValue={inputValue}
      onKeyDown={onKeyDown}
      onChange={handleChange}
      onCreateOption={handleCreate}
      options={options}
      value={value}
      placeholder={placeholder}
    />
  );
}
