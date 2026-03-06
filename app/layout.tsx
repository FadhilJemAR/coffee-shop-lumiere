import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumière Coffee",
  description:"Nikmati pengalaman kopi premium dengan teknik brewing kelas dunia di jantung kota. Tempat di mana rasa, aroma, dan ketenangan bertemu dalam satu cangkir.",
  icons:'/img/logo-black.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <head>
          <meta name="google-site-verification" content="bsaN2flAfEThgtAGGkHNib41lRWtQEz0DofkjoF-Pmk" />
        </head>
        {children}
      </body>
    </html>
  );
}
