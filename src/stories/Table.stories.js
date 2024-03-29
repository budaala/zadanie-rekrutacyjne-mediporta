import BasicTable from "../Components/Table/Table";

export default { 
    title: 'Components/Table',
    component: BasicTable,
};

const Template = (args) => <BasicTable {...args} />;

export const TagsTable = Template.bind({});
TagsTable.args = {
    tags: [
        {name: 'javascript', count: 1},
        {name: 'python', count: 9},
        {name: 'java', count: 8},
        {name: 'c#', count: 7},
        {name: 'php', count: 6},
        {name: 'android', count: 5},
        {name: 'html', count: 4},
        {name: 'jquery', count: 3},
        {name: 'c++', count: 2},
        {name: 'css', count: 10},
    ],
    page: 0,
    rowsPerPage: 10,
};