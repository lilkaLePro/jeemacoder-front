import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/components/home/routeLayout";
import { roboto } from "@/components/ui/fonts";

export const metadata: Metadata = {
  title: "jemacoder ",
  description: "hackatons en ligne ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <head>
        <meta name="csrf-token" content="{{ csrf_token() }}" ></meta>
      </head>

      <body>
        <ReactQueryProvider>
          <main className={`${roboto.className} font-mono`}>
          {children}
          </main>
        </ReactQueryProvider>
      
      </body>
    </html>
  );
}
