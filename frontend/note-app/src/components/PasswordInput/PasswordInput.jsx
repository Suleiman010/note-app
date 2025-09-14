import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="flex items-center justify-between   border-[1.5px] px-5 rounded border-gray-300  mb-4">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full outline-none text-sm bg-transparent py-3  rounded mr-3"
      />
      {isShowPassword ? (
        <FaRegEyeSlash
          size={22}
          className="text-green-600 cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <FaRegEye
          size={22}
          className="text-green-600 cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
};

export default PasswordInput;
