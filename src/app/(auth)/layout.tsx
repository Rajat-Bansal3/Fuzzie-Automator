import React, { Children } from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className='flex h-screen items-center justify-center w-full'>
      {props.children}
    </div>
  );
};

export default Layout;
