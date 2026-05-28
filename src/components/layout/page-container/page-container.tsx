import { ReactNode } from "react";

type PageContainerProps = Readonly<{
  children: React.ReactNode;
}>;

export function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <div className="mx-auto w-full max-w-[1600px]">
      {children}
    </div>
  )
}
