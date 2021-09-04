// Libraries
// import Link from 'next/link';
import Head from 'next/head';
// import styled from 'styled-components';

// Components
import Layout from 'components/Layout';

// Types
import { NextPage } from 'next';

// const StyledAnchor = styled.a`
//   color: #0070f3;
//   text-decoration: none;

//   :hover {
//     text-decoration: underline;
//   }
// `;

const FirstPost: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>This is my first post :)</title>
      </Head>
      <h1>First Post</h1>
      {/* <h2>
        <Link href='/' passHref>
          <StyledAnchor>Back to home</StyledAnchor>
        </Link>
      </h2> */}
    </Layout>
  )
};

export default FirstPost;
