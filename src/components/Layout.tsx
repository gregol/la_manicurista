import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { sitInformation } from "@site-setting/site-information";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <ul>
        {sitInformation.socialNetworks?.map((social) => (
          <li>
            <a target="_blank" href={social.link}>
              {social.name}
            </a>
          </li>
        ))}
      </ul>
      <hr />
      <span>© LaManicurista 2020.</span>
    </footer>
  </div>
);

export default Layout;
