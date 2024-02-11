import { http } from 'msw';
import get from './api/task';

export const handlers = [http.get('/api/task', get)];
