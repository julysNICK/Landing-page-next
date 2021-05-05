import P from 'prop-types';
import { LoadPages } from '../api/load-pages';
import Home from '../templates/Home';
import { useRouter } from 'next/router';
import { Loading } from '../templates/Loading';
export default function Page({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }
  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

export const getStaticPaths = async () => {
  // const paths = (await LoadPages()).map((page) => {
  //  return {
  //    params: {
  //      slug: page.slug,
  //    },
  //   };
  // });

  return {
    paths: [{ params: { slug: 'udemy' } }],
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await LoadPages(ctx.params.slug);
  } catch (e) {
    data = null;
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};
