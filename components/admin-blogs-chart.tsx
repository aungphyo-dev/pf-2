'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const AdminBlogsChart = ({
    data,
}: {
    data: { id: number; views: number; slug: string }[];
}) => (
    <ResponsiveContainer
        width='100%'
        height={400}
        className='bg-slate-700 rounded-xl text-blue-500  pt-5'
    >
        <BarChart data={data}>
            <XAxis
                dataKey='id'
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
            />
            <YAxis
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => value}
            />
            <Bar
                dataKey='views'
                fill='currentColor'
                style={{ maxWidth: '20px' }}
                radius={[4, 4, 0, 0]}
            />
        </BarChart>
    </ResponsiveContainer>
);

export default AdminBlogsChart;
