'use client'

import { InDeButton } from "@/components/InDeButton";
import Navbar from "@/components/Navbar";
import ResetButton from "@/components/ResetButton";
import ShowNumber from "@/components/ShowNumber";
import React from "react";

const Page = () => {
  return (
    <div className="p-5 space-y-5">
      <Navbar />
      <ShowNumber />
      <InDeButton />
      <ResetButton />
    </div>
  );
};

export default Page;
