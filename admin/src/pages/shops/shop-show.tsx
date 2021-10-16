import React from "react";
import {
  Show,
  useOne,
  useShow,
  Typography,
  Tag,
  TagField,
} from "@pankod/refine";
import { ICategory, IStore, ITag } from "../../interfaces";

const { Title, Text } = Typography;

type Props = {};

const ShopShow: React.FC<Props> = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

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
      {record?.tags?.map((tag: ITag) => (
        <TagField value={tag.title} />
      ))}
    </Show>
  );
};

export default ShopShow;
