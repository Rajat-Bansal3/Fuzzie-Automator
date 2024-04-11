"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { menuOptions } from "@/lib/constants";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { cn } from "@/lib/utils";
import { clsx } from "clsx";
import { Separator } from "../ui/separator";
import {
  DatabaseBackup,
  DatabaseIcon,
  GitBranch,
  LucideMousePointerClick,
} from "lucide-react";
import {ModeToggle} from "../ui/ModeToggle";

type Props = {};

const Sidebar = (props: Props) => {
  const pathName = usePathname();
  return (
    <nav className='dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2'>
      <div className='flex items-center justify-center flex-col gap-8'>
        <Link href='/'>Fuzzie</Link>
        {/* <div className="flex flex-col gap-5 mx-20">
          {/* <AnimatedTooltip items={menuOptions} />
           
            </div> */}
        <TooltipProvider>
          {menuOptions.map((menu) => (
            <ul key={menu.name}>
              <Tooltip delayDuration={1}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menu.href}
                      className={clsx(
                        "group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                        {
                          "dark:bg-[#2f006b] bg-[#EEE0FF]":
                            pathName === menu.href,
                        }
                      )}
                    >
                      <menu.Component selected={pathName === menu.href} />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent>
                  {menu.name}
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator />
        <div className='flex items-center gap-9 flex-col dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]'>
          <div className='relative dark:bg-[#353346]/70 p-2 mb-0 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
            <LucideMousePointerClick className='dark:text-white' size={18} />
            <div className='border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]' />
          </div>
          <div className='relative dark:bg-[#353346]/70 p-2 mb-0 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
            <GitBranch className='dark:text-white' size={18} />
            <div className='border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]' />
          </div>
          <div className='relative dark:bg-[#353346]/70 p-2 mb-0 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
            <DatabaseBackup className='dark:text-white' size={18} />
            <div className='border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]' />
          </div>
          <div className='relative dark:bg-[#353346]/70 p-2 mb-0 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
            <GitBranch className='dark:text-white' size={18} />
            <div className='border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]' />
          </div>
          <div className='relative dark:bg-[#353346]/70 p-2 mb-0 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
            <DatabaseIcon className='dark:text-white' size={18} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
            <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
