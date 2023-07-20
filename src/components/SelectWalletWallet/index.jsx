import React from "react";

import { Img, Text } from "components";

const SelectWalletWallet = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-start w-auto">
          <Img
            className="h-[52px] md:h-auto object-cover w-[52px]"
            src="images/img_phantomlogofreelogovectors.png"
            alt="phantomlogofree"
          />
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
            size="txtInterRegular30"
          >
            {props?.username}
          </Text>
        </div>
        <Text
          className="text-black-900 text-xl w-auto"
          size="txtInterRegular20"
        >
          {props?.userstatus}
        </Text>
      </div>
    </>
  );
};

SelectWalletWallet.defaultProps = {
  username: "Phantom",
  userstatus: "Detected",
};

export default SelectWalletWallet;
