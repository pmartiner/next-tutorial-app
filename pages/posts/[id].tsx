// Libraries
import Head from 'next/head'

// Components
import Layout from 'components/Layout';
import Date from 'components/Date';

// Utils
import { getAllPostIds, getPostData } from 'lib/posts';

// Styles
import utilStyles from 'styles/utils.module.css';

// Types
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

/*
  Pages that begin with [ and end with ] are dynamic routes in Next.js.
*/

type PostProps = {
  postData: {
    id: string;
    date: string;
    title: string;
    contentHtml: string;
  }
}

const Post: NextPage<PostProps> = ({ postData }) => (
  <Layout>
    <Head>
      <title>
        {postData.title}
      </title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = params?.id && !Array.isArray(params.id)
    ? await getPostData(params.id)
    : {};

  return {
    props: {
      postData
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  };
};

export default Post;
