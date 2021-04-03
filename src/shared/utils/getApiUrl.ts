import { environment } from '../../config/environment';

export const getApiUrl = (...params: string[]): string => params.reduce((p, c) => `${p}/${c}`, environment.apiUrl);
