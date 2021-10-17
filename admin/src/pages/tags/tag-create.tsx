import React from "react";
import { Create, Form, Input, useForm } from "@pankod/refine";
import { IStore } from "../../interfaces";

type Props = {};

const TagCreate: React.FC<Props> = () => {
  const { formProps, saveButtonProps } = useForm<IStore>();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};

export default TagCreate;
