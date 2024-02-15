import { Space } from "antd";
import { UserInTableEntityModel } from "model/entity/user.model";
import DeleteConfirm from "./DeleteConfirm";

interface UserActionProps {
  record: UserInTableEntityModel;
}

const UserAction: React.FC<UserActionProps> = ({ record }) => {
  const handleEditUser = () => {};

  return (
    <Space size="small" className="actions">
      <button type="button" onClick={handleEditUser}>
        Edit
      </button>
      <DeleteConfirm id={record.id} />
    </Space>
  );
};

export default UserAction;
