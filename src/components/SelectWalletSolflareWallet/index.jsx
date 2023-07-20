import React from "react";

import { Img, Text } from "components";

const SelectWalletSolflareWallet = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-start w-auto">
          <Img
            className="h-[53px] md:h-auto object-cover w-[53px]"
            src="images/img_solflarelogo1.png"
            alt="solflarelogoOne"
          />
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
            size="txtInterRegular30"
          >
            {props?.solflare}
          </Text>
        </div>
      </div>
    </>
  );
};

SelectWalletSolflareWallet.defaultProps = { solflare: "Solflare" };

export default SelectWalletSolflareWallet;
