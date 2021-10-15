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
import { IStore, ICategory } from "../../interfaces";

const ShopList: React.FC = () => {
  const { tableProps } = useTable<IStore>();

  // Get all the categories id from posts
  // const categoryIds: any = tableProps?.dataSource?.map(
  //   (item) => item.category.id ?? []
  // );

  // Get category name by re query using post category id
  // const { data: categoriesData, isLoading } = useMany<ICategory>({
  //   resource: "categories",
  //   ids: categoryIds,
  //   queryOptions: {
  //     enabled: categoryIds?.length > 0,
  //   },
  // });

  // Category filter
  // const { selectProps: categorySelectProps } = useSelect<ICategory>({
  //   resource: "categories",
  // });

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
            return tags.slice(0, 5).map((tag: any) => <TagField value={tag} />);
          }}
        />

        {/*<Table.Column*/}
        {/*  dataIndex="status"*/}
        {/*  title="Status"*/}
        {/*  render={(value) => <TagField value={value} />}*/}
        {/*/>*/}
        <Table.Column
          dataIndex="createdAt"
          title="createdAt"
          render={(value) => <DateField value={value} />}
        />

        {/*<Table.Column*/}
        {/*  dataIndex={["category", "id"]}*/}
        {/*  title="Category"*/}
        {/*  render={(value) => {*/}
        {/*    if (isLoading) {*/}
        {/*      return <TextField value="Loading...." />;*/}
        {/*    }*/}

        {/*    return (*/}
        {/*      <TextField*/}
        {/*        value={*/}
        {/*          categoriesData?.data.find((item) => item.id === value)?.title*/}
        {/*        }*/}
        {/*      />*/}
        {/*    );*/}
        {/*  }}*/}
        {/*  filterDropdown={(props) => (*/}
        {/*    <FilterDropdown {...props}>*/}
        {/*      <Select*/}
        {/*        style={{ minWidth: 200 }}*/}
        {/*        mode="multiple"*/}
        {/*        placeholder="Select Category"*/}
        {/*        {...categorySelectProps}*/}
        {/*      />*/}
        {/*    </FilterDropdown>*/}
        {/*  )}*/}
        {/*/>*/}

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

export default ShopList;
