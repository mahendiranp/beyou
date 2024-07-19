import "./globals.css";

export const metadata = {
  title: "Beyou",
  description: "Beyou online fashion boutique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
