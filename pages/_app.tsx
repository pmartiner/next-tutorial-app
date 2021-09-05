// Global styles
// In Next.js, you can add global CSS files by importing them from pages/_app.js.
// You cannot import global CSS anywhere else.
//
// The reason that global CSS can't be imported outside of pages/_app.js
// is that global CSS affects all elements on the page.
import 'styles/globals.css';

// Types
import { AppType } from 'next/dist/shared/lib/utils';

/*
  Next.js uses the App component to initialize pages.
  This App component is the top-level component which will be common across all the different pages.
  You can use this App component to keep state when navigating between pages, for example.
  You can override it and control the page initialization, which allows you to do amazing things like:

   - Persisting layout between page changes
   - Keeping state when navigating pages
   - Custom error handling using componentDidCatch
   - Inject additional data into pages
   - Add global CSS

  To override the default App, create the file ./pages/_app.js.

  The Component prop is the active page, so whenever you navigate between routes,
  Component will change to the new page.
  Therefore, any props you send to Component will be received by the page.

  pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods,
  otherwise it's an empty object.
*/

const MyApp: AppType = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
