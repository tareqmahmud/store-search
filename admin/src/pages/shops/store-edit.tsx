import React from "react";
import { Edit, Form, Input, Select, useForm, useSelect } from "@pankod/refine";
import { IStore } from "../../interfaces";

type Props = {};

const StoreEdit: React.FC<Props> = () => {
  // const { formProps, saveButtonProps, queryResult } = useForm<IStore>();
  //
  // const { selectProps: categorySelectProps } = useSelect<IStore>({
  //   resource: "categories",
  //   defaultValue: queryResult?.data?.data?.category?.id,
  // });
  //
  // return (
  //   <Edit saveButtonProps={saveButtonProps}>
  //     <Form {...formProps} layout="vertical">
  //       <Form.Item label="Title" name="title">
  //         <Input />
  //       </Form.Item>
  //
  //       <Form.Item label="Status" name="status">
  //         <Select
  //           options={[
  //             {
  //               label: "Published",
  //               value: "published",
  //             },
  //
  //             {
  //               label: "Draft",
  //               value: "draft",
  //             },
  //
  //             {
  //               label: "Rejected",
  //               value: "rejected",
  //             },
  //           ]}
  //         />
  //       </Form.Item>
  //
  //       <Form.Item label="Category" name={["category", "id"]}>
  //         <Select {...categorySelectProps} />
  //       </Form.Item>
  //     </Form>
  //   </Edit>
  // );
  return <h2>Edit</h2>;
};

export default StoreEdit;
