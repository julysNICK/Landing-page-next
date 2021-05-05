import Home, { HomeProps } from '../templates/Home';
import { LoadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';
export type IndexProps = {
  data: [];
};
export default function Index({ data = null }: HomeProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
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
