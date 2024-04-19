import React from "react";
import WorkFlowsButton from "./_components/WorkFlowsButton";
import WorkFlows from "./_components/Index";

type Props = {};

const page = (props: Props) => {
  return (
    <div className='reletive flex flex-col'>
      <h1 className='sticky top-0 z-10 flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg'>
        WorkFlows
        <WorkFlowsButton />
      </h1>
      <WorkFlows />
      <WorkFlows />
      <WorkFlows />
      <WorkFlows />
    </div>
  );
};

export default page;
