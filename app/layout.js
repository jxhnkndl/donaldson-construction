import "./globals.css";

export const metadata = {
  title: "Donaldson Construction",
  description: "Donaldson Construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
