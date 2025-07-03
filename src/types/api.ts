// API types for HTTP requests and responses

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiRequest<T = any> {
  method: HttpMethod;
  url: string;
  data?: T;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface ApiEndpoint {
  path: string;
  method: HttpMethod;
  description?: string;
}
