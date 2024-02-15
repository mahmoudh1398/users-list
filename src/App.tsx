import { useState } from "react";
import { Button, message } from "antd";
import "assets/styles/pages/app.css";
import UserManagementModal from "components/UserManagementModal";
import Users from "components/Users";
import { UserManagementFormValuesModel } from "model/etc/userManagementFormValues.model";
import { UserEntityModel } from "model/entity/user.model";
import { useCreateUser } from "utils/hooks/users";

const App = () => {
  const [open, setOpen] = useState(false);

  const { createUserQuery, createUserQueryPending } = useCreateUser();

  const onCreate = async (values: UserManagementFormValuesModel) => {
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
      await createUserQuery(finalData);
      message.success("User created successfully.");
    } catch (error) {
      message.error("Create User failed.");
    } finally {
      setOpen(false);
    }
  };

  return (
    <div className="app">
      <Button
        type="primary"
        className="management-user-btn"
        onClick={() => {
          setOpen(true);
        }}
      >
        Management User
      </Button>
      <Users />
      <UserManagementModal
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
        createLoading={createUserQueryPending}
      />
    </div>
  );
};

export default App;
