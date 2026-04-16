import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Café Canastra - Tabela Atacado 2026",
  description: "Tabela de preços e produtos do Café Canastra para atacado.",
  icons: {
    icon: "/logo-canastra-preta.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 antialiased">
        {children}
      </body>
    </html>
  );
}
