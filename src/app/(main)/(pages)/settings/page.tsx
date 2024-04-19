import ProfileForm from "@/components/forms/ProfileForm";
import React, { use } from "react";
import ProfilePicture from "./_components/ProfilePicture";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

type Props = {};

const Settings = async(props: Props) => {
  const authUser = await currentUser()
  if(!authUser) return null ;

  const user = await db.user.findUnique({where:{clerkId:authUser.id}})

  if(!user) return null ;


  const removeProfilePicture = async () => {
    "use server";
    const res = db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: "",
      },
    });
    return res;
  };

  const uplaodProfilePicture = async(image:string) =>{
    "use server"
    const res  = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: image,
      },
    })
    return res
  }

  const updateUserInfo = async (name:string) =>{
    "use server"
    const res  = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        name: name,
      },
    })
    return res
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='sticky top-0 z-10 flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg'>
        <span>settings</span>
      </h1>
      <div className='flex flex-col p-6 gap-10'>
        <div>
          <h2 className='text-2xl font-bold'>User Profile</h2>
          <p className='text-base text-white/20'>
            Add or Update your Profile Information
          </p>
        </div>
        <ProfilePicture
          onDelete={removeProfilePicture}
          userImage={user.profileImage || ""}
          onUpload={uplaodProfilePicture}
        />
        <ProfileForm user={user} onUpdate={updateUserInfo} />
      </div>
    </div>
  );
};

export default Settings;
