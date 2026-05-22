
import "./globals.css";

export const metadata = {
  title: "ASD Kroton Apnea",
  description: "Tra leggende e storie di mare"
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
