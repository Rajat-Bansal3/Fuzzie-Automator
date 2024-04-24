import { useEditor } from "@/providers/EditorProvider";
import React, { CSSProperties } from "react";
import { Handle, HandleProps, useStore } from "reactflow";

type Props = HandleProps & { style?: CSSProperties };

const selector = (s: any) => ({
  nodeInternals: s.nodeInternals,
  edges: s.edges,
});

const CostumHandle = (props: Props) => {
  const { state } = useEditor();
  const { nodeInternals, edges } = useStore(selector);
  return (
    <Handle
      {...props}
      isValidConnection={(e) => {
        const sourceFromHandleState = state.Editor.Edeges.filter(
          (edge) => edge.source === e.source
        ).length;
        const sourceNode = state.Editor.elements.find(
          (element) => element.id === e.source
        );
        const targetFromHandleState = state.Editor.Edeges.filter(
          (edge) => edge.target === e.target
        ).length;

        if (targetFromHandleState === 1) return false;
        if (sourceNode?.type === "Condition") return true;
        if (sourceFromHandleState < 1) return true;
        return false;
      }}
      className='!-bottom-2 !h-4 !w-4 dark:bg-neutral-800'
    />
  );
};

export default CostumHandle;
