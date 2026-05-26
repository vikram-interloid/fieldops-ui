type PageContainerProps = Readonly<{
  children: React.ReactNode;
}>;

export function PageContainer({
  children,
}: PageContainerProps) {
  return <div>{children}</div>;
}
