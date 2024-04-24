"use server";

import { db } from "@/lib/db";

export const onCreateNodeEdges = async (
  flowId: string,
  nodes: string,
  edges: string,
  flowPaths: string
) => {
  const flow = await db.workflows.update({
    where: { id: flowId },
    data: {
      nodes,
      edges,
      flowPath: flowPaths,
    },
  });
  if (flow) return { message: "flow saved" };
};

export const onFlowPublish = async (workflowId: string, status: boolean) => {
  const published = await db.workflows.update({
    where: {
      id: workflowId,
    },
    data: {
      publish: status,
    },
  });
  if(published) return {message:"workFlow Publushed Successfully"}
};
