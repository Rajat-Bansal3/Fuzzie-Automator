import { ConnectionProviderProps } from "@/providers/connection-providers";
import { z } from "zod";

export const EditUserProfileSchema = z.object({
    email:z.string().email('Required'),
    name:z.string().min(1, "Required"),
}) 

export type ConnectionTypes = "Google Drive" | "Notion" | "Discord" | "Slack" 

export type Connection = {
    title : ConnectionTypes,
    description : string,
    image: string,
    connectionKey : keyof ConnectionProviderProps,
    accessTokenKey?: string, 
    alwaysTrue?: boolean,
    slackSpecial?: boolean
} 

export const WorkFlowFormSchema = z.object({
    name : z.string().min(1,"Required"),
    description : z.string().min(1,"Required")
})