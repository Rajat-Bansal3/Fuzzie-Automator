'use client'
import { EditorCardCanvasType } from "@/lib/types";
import { useEditor } from "@/providers/EditorProvider";
import React, { useMemo } from "react";
import { Position, useNodeId } from "reactflow";
import EditorCanvasHelperIcon from "./EditorCanvasHelperIcon";
import CostumHandle from "./CostumHandle";
import { ZIndex } from "@tsparticles/engine";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import CustomHandle from "./CostumHandle";

type Props = {};

const EditorCanvasCardSingle = ({ data }: { data: EditorCardCanvasType }) => {
  const { state, dispatch } = useEditor();
  const nodeId = useNodeId();

  const logo = useMemo(() => {
    return <EditorCanvasHelperIcon type={data.type} />;
  }, [data]);

  return (
    <>
      {data.type !== "Trigger" && data.type !== "Google Drive" && (
        <CostumHandle
          type='target'
          position={Position.Top}
          style={{ zIndex: 100 }}
        />
      )}
      <Card
        onClick={(e) => {
          e.stopPropagation();
          const val = state.Editor.elements.find((el) => el.id === nodeId);
          if (val) {
            dispatch({
              type: "SELECTED_ELEMENT",
              payload: {
                elements: val,
              },
            });
          }
        }}
        className='relative max-w-[400px] dark:border-muted-foreground/70'
      >
        <CardHeader className='flex flex-row items-center gap-4'>
          <div className=''>{logo}</div>
          <CardTitle className='text-md'>{data.title}</CardTitle>
          <CardDescription>
            <p className='text-xs text-muted-foreground/50'>
              <b className='text-muted-foreground/80'>ID:</b>
              {nodeId}
            </p>
            {data.description}
          </CardDescription>
        </CardHeader>
        <Badge variant='secondary' className='absolute right-2 top-2'>
          {data.type}
        </Badge>
        <div
          className={clsx("absolute left-3 top-4 h-2 w-2 rounded-full", {
            "bg-green-500": Math.random() < 0.6,
            "bg-orange-500": Math.random() >= 0.6 && Math.random() < 0.8,
            "bg-red-500": Math.random() >= 0.8,
          })}
        ></div>
      </Card>
      <CustomHandle type='source' position={Position.Bottom} id='a' />
    </>
  );
};

export default EditorCanvasCardSingle;
