import "../styles/globals.css";

import { Toaster } from "@flowza/ui/components/sonner";
import { GeistSans as geist } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flowza",
  description:
    "Flowza is an open-source, AI-native workspace that unifies docs, chat, and agents together into one seamless platform",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
