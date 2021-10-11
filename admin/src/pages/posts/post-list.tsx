import React from "react";
import {
  DateField,
  List,
  Table,
  TagField,
  useTable,
  useMany,
  TextField,
  FilterDropdown,
  Select,
  useSelect,
  ShowButton,
  Space,
  EditButton,
  DeleteButton,
} from "@pankod/refine";
import { IPost, ICategory } from "../../interfaces";

export const PostList: React.FC = () => {
  const { tableProps } = useTable<IPost>();

  // Get all the categories id from posts
  const categoryIds: any = tableProps?.dataSource?.map(
    (item) => item.category.id ?? []
  );

  // Get category name by re query using post category id
  const { data: categoriesData, isLoading } = useMany<ICategory>({
    resource: "categories",
    ids: categoryIds,
    queryOptions: {
      enabled: categoryIds?.length > 0,
    },
  });

  // Category filter
  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "categories",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="title" title="Title" />
        <Table.Column
          dataIndex="status"
          title="Status"
          render={(value) => <TagField value={value} />}
        />
        <Table.Column
          dataIndex="createdAt"
          title="createdAt"
          render={(value) => <DateField value={value} />}
        />

        <Table.Column
          dataIndex={["category", "id"]}
          title="Category"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading...." />;
            }

            return (
              <TextField
                value={
                  categoriesData?.data.find((item) => item.id === value)?.title
                }
              />
            );
          }}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder="Select Category"
                {...categorySelectProps}
              />
            </FilterDropdown>
          )}
        />

        <Table.Column<IPost>
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
