import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./styles.scss";

const font = Montserrat({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Maarten Hogeveen",
  description: "Maarten Hogeveen - Web Developer / Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
