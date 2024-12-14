import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";

const bebasNue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenHarvest",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${bebasNue.className} px-4 md:px-0`}>
        <Header />
        <div className="md:w-[1780px] w-[400px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
