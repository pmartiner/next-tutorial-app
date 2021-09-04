// Libraries
import Head from 'next/head';
import Link from 'next/link';

// Components
import ProfilePicture from 'components/ProfilePicture';

// Types
import { FC } from 'react';

// Styles
import layoutStyles from './styles/layout.module.css';
import utilStyles from 'styles/utils.module.css';

// Constants
const name = 'Pablo Martínez';
export const siteTitle = 'My first Next.js website!';

type Props = {
  home?: boolean;
};

const Layout: FC<Props> = ({ home, children }) => (
  <div className={layoutStyles.container}>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta
        name='description'
        content='Learning how to use Next.js :)'
      />
      <meta
        property='og:image'
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
      />
      <meta name='og:title' content={siteTitle} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
    <header className={layoutStyles.header}>
      {home ? (
        <>
          <ProfilePicture
            priority
            src='/images/profile.jpg'
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href='/'>
            <a>
              <ProfilePicture
                priority
                src='/images/profile.jpg'
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href='/'>
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home && (
      <div className={layoutStyles.backToHome}>
        <Link href='/'>
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  </div>
);

export default Layout;
