import { useState } from "react";
import { Button } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "assets/styles/pages/app.css";
import UserManagementModal from "components/UserManagementModal";
import Users from "components/Users";
import { UserManagementFormValuesModel } from "model/etc/userManagementFormValues.model";
import { UserEntityModel } from "model/entity/user.model";
import { createUser } from "queries/users";
import { USERS_QUERY_KEY } from "enum/users-query-key.enum";

const App = () => {
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (values: Partial<UserEntityModel>) => createUser(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USERS_QUERY_KEY.users] });
    },
  });

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
      await createMutation.mutateAsync(finalData);
    } catch (error) {
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
        createLoading={createMutation.isPending}
      />
    </div>
  );
};

export default App;
