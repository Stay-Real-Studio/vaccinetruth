import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="relative h-full w-full flex justify-stretch items-stretch">
      {children}
    </div>
  );
};

export default Layout;
