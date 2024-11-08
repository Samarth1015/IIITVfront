import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "IIIT Vadodara",
  description: "Developed By Jenil & Samarth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>IIIT Vadodara</title>
      </Head>
      <body
        suppressHydrationWarning={true}
        className="__variable_1e4310 __variable_c3aa02 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
