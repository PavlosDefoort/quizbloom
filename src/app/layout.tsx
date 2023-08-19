import "./globals.css";
import "katex/dist/katex.min.css";
import { Inter } from "next/font/google";
import Example from "./NewBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PenguMath",
  description: "The best way to test your math skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <header className="fixed z-10 top-0 left-0 right-0 bg-gray-800 text-white p-4">
            <Example />
          </header>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
