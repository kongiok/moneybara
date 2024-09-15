import { FC, ReactNode } from "react";

const Landing: FC<{
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}> = ({ header, children, footer }) => (
  <div className="h-full w-dvw overflow-hidden flex flex-col px-8 py-4 gap-2">
    {header}
    <main className="flex-1 w-full min-h-[65vh] h-full flex flex-col items-center">
      {children}
    </main>
    {footer}
  </div>
);

export default Landing;
