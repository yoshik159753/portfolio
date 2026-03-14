import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth scroll-pt-16 text-sm font-normal text-gray-800">
      <body>{children}</body>
    </html>
  );
}
