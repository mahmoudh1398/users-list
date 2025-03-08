import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUser } from "@/types/user.type";

export const usersApiSlice = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67c82dad0acf98d070854ab8.mockapi.io/api/v1/",
  }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<TUser[], string>({
      query: (name) => (name ? `users?name=${name}` : "users"),
    }),
  }),
});

export const { useFetchUsersQuery } = usersApiSlice;
