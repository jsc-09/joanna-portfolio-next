import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Joanna Szu Christian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas dui id
        ornare arcu odio ut. Egestas purus viverra accumsan in. Leo integer
        malesuada nunc vel risus commodo viverra. Orci eu lobortis elementum
        nibh tellus molestie. Vel turpis nunc eget lorem dolor. Ultrices vitae
        auctor eu augue ut. Tristique magna sit amet purus gravida. Mollis nunc
        sed id semper risus in hendrerit gravida. Lacus suspendisse faucibus
        interdum posuere lorem ipsum dolor sit. Erat velit scelerisque in dictum
        non consectetur a. At consectetur lorem donec massa. Orci porta non
        pulvinar neque. Faucibus a pellentesque sit amet. Tincidunt eget nullam
        non nisi est sit.
      </p>
      <Footer />
    </div>
  );
}
