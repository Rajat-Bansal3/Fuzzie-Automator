"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React from "react";
import CostumModel from "../../../../../components/globals/CostumModel";
import WorkFlowForm from "@/components/forms/WorkFlowForm";

type Props = {};

const WorkFlowsButton = (props: Props) => {
  const { setOpen, setClose } = useModal();
  const handleClick = () => {
    setOpen(
      <CostumModel
        title='Create a Workflow Automation'
        subHeading='workFlows are powerfull tool in your arsernal that help u automate the booring stuff'
        defaultOpen={true}
      >
        <WorkFlowForm title="test" subtitle="testing....."/>
      </CostumModel>
    );
  };
  return (
    <>
      <Button size={"icon"} onClick={handleClick}>
        <Plus />
      </Button>
    </>
  );
};

export default WorkFlowsButton;
