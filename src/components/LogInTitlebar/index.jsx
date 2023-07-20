import React from "react";

import { Img, Text } from "components";

const LogInTitlebar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[33px] items-center justify-center w-[439px] sm:w-full">
          <Img
            className="h-[65px] md:h-auto object-cover w-[65px]"
            src="images/img_utilitywalletlogo.png"
            alt="utilitywalletlo"
          />
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-[253px]"
            size="txtInterRegular40"
          >
            {props?.usertext}
          </Text>
        </div>
      </div>
    </>
  );
};

LogInTitlebar.defaultProps = { usertext: "Utility Project" };

export default LogInTitlebar;
