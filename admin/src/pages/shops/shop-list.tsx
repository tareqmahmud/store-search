import React from "react";
import {
  DateField,
  List,
  Table,
  TagField,
  useTable,
  ShowButton,
  Space,
  DeleteButton,
} from "@pankod/refine";
import { IStore, ITag } from "../../interfaces";

const ShopList: React.FC = () => {
  const { tableProps } = useTable<IStore>();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="email" title="Email" />
        <Table.Column dataIndex="phone" title="Phone" />
        <Table.Column dataIndex="address" title="Address" />
        <Table.Column
          dataIndex="tags"
          title="Tags"
          render={(tags) => {
            return tags
              .slice(0, 5)
              .map((tag: ITag) => <TagField value={tag.title} />);
          }}
        />

        <Table.Column
          dataIndex="createdAt"
          title="createdAt"
          render={(value) => <DateField value={value} />}
        />

        <Table.Column<IStore>
          title="Actions"
          dataIndex="actions"
          render={(_text, record): React.ReactNode => {
            return (
              <Space>
                <ShowButton size="small" recordItemId={record?.id} hideText />
                <DeleteButton size="small" recordItemId={record?.id} hideText />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
};

export default ShopList;
