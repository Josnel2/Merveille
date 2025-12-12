import './globals.css';

export const metadata = {
  title: 'Lettre pour Jiongo Pierrette Merveille',
  description: 'Page romantique animée dédiée à Jiongo Pierrette Merveille',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-slate-950 font-body text-white antialiased">
        {children}
      </body>
    </html>
  );
}
