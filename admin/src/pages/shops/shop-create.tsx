import React from "react";
import {
  Create,
  Form,
  Input,
  useForm,
  Upload,
  Select,
  useSelect, getValueFromEvent, useApiUrl
} from "@pankod/refine";
import { IStore, ITag } from "../../interfaces";

type Props = {};

const ShopCreate: React.FC<Props> = () => {
  const { formProps, saveButtonProps } = useForm<IStore>();

  const { selectProps } = useSelect<ITag>({
    resource: "tags",
  });

  const apiUrl = useApiUrl();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Address" name="address">
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Image">
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="file"
              action={`${apiUrl}/shops/upload`}
              listType="picture"
            >
              <p className="ant-upload-text">
                Drag & drop a file in this area
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item label="Tags" name="tags">
          <Select {...selectProps} mode="tags" />
        </Form.Item>
      </Form>
    </Create>
  );
};

export default ShopCreate;
