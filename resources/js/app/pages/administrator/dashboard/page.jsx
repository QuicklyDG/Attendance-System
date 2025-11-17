import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '../../../components/placeholder-pattern';
import Layout from '../layout';
import { Skeleton } from '../../../components/skeleton';
import AttendanceTableSection from './section/attendance-table-section';

const breadcrumbs = [
    {
        title: 'Attendance',
        href: '/administrator/dashboard',
    },
    // {
    //     title: 'Users',
    //     href: '/administrator/users',
    // },
];
export default function Page() {
    return (
        <Layout breadcrumbs={breadcrumbs}>
            <Head title="Attendance" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <AttendanceTableSection />
            </div>
        </Layout>
    );
}
