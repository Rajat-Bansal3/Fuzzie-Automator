"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useNodeConnections } from "@/providers/connection-providers";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";
import { onCreateNodeEdges, onFlowPublish } from "../_actions/workFlowConnections";

type Props = {
  children: React.ReactNode;
  edges: any[];
  nodes: any[];
};

const FlowInstance = ({ children, edges, nodes }: Props) => {
  const pathname = usePathname();
  const [isFlow, setIsFlow] = useState([]);
  const { nodeConnection } = useNodeConnections();

  const onFlowAutomation = useCallback(async () => {
    const flow = await onCreateNodeEdges(
      pathname.split("/").pop()!,
      JSON.stringify(nodes),
      JSON.stringify(edges),
      JSON.stringify(isFlow)
    );

    if (isFlow) {
      toast({ title: flow?.message });
    }
  }, [nodeConnection]);

  const onPublishAutomation = useCallback(async()=>{
    const res = await onFlowPublish(pathname.split('/').pop()! , true)
      if(res) toast({title : res.message})
  },[])

  return (
    <>
      <div className=' flex flex-col justify-center items-center gap-2'>
        <div className='flex gap-3 p-4'>
          <Button onClick={onFlowAutomation} disabled={isFlow.length < 1}>
            Save
          </Button>
          <Button onClick={onPublishAutomation} disabled={isFlow.length < 1}>
            Save
          </Button>
        </div>
        {children}
      </div>
    </>
  );
};

export default FlowInstance;
