import "./globals.scss";
import { LanguageProvider } from "@/context/LanguageProvider";

export const metadata = {
  title: "dashG",
  description: "Welcome to DashG's world – where curiosity meets code. Explore my projects, skills, and the puzzles I solve as a passionate programmer.",
};


export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}