import Head from 'next/head';

import HomeLayout from '@/components/@Layout/HomeLayout';
import Result from '@/containers/Result';

function ResultPage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | result</title>
      </Head>
      <HomeLayout content={<Result />} />
    </>
  );
}

export default ResultPage;
