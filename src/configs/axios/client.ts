import { env } from '@/constants/env';
import axios from 'axios';

import * as qs from 'qs';

export const axiosClient = axios.create({
  baseURL: `${env.NEXT_PUBLIC_API_BASE_URL}/api/v1`,
  withCredentials: true,
  paramsSerializer: {
    serialize: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat', encode: false });
    },
  },
});
