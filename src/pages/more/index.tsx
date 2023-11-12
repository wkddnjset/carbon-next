import Head from 'next/head';

import HomeLayout from '@/components/@Layout/HomeLayout';
import More from '@/containers/More';

function MorePage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | more</title>
      </Head>
      <HomeLayout content={<More />} />
    </>
  );
}

export default MorePage;
