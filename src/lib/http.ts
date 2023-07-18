import axios from "axios";

export interface PaginatedResponse<T> {
  count: number;
  next: string;
  previous: string | null;
  results: T[];
}

export const http = axios.create({
  baseURL: "https://swapi.dev/api/",
});
