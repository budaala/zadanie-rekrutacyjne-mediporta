import Pagination from "../Components/Pagination/Pagination";

export default { 
    title: 'Components/Pagination',
    component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Page0Rows5 = Template.bind({});
Page0Rows5.args = {
    page: 0,
    rowsPerPage: 5,
    handleChangePage: () => {},
    handleChangeRowsPerPage: () => {},
    numOfTags: 10,
};

export const Page1Rows10 = Template.bind({});
Page1Rows10.args = {
    page: 1,
    rowsPerPage: 10,
    handleChangePage: () => {},
    handleChangeRowsPerPage: () => {},
    numOfTags: 20,
};