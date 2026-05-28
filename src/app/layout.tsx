import type { ReactNode } from "react";
import type { Metadata } from "next";

import { AppLayout } from "@/components/layout/app-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "FieldOps",
  description: "Field Service Management Platform",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
