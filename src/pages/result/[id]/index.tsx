import Head from 'next/head';
import { useRouter } from 'next/router';

import HomeLayout from '@/components/@Layout/HomeLayout';
import ResultDetailById from '@/containers/ResultDetailById';

function ResultDetailByIdPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | 상세 페이지</title>
      </Head>
      <HomeLayout content={<ResultDetailById id={id} />} />
    </>
  );
}

export default ResultDetailByIdPage;
