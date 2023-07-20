import React from "react";

const sizeClasses = {
  txtInterSemiBold40: "font-inter font-semibold",
  txtInterRegular40: "font-inter font-normal",
  txtInterRegular30: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold30: "font-inter font-semibold",
  txtInterBlack30: "font-black font-inter",
  txtInterRegular30DeeppurpleA400: "font-inter font-normal",
  txtInterRegular25: "font-inter font-normal",
  txtInterRegular30Gray500: "font-inter font-normal",
  txtInterRegular30WhiteA700: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
