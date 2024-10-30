import { PropsWithChildren } from 'react';

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col max-w-screen w-full md:w-[800px] p-4 flex-grow">
      {children}
    </div>
  );
};
