import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Leerdoelen | JDW",
  description: "MVP frontend gekoppeld aan FastAPI backend"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <body className="bg-surface text-gray-900">
        {children}
      </body>
    </html>
  );
}
