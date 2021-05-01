import P from 'prop-types';
import { LoadPages } from '../api/load-pages';
import Home from '../templates/Home';

export default function Page({ data }) {
  return <Home data={data} />;
}

Page.propTypes = {
  data: P.object,
};

//export const getStaticPaths = async () => {
// const paths = (await LoadPages()).map((page) => {
//  return {
//    params: {
//      slug: page.slug,
//    },
//   };
// });

// return {
//   paths,
// fallback: false,
// };
//};

export const getServerSideProps = async (ctx) => {
  let data = null;

  try {
    data = await LoadPages(ctx.params.slug);
  } catch (e) {
    data = null;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
