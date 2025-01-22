'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { MagnifyingGlass } from '@phosphor-icons/react';
import Suggestions from './suggestions';

const formSchema = z.object({
  activity: z
    .string()
    .min(2, { message: 'activity must contain at least two characters' })
    .max(50),
});

export default function Search() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      activity: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="activity"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input
                    placeholder="What do you want to do?"
                    {...field}
                    className="outline-none border-0  rounded-none border-[#F5F5F5] pb-3 border-b ring-0 focus:ring-0 px-9 placeholder:text-[#A6A6A6]/50"
                  />
                </FormControl>
                <MagnifyingGlass
                  size={20}
                  className="absolute -top-1 cursor-pointer"
                  color="#A6A6A6"
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Suggestions />
    </div>
  );
}
