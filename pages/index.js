import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Joanna Szu Christian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h3>Joanna Szu Christian</h3>
      </header>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a>Works</a>
          </Link>
        </li>
        <li>
          <Link href="/Contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <footer>
        <h4>Some footer item here</h4>
      </footer>
    </div>
  );
}
