import React from "react";
import { Show, useOne, useShow, Typography, Tag } from "@pankod/refine";
import { ICategory, IStore } from "../../interfaces";

const { Title, Text } = Typography;

type Props = {};

const StoreShow: React.FC<Props> = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: categoryData } = useOne<ICategory>({
    resource: "categories",
    id: record?.category?.id || "",
    queryOptions: {
      enabled: !!record?.category?.id,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Status</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text>

      <Title level={5}>Category</Title>
      <Text>{categoryData?.data?.title}</Text>
    </Show>
  );
};

export default StoreShow;
