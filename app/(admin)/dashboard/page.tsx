import { auth } from '@/auth';

const Dashboard = async () => {
    const session = await auth();
    return <div>Hello</div>;
};

export default Dashboard;
