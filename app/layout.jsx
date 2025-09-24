// app/layout.jsx
import "../globals.css";

export const metadata = {
  title: "Hi3els Lab",
  description: "Premium Cinematic Website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-darkbg text-white">
        {children}
      </body>
    </html>
  );
}
