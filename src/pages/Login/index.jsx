import React from "react";

import { Button, Img, Text } from "components";
import LogInTitlebar from "components/LogInTitlebar";

const LoginPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[262px] items-center justify-start mx-auto pb-[350px] w-full">
        <LogInTitlebar className="bg-blue_gray-100 flex flex-col items-start justify-start w-full" />
        <div className="flex flex-col gap-[33px] items-center justify-start md:px-5 w-auto md:w-full">
          <div className="flex flex-col gap-3 items-center justify-start w-auto">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
              size="txtInterRegular40"
            >
              Log in
            </Text>
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
              size="txtInterRegular25"
            >
              Log into your admin account
            </Text>
          </div>
          <div className="flex flex-col gap-[33px] items-center justify-start w-full">
            <Button className="border border-gray-500 border-solid cursor-pointer leading-[normal] max-w-[629px] py-[11px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-500 w-full">
              User
            </Button>
            <Button className="border border-gray-500 border-solid cursor-pointer leading-[normal] max-w-[629px] py-[11px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-500 w-full">
              Password
            </Button>
            <Button className="bg-gradient1  cursor-pointer font-semibold leading-[normal] max-w-[629px] py-[11px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700_01 w-full">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
