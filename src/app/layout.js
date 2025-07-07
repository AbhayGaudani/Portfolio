import "./globals.css";
import MainContent from "./Components/MainContent";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/website-logo.ico" />
      </head>
      <body>
        <MainContent>{children}</MainContent>
      </body>
    </html>
  );
}
