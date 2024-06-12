import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sorry, we're closed - Gashu-Group",
  description:
    "Former Gashu-Group website. We're no longer open, but thanks for coming by!",
};

// Import the font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-plus-jakarta-sans: ${plusJakartaSans.variable};
              }
            `,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable}`}>{children}</body>
    </html>
  );
}
