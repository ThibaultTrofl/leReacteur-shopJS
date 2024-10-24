import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopJS",
  description: "Get the best Price for your Make-Up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
      >
        {children}
      </body>
    </html>
  );
}
