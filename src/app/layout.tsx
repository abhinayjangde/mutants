import type { Metadata } from "next";
import "./globals.css";
import SiteConfig from "../config/site";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
