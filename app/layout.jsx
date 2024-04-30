import "./globals.css";

export const metadata = {
  title: "Donaldson Construction",
  description: "Donaldson Construction is a commercial construction company located in Central Virginia focusing on general contracting, construction management services, and pre-construction for corporate, commercial, healthcare, and specialty clients.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;