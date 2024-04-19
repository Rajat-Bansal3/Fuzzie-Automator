import { CONNECTIONS } from "@/lib/constants";
import React from "react";
import ConnectionCard from "./_components/ConnectionCard";

type Props = {
  searchParams?: { [key: string]: string | undefined };
};

const page = (props: Props) => {
  return (
    <div className='reletive flex flex-col gap-4'>
      <h1 className='sticky top-0 z-10 flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg'>
        Connections
      </h1>
      <div className='reletive flex flex-col gap-4 '>
        <section className='flex flex-col gap-4 p-6 text-muted-foreground'>
          Connect all Your apps directly from here. You may need to refresh
          connections everyday to keep the connections verified
          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              key={connection.title}
              connected={() => {}}
              description={connection.description}
              icon={connection.image}
              title={connection.title}
              type={connection.title}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default page;
