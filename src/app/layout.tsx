import type { Metadata } from "next";

import Provider from "@/components/Provider/Provider";
import { Footer, Header, Main } from "@/components";

import "./globals.css";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "Todo Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-white">
        <MantineProvider>
          <Provider>
            <Header />
            <Main>
              {children}
            </Main>
            <Footer />
          </Provider>
        </MantineProvider>
      </body>
    </html>
  );
}
