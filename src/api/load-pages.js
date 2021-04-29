import config from '../config';
import { mapData } from './map-data';
export const LoadPages = async (slug = '') => {
  const cleanSlug = slug ? `?slug=${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
  const url = `${config.url}/pages/${cleanSlug}`;

  const raw = await fetch(url);
  const json = await raw.json();

  const data = mapData(json);
  return data;
};
