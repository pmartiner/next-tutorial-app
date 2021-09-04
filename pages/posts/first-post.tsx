// Libraries
import Link from 'next/link';

// Types
import { NextPage } from 'next';

const FirstPost: NextPage = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
};

export default FirstPost;
