import StatusInfo from "../Components/StatusInfo/StatusInfo"

export default {
    title: 'Components/StatusInfo',
    component: StatusInfo,
}

const Template = (args) => <StatusInfo {...args} />;

export const Loading = Template.bind({});
Loading.args = {
    status: "Loading",
};

export const NetworkError = Template.bind({});
NetworkError.args = {
    status: "Network Error",
};