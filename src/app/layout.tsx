import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FavoritesProvider } from '@/components/FavoritesProvider';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Wanderlust Labs',
    template: '%s | Wanderlust Labs',
  },
  description:
    'Explora experiencias de viaje, filtra por categoría y destino, y comparte búsquedas con enlaces.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans`}>
        <FavoritesProvider>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">{children}</main>
        </FavoritesProvider>
      </body>
    </html>
  );
}
