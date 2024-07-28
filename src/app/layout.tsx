import "../ui/styles/globals.css";
import Nav from "@/ui/modules/layout/templates/nav";
import Footer from "@/ui/modules/layout/templates/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
