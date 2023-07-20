import React from "react";

import { Button, Img, Text } from "components";
import LogInTitlebar from "components/LogInTitlebar";
import SelectWalletWallet from "components/SelectWalletWallet";
import SelectWalletWallet1 from "components/SelectWalletWallet1";

const SelectWalletPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-8 justify-start mx-auto pb-64 w-full">
        <div className="flex flex-col md:gap-10 gap-[197px] items-center w-full">
          <LogInTitlebar className="bg-blue_gray-100 flex flex-col items-start justify-start w-full" />
          <div className="border border-black-900 border-solid flex flex-col gap-11 items-center justify-start p-[70px] md:px-5 w-auto md:w-full">
            <div className="flex flex-col gap-[21px] items-center justify-start w-auto sm:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtInterRegular40"
              >
                Select Wallet
              </Text>
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtInterRegular25"
              >
                Connect a wallet on Solana to continue
              </Text>
            </div>
            <div className="md:block flex flex-col items-start justify-start md:m-[] md:mx-auto w-auto md:w-full">
              <SelectWalletWallet className="md:block border border-gray-500 border-solid flex flex-row gap-2.5 items-center justify-between md:m-[] max-w-[676px] md:mx-auto md:px-10 sm:px-5 px-[49px] py-3 w-full" />
              <SelectWalletWallet1 className="md:block border-b border-gray-500 border-solid border-x flex flex-col gap-2.5 items-center justify-start md:m-[] max-w-[676px] md:mx-auto md:px-10 sm:px-5 px-[49px] py-3 w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end md:justify-between md:m-[] md:mb-[] md:mx-auto md:p-[] md:pl-10 md:pt-[30px] md:px-10 sm:px-5 px-[552px] w-full">
          <Button className="bg-blue_gray-100 sm:block cursor-pointer sm:justify-between leading-[normal] sm:m-[] md:m-[] md:mb-[] md:mx-auto py-[11px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-[319px]">
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default SelectWalletPage;
