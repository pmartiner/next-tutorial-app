// Libraries
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

// Components
import Layout, { siteTitle } from 'components/Layout';

// Styles
import utilStyles from 'styles/utils.module.css';

// Types
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I&apos;m a front end developer who wants to help build a better world through community and collectivity. Only together we can resist and fight against oppresion.</p>
      </section>
      <section>
        You can check my first post{' '}
        <Link href='/posts/first-post'>
          <a>over here!</a>
        </Link>
      </section>
    </Layout>
  )
}

export default Home;
