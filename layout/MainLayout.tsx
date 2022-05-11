import Head from "next/head"
import { FC, ReactNode } from "react";
import Navbar from "../components/Navbar";

type Props = {
  children: ReactNode,
  title: string
}

const MainLayout: FC<Props> = ({ children, title }) => {
  return (
      <>
          <Head>
              <title>{title}</title>
              <meta name="author" content="Fernando Herrera" />
              <link rel="icon" href="/favicon.png" />
          </Head>
          <Navbar/>

          <main>
              { children }
          </main>

      </>
  )
};

export default MainLayout