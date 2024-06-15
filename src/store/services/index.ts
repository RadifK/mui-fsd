import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ITag {}

export interface PostState {
  id: string;
  title: string;
  text: string;
  tags: ITag[];
  viewsCount: number;
  userId: string;
  imageUrl: string;
}

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4444" }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<PostState[], void>({
      query: () => `/posts`,
    }),
  }),
});

export const { useFetchPostsQuery } = postsApi;
