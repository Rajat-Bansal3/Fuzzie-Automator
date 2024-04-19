import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean | null;
};

const WorkFlow = ({ description, id, name, publish }: Props) => {
  return (
    <Card className='flex w-full items-center justify-between'>
      <Link href={`/workflows/editor/${id}`}>
        <CardHeader className='flex flex-col gap-4'>
          <div className='flex flex-row gap-2'>
            <Image
              src='/googleDrive.png'
              alt='Drive'
              height={30}
              width={30}
              className='object-contain'
            />
            <Image
              src='/notion.png'
              alt='Notion'
              height={30}
              width={30}
              className='object-contain'
            />
            <Image
              src='/slack.png'
              alt='Slack'
              height={30}
              width={30}
              className='object-contain'
            />
            <Image
              src='/discord.png'
              alt='discord'
              height={30}
              width={30}
              className='object-contain'
            />
          </div>
          <div className=''>
            <CardTitle className='text-lg'>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
      </Link>
      <div className='flex flex-col items-center gap-4 p-4'>
        <Label htmlFor='airplane-mode' className='text-muted-foreground'>
          On
        </Label>
        <Switch
          id='airplane-mode'
          // onClick={onPublishFlow}
          // defaultChecked={publish?true}
        />
      </div>
    </Card>
  );
};

export default WorkFlow;
