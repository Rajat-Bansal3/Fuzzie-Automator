import { db } from "@/lib/db";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("here 10",body);
    const { id, email_addresses, first_name, image_url } = body?.data;
    const email = email_addresses[0]?.email_address;

    await db.user.upsert({
      where: {
        clerkId: id,
      },
      update: {
        email: email,
        name: first_name,
        profileImage: image_url,
      },
      create: {
        clerkId:id,
        email: email,
        name: first_name || "",
        profileImage: image_url,
      },
    });
    return new NextResponse("user updated in db successfully", {
      status: 200,
      statusText: "Successfull",
    });
  } catch (error) {
    console.log("Error in updating user in db:",error);
    return new NextResponse("user updated in db failed", {
        status: 500,
        statusText: "Unsuccessful",
      });
  }
}
