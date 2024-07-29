import "../ui/styles/globals.scss";
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
