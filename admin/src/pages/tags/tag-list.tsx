import React from "react";
import {
  DateField,
  List,
  Table,
  useTable,
  ShowButton,
  Space,
  DeleteButton,
  EditButton,
} from "@pankod/refine";
import { IStore, ITag } from "../../interfaces";

const TagList: React.FC = () => {
  const { tableProps } = useTable<ITag>();

  return (
    <List>
      <Table {...tableProps} rowKey="id">

        <Table.Column dataIndex="id" title="ID" />

        <Table.Column dataIndex="title" title="Title" />

        <Table.Column
          dataIndex="createdAt"
          title="createdAt"
          render={(value) => <DateField value={value} />}
        />

        <Table.Column
          dataIndex="updatedAt"
          title="updatedAt"
          render={(value) => <DateField value={value} />}
        />

        <Table.Column<IStore>
          title="Actions"
          dataIndex="actions"
          render={(_text, record): React.ReactNode => {
            return (
              <Space>
                <ShowButton size="small" recordItemId={record?.id} hideText />
                <EditButton size="small" recordItemId={record?.id} hideText />
                <DeleteButton size="small" recordItemId={record?.id} hideText />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
};

export default TagList;
