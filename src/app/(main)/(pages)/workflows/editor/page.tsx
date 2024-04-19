"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const path = usePathname();
  const navigate = useRouter();

  useEffect(() => {
    if (path === "/workflows/editor/") {
      const id = setTimeout(() => {
        navigate.push("/workflows");
      }, 2000);

      return () => clearTimeout(id);
    }
  }, []);

  return (
    <div className='flex items-center justify-center text-2xl text-muted-foreground h-full'>
      no workFlows Found with Id :
    </div>
  );
};

export default Page;
