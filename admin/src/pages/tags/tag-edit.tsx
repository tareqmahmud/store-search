import React from "react";
import { Edit, Form, Input, useForm } from "@pankod/refine";
import { IStore } from "../../interfaces";

type Props = {};

const TagEdit: React.FC<Props> = () => {
  const { formProps, saveButtonProps } = useForm<IStore>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};

export default TagEdit;
