import React from "react";
import {
  Show,
  useOne,
  useShow,
  Typography,
  Tag,
  TagField,
} from "@pankod/refine";
import { ICategory, IStore } from "../../interfaces";

const { Title, Text } = Typography;

type Props = {};

const ShopShow: React.FC<Props> = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  // const { data: categoryData } = useOne<ICategory>({
  //   resource: "categories",
  //   id: record?.category?.id || "",
  //   queryOptions: {
  //     enabled: !!record?.category?.id,
  //   },
  // });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Email</Title>
      <Text>{record?.email}</Text>

      <Title level={5}>Phone</Title>
      <Text>{record?.phone}</Text>

      <Title level={5}>Address</Title>
      <Text>{record?.address}</Text>

      <Title level={5}>Tags</Title>
      {record?.tags?.map((tag: any) => (
        <TagField value={tag} />
      ))}
    </Show>
  );
};

export default ShopShow;
