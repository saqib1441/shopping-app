import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Shopping App - Shop Smart, Live Well!",
  description:
    "Discover unbeatable deals on the latest fashion trends, electronics, and home essentials at our online shopping site. Enjoy free shipping, secure checkout, and customer reviews to help you shop smart. Explore daily deals and seasonal sales for the best prices on your favorite products, plus exclusive loyalty rewards!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
