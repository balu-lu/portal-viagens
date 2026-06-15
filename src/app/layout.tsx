import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Voyage | Portal de Viagens",
  description: "Descubra o seu próximo destino inesquecível.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <footer style={{ textAlign: 'center', padding: '2rem', color: '#64748b', fontSize: '0.875rem' }}>
          &copy; 2026 Voyage. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}