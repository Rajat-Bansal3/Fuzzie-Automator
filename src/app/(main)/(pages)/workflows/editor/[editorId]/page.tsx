import { ConnectionsProvider } from "@/providers/connection-providers";
import EditorProvider from "@/providers/EditorProvider";
import React from "react";
import EditorCanvas from "./_components/EditorCanvas";

type Props = {};

const page = (props: Props) => {
  return (
    <div className='h-full'>
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas/>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};

export default page;
