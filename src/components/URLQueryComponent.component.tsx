import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { validationSchema } from "./URLQueryComponent.utils";
import {ErrorType, FormValues, QueryResult} from "./URLQueryComponent.types";

export const URLQueryComponent = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState<string>("");

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(validationSchema)
  });

  useQuery<QueryResult>({
    queryKey: ['query', url],
    queryFn: async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          return { success: false, error: response.statusText };
        }

        toast.success('URL is accessible!')
        return { success: true };
      } catch (error) {
        const {message} = error as ErrorType ;
        toast.error(`Error: ${message}`)
        return { success: false, error: 'Failed to fetch' };
      } finally {
        setIsLoading(false);
        setUrl('');
      }
    },
    enabled: !!url
  });

  const onSubmit = (data: FormValues) => {
    setUrl(data.url.trim());
  };

  return (
    <div>
      <div className="w-96 mx-auto mb-10 text-left bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-3xl font-medium text-slate-900 pb-2">Try your own URL</h1>
        <p className="text-slate-500 text-sm">This form will help you try to get the data from desired endpoint</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="flex flex-col space-y-5">
            <input
              {...register('url')}
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Your url..."
            />
            {errors.url && <p className="text-red-500">{errors.url.message}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              <span>{isLoading ? 'Loading...' : 'Try it out!'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};