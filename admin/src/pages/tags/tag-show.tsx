import React from "react";
import {
  Show,
  useShow,
  Typography,
} from "@pankod/refine";

const { Title, Text } = Typography;

type Props = {};

const TagShow: React.FC<Props> = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>createdAt</Title>
      <Text>{record?.createdAt}</Text>

      <Title level={5}>updatedAt</Title>
      <Text>{record?.updatedAt}</Text>
    </Show>
  );
};

export default TagShow;
