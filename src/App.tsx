import { useState } from "react";
import { Button } from "antd";
import UserManagementModal from "components/UserManagementModal";
import "assets/pages/app.css";
import UsersList from "components/UsersList";

const App = () => {
  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  return (
    <div className="app-wrapper">
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Management User
      </Button>
      <UsersList />
      <UserManagementModal
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default App;
