import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_attendance_thunk } from '../../../redux/attendance-thunk';
import Layout from '../layout';
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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_attendance_thunk());
    }, [dispatch]);

    return (
        <Layout breadcrumbs={breadcrumbs}>
            <Head title="Attendance" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <AttendanceTableSection />
            </div>
        </Layout>
    );
}
