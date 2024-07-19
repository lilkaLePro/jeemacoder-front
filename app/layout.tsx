import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/components/home/routeLayout";

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
          <main>
          {children}
          </main>
        </ReactQueryProvider>
      
      </body>
    </html>
  );
}
