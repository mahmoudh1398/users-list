import React, { useEffect } from "react";
import { Form, Input, Modal } from "antd";
import "assets/styles/components/UserManagementModal.css";
import { UserManagementFormValuesModel } from "model/etc/user-management-form-values.model";
import { UserInTableEntityModel } from "model/entity/user.model";

interface UserManagementModalProps {
  open: boolean;
  onSubmit: (values: UserManagementFormValuesModel) => void;
  onCancel: () => void;
  loading: boolean;
  headingText: string;
  submitButtonText: string;
  userDataForEdit?: UserInTableEntityModel;
}

const UserManagementModal: React.FC<UserManagementModalProps> = ({
  open,
  onSubmit,
  onCancel,
  loading,
  headingText,
  submitButtonText,
  userDataForEdit,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (userDataForEdit) {
      form.setFieldValue("name", userDataForEdit.name);
      form.setFieldValue("username", userDataForEdit.username);
      form.setFieldValue("email", userDataForEdit.email);
      form.setFieldValue("street", userDataForEdit.address.street);
      form.setFieldValue("suite", userDataForEdit.address.suite);
      form.setFieldValue("city", userDataForEdit.address.city);
      form.setFieldValue("zipcode", userDataForEdit.address.zipcode);
      form.setFieldValue("lat", userDataForEdit.address.geo.lat);
      form.setFieldValue("lng", userDataForEdit.address.geo.lng);
      form.setFieldValue("phone", userDataForEdit.phone);
      form.setFieldValue("website", userDataForEdit.website);
      form.setFieldValue("companyName", userDataForEdit.company.name);
      form.setFieldValue("catchPhrase", userDataForEdit.company.catchPhrase);
      form.setFieldValue("bs", userDataForEdit.company.bs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDataForEdit]);

  return (
    <Modal
      open={open}
      title={headingText}
      okText={loading ? "Loading..." : submitButtonText}
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onSubmit(values);
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
            <Form.Item name="companyName" label="Name" className="form-item">
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
