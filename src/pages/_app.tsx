import { DefaultSeo } from 'next-seo';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ControlledConfirmAlert from '@/components/@Alert/ControlledConfirmAlert';
import TokDocsDevTools from '@/components/TokDocsDevTool';
import withAppProvider from '@/hocs/withAppProvider';

import { config as SEO } from '@/configs/seo/config';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function App({ Component, pageProps }: any) {
  return (
    <>
      {/* <Fonts /> */}
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <ControlledConfirmAlert />
      <ReactQueryDevtools initialIsOpen={false} />
      <TokDocsDevTools />
    </>
  );
}

export default withAppProvider(App);
