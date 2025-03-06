import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IUser from "../../types/user";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67c82dad0acf98d070854ab8.mockapi.io/api/v1/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], string>({
      query: (name) => (name ? `users?name=${name}` : "users"),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
