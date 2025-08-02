import "../styles/globals.css";

import { GeistSans as geist } from "geist/font/sans";
import { Providers } from "../lib/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flowza",
  description:
    "Open-source and AI-native project manager, reimagined for speed and clarity",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
