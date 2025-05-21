import './globals.css';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}