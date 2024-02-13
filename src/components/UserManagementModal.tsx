import React from "react";
import { Form, Input, Modal } from "antd";
import "assets/components/UserManagementModal.css";

interface Values {}

interface UserManagementModalProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const UserManagementModal: React.FC<UserManagementModalProps> = ({
  open,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      title="Create a new user"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      className="modal"
    >
      <Form
        form={form}
        layout="horizontal"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
        className="modal-form"
      >
        <Form.Item
          name="name"
          label="Name"
          validateTrigger="onChange"
          rules={[{ min: 3, required: true }]}
          className="form-item"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          validateTrigger="onChange"
          rules={[{ min: 3, required: true }]}
          className="form-item"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          validateTrigger="onChange"
          rules={[{ type: "email", required: true }]}
          className="form-item-email"
        >
          <Input />
        </Form.Item>
        <div className="address">
          <span className="address-label">Address:</span>
          <div className="address-details">
            <Form.Item name="street" label="Street" className="form-item">
              <Input />
            </Form.Item>
            <Form.Item name="suite" label="Suite" className="form-item">
              <Input />
            </Form.Item>
            <Form.Item name="city" label="City" className="form-item">
              <Input />
            </Form.Item>
            <Form.Item name="zipcode" label="Zipcode" className="form-item">
              <Input />
            </Form.Item>
          </div>
          <div className="geo">
            <span className="geo-label">Geo:</span>
            <div className="geo-details">
              <Form.Item name="lat" label="Lat" className="form-item">
                <Input />
              </Form.Item>
              <Form.Item name="lng" label="Lng" className="form-item">
                <Input />
              </Form.Item>
            </div>
          </div>
        </div>
        <Form.Item
          name="phone"
          label="Phone"
          validateTrigger="onChange"
          rules={[{ required: true }]}
          className="form-item"
        >
          <Input />
        </Form.Item>
        <Form.Item name="website" label="Website" className="form-item">
          <Input />
        </Form.Item>
        <div className="company">
          <span className="company-label">Company:</span>
          <div className="company-details">
            <Form.Item name="name" label="Name" className="form-item">
              <Input />
            </Form.Item>
            <Form.Item
              name="catchPhrase"
              label="CatchPhrase"
              className="form-item"
            >
              <Input />
            </Form.Item>
            <Form.Item name="bs" label="Bs" className="form-item">
              <Input />
            </Form.Item>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default UserManagementModal;
