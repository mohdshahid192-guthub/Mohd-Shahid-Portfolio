import React from "react";
import usePhoneCodes from "../../Hooks/PhoneCountryCode";

export default function InputBox({value, placeholder, onChange, isRequired, type, name, width}) {
const {codes, isLoading, error} = usePhoneCodes()


const baseStyles = `${width}  px-2 bg-orange-300/50 ${name ? (name === 'countryCode' ? 'rounded-l-lg' : 'rounded-r-lg') : 'rounded-lg'} outline-0 dark:bg-indigo-300 placeholder:text-black text-black`

const handleTextareaChange = (e) => {
  let text = e.target.value;

  
  text = text.replace(/\s+/g, ' ');

  
  if (text.length > 100) {
    text = text.slice(0, 100);
  }

  
  e.target.value = text;
  onChange(e);
};
if (type === 'select') {
    return (
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={isRequired}
        className={`${baseStyles} text-sm h-9 appearance-none cursor-pointer border-r`}
        disabled={isLoading}
      >
      
        {codes.map((c) => (
          <option key={c.cca2} value={c.code}>
            {c.code} ({c.name})
          </option>
        ))}
      </select>
    );
  }


if (type === 'textarea') {
  return(

      <textarea
        value={value}
        placeholder={placeholder}
        onChange={handleTextareaChange}
        required={isRequired}
        className={`${baseStyles} h-24 py-2 resize-none`}
    />
  )
}


  return(

    <input type={type} 
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    required = {isRequired}
    name={name}
    className={`${baseStyles}  h-9`}
    />
  )


}