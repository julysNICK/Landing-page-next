/* eslint-disable no-undef */

import config from '../config';
import { LoadPages } from './load-pages';
import * as mapDataModule from './map-data';

jest.mock('./map-data', () => {
  return {
    mapData: jest.fn().mockResolvedValue({ mapped: 1 }),
  };
});
let mockFetch = null;
let mockJson = null;
describe('./load-pages', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    mockJson = jest.fn().mockResolvedValue(Promise.resolve({ toJson: 1 }));
    mockFetch = global.fetch;
    mockFetch.mockResolvedValue({
      json: mockJson,
    });
    jest.clearAllMocks();
  });
  it('should call fetch and mapData whith correct values', async () => {
    const result = await LoadPages();
    expect(mockFetch).toHaveBeenCalledTimes(1);

    expect(mockFetch).toHaveBeenCalledWith(config.url + '/pages/');
    expect(mockJson).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledWith({ toJson: 1 });
    expect(result).toEqual({ mapped: 1 });
  });
  it('should call fetch with correct slug', async () => {
    await LoadPages('atenção testando');

    expect(mockFetch).toHaveBeenCalledWith(
      config.url + '/pages/?slug=atenotestando',
    );
  });
});
