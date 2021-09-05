// Libraries
import Link from 'next/link';
import Head from 'next/head';

// Components
import Layout, { siteTitle } from 'components/Layout';
import Date from 'components/Date';

// Styles
import utilStyles from 'styles/utils.module.css';

// Types
import type { GetStaticProps, InferGetStaticPropsType , NextPage } from 'next';

// Utils
import { getSortedPostsData, PostData } from 'lib/posts';

type Props = {
  allPostsData: PostData[]
}

const Home: NextPage<Props> = (props) => {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {props.allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>          
          ))}
        </ul>
      </section>
    </Layout>
  )
}

/*
In Next.js, when you export a page component, you can also export an async function called getStaticProps. If you do this, then:
  - getStaticProps runs at build time in production, and…
  - Inside the function, you can fetch external data and send it as props to the page.

Essentially, getStaticProps allows you to tell Next.js:
“Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”.
NOTE: In development mode, getStaticProps runs on each request instead.
*/

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData: PostData[] = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  };
};

export default Home;
