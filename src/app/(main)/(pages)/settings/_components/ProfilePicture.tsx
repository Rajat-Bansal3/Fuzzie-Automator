"use client";

import React from "react";
import UploadCareButton from "./UploadCareButton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {
  onDelete?: any;
  userImage: string | null;
  onUpload?: any;
};

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter();
  const onRemoveProfilePicture = async () => {
    const response = await onDelete();
    if (response) {
      router.refresh();
    }
  };
  return (
    <div className='flex flex-col'>
      <p className='text-lg text-white'>ProfilePicture</p>
      <div className='flex flex-col items-center justify-center h-[30vh]'>
        {userImage ? (
          <>
            <div className='relative h-full w-2/12'>
              <Image src={userImage} alt='ProfilePicture' fill />
            </div>
            <Button
              onClick={onRemoveProfilePicture}
              className='bg-transparent text-white/70 hover:bg-transparent hover:text-white'
            >
              <X />
              Remove Profile Photo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
