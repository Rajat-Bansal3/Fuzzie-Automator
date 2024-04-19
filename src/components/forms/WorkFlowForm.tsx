import { WorkFlowFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
};

const WorkFlowForm = ({ title, subtitle }: Props) => {
  const form = useForm<z.infer<typeof WorkFlowFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(WorkFlowFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const isLoading = form.formState.isLoading;
  const router = useRouter();
  const onSubmit = () => {};
  return (
    <>
      <Card className='w-full max-w-[650px] border-none'>
        {title && subtitle && (
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
          </CardHeader>
        )}
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex flex-col gap-4 text-left'
            >
              <FormField
                disabled={isLoading}
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder='title' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                disabled={isLoading}
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder='description' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type='submit' disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader className='mr-2 h-4 w-4 animate-spin ' /> Loading
                  </>
                ) : (
                  "Save WorkFlow Settings"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default WorkFlowForm;
