import P from 'prop-types';

import Head from 'next/head';
import config from '../config';
import { mapData } from '../api/map-data';
import Home from '../templates/Home';
import { LoadPages } from '../api/load-pages';
export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getServerSideProps = async () => {
  let data = null;

  try {
    data = await LoadPages('landing-page');
  } catch (e) {
    //
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
  };
};
Index.propTypes = {
  data: P.array,
};
