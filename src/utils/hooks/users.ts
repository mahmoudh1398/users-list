import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { USERS_QUERY_KEY } from "enum/users-query-key.enum";
import { UserEntityModel } from "model/entity/user.model";
import { createUser, getUsers, updateUser, deleteUser } from "queries/users";

export const useGetUsers = () => {
  return useQuery({
    queryKey: [USERS_QUERY_KEY.users],
    queryFn: getUsers,
    staleTime: 30_000,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [USERS_QUERY_KEY.users] });
    },
  });

  return {
    createUserQuery: async (finalData: Partial<UserEntityModel>) =>
      await createMutation.mutateAsync(finalData),
    createUserQueryPending: createMutation.isPending,
  };
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [USERS_QUERY_KEY.users] });
    },
  });

  return {
    updateUserQuery: async (id: number, finalData: Partial<UserEntityModel>) =>
      await updateMutation.mutateAsync({ id: id, payload: finalData }),
    updateUserQueryPending: updateMutation.isPending,
  };
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [USERS_QUERY_KEY.users] });
    },
  });

  return {
    deleteUserQuery: async (id: number) => await deleteMutation.mutateAsync(id),
    deleteUserQueryPending: deleteMutation.isPending,
  };
};
