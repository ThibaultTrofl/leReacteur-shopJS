import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { connectToDB } from "@/middlewares/connectToDB";

export const metadata: Metadata = {
  title: "ShopJS",
  description: "Get the best Price for your Make-Up",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connectToDB();
  return (
    <html lang="fr">
      <body className={"flex flex-col items-center"}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
