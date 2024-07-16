import type { Metadata } from "next";
import "./globals.css";


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
          
        {children}
      
      </body>
    </html>
  );
}
