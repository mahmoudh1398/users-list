import { Button, Space, message } from "antd";
import {
  UserEntityModel,
  UserInTableEntityModel,
} from "model/entity/user.model";
import DeleteConfirm from "./DeleteConfirm";
import UserManagementModal from "./UserManagementModal";
import { useState } from "react";
import { UserManagementFormValuesModel } from "model/etc/userManagementFormValues.model";
import { useUpdateUser } from "utils/hooks/users";

interface UserActionProps {
  record: UserInTableEntityModel;
}

const UserAction: React.FC<UserActionProps> = ({ record }) => {
  const { updateUserQuery, updateUserQueryPending } = useUpdateUser();

  const [open, setOpen] = useState(false);
  const [userDataForEdit, setUserDataForEdit] =
    useState<UserInTableEntityModel>();

  const onEdit = async (values: UserManagementFormValuesModel) => {
    try {
      const finalData: Partial<UserEntityModel> = {
        name: values.name,
        username: values.username,
        email: values.email,
        address: {
          street: values?.street ? values.street : "",
          suite: values?.suite ? values.suite : "",
          city: values?.city ? values.city : "",
          zipcode: values?.zipcode ? values.zipcode : "",
          geo: {
            lat: values?.lat ? values.lat : "",
            lng: values?.lng ? values.lng : "",
          },
        },
        phone: values?.phone ? values.phone : "",
        website: values?.website ? values.website : "",
        company: {
          name: values?.companyName ? values.companyName : "",
          catchPhrase: values?.catchPhrase ? values.catchPhrase : "",
          bs: values?.bs ? values.bs : "",
        },
      };
      if (userDataForEdit) {
        await updateUserQuery(userDataForEdit?.id, finalData);
      }
      message.success("User edited successfully.");
    } catch (error) {
      message.error("Edit User failed.");
    } finally {
      setOpen(false);
      setUserDataForEdit(undefined);
    }
  };

  return (
    <Space size="small" className="actions">
      <Button
        className="edit-btn"
        onClick={() => {
          setOpen(true);
          setUserDataForEdit(record);
        }}
      >
        Edit
      </Button>
      <DeleteConfirm id={record.id} />
      <UserManagementModal
        open={open}
        loading={updateUserQueryPending}
        submitButtonText="Edit"
        headingText="Edit a user"
        userDataForEdit={userDataForEdit}
        onSubmit={onEdit}
        onCancel={() => {
          setOpen(false);
          setUserDataForEdit(undefined);
        }}
      />
    </Space>
  );
};

export default UserAction;
