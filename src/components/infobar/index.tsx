import { Book, Headphones, Search } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Input } from "../ui/input";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const Infobar = (props: Props) => {
  return (
    <div className='flex flex-row justify-end gap-6 p-4 w-full dark:bg-black'>
      <span className='flex items-center bg-muted px-4 rounded-full'>
        <Search />
        <Input
          placeholder='Search'
          className='border-none bg-transparent focus:outline-none'
        />
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={1}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>contact support</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={1}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>Guide</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UserButton />
    </div>
  );
};

export default Infobar;
