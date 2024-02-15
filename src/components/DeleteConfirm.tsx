import React from "react";
import { Button, message, Popconfirm } from "antd";
import { useDeleteUser } from "utils/hooks/users";

interface DeleteConfirmProps {
  id: number;
}

const DeleteConfirm: React.FC<DeleteConfirmProps> = ({ id }) => {
  const { deleteUserQuery, deleteUserQueryPending } = useDeleteUser();

  const confirm = () => {
    try {
      deleteUserQuery(id);
      message.success("User deleted successfully.");
    } catch (error) {
      message.error("User deleted failed.");
    }
  };

  const cancel = () => {
    message.error("User delete canceled.");
    return;
  };

  return (
    <Popconfirm
      title="Delete the user"
      description="Are you sure to delete this user?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button danger disabled={deleteUserQueryPending}>
        {deleteUserQueryPending ? "Pending..." : "Delete"}
      </Button>
    </Popconfirm>
  );
};

export default DeleteConfirm;
