/* eslint-disable camelcase */
type ErrorResponse = { code: number; message: string; field?: string };

type ErrorFormResponse = { field: string; code: string; message: string };

type ErrorCodeResponse = {
  code: string;
  title: string;
}

type APIPaginationResponse<T> = {
  results: T;
  page: number;
  total_pages: number;
  total_results: number;
  dates?: {
    maximum: string;
    minimum: string;
  }
}

type APIResponse<T> = {
  data: T;
  message: string;
};

interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
