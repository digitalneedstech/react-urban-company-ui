import React, { useState, useEffect } from "react";
import _ from "lodash";
import AsyncSelect from "react-select/async";
import { fetchData } from "../redux/helpers";

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
  //   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
  //     return {
  //       ...styles,
  //       backgroundColor: isDisabled ? "red" : "blue",
  //       color: "#FFF",
  //       cursor: isDisabled ? "not-allowed" : "default",
  //     };
  //   },
};

export default function AsyncSelectInput(props) {
  const { placeholder, url, name, onChange, value, isMulti = true } = props;
  const [options, setOptions] = useState([]);
  const [inputValue, setInput] = useState("");
  const [defaultValue, setDefaultValue] = useState([]);

  useEffect(() => {
    if (!_.isEmpty(value) && !_.isEmpty(options)) {
      setDefaultValue(
        options.filter(function (option) {
          let optId = option?.value;
          return value.split(",").indexOf(optId.toString()) != -1;
        })
      );
    } else {
      setInput("");
      setDefaultValue([]);
    }
  }, [value, options]);

  const filterOptions = (inputValue) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = async (inputValue, callback) => {
    let response = await fetchData(url, "GET");
    let respOptions = _.map(
      response[Object.keys(response)[0]],
      (opt, index) => ({
        value: opt.id,
        label: opt[Object.keys(opt)[1]],
      })
    );

    if (!_.isEmpty(respOptions)) {
      setOptions(respOptions);
      callback(filterOptions(inputValue));
    }

    return respOptions;
  };

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    setInput(inputValue);
    return inputValue;
  };

  const onChangeSelectedOption = (e) => {
    let temp = e;
    if (!isMulti) temp = [e];
    const selectedOption = _.map(temp, (opt, index) => opt.value);
    onChange({ target: { name: name, value: selectedOption.join() } });
  };

  return (
    <AsyncSelect
      value={defaultValue}
      placeholder={placeholder}
      styles={colourStyles}
      isMulti={isMulti}
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      onInputChange={handleInputChange}
      onChange={onChangeSelectedOption}
    />
  );
}
