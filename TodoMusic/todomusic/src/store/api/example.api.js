import { api } from "./api";

export const exampleApi = api.injectEndpoints({
  endpoints: builder => ({
    createExample: builder.mutation({
      query: example => ({
        body: example,
        url: "/",
        method: "POST",
      }),
      invalidatesTags: () => [{
        type: 'Example',
      }]
    }),
  }),
});

export const {useCreateExampleMutation} = exampleApi;
