import * as _api from './api-functions';

export const api = (_api as unknown) as Record<string, ApiFunction<unknown[], unknown>>;
