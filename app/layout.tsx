import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next JS Template",
  description: "Template for Next JS, Tailwind, TypeScript, Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans flex flex-col min-h-screen">
        <header>
          header
        </header>
        <main className="grow">
          {children}
        </main>
        <footer>
          footer
        </footer>
      </body>
    </html>
  );
}
