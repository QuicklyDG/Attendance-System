import { useState } from 'react';
import { FaUsers } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import moment from 'moment';
import AddAttendanceSection from './add-attendance-section';
// import SearchSection from "./search-section";
// import AddSupplierComponent from "../components/add-supplier-component";
// import SupplierMenuSection from "./supplier-menu-section";
// import EditSupplierSection from "./edit-supplier-section";
// import DeleteSupplierSection from "./delete-supplier-section";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function AttendanceTableSection() {
    const { attendances } = useSelector((state) => state.attendances);

    const [openSupplier, setOpenSupplier] = useState(false);
    const [openSFilter, setOpenSFilter] = useState(false);

    console.log('attendances', attendances);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <FaUsers className="float-left mt-1 mr-1 text-blue-500" />
                    <h1 className="text-base font-semibold text-blue-500">
                        Attendance Table Section
                    </h1>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <span className="isolate inline-flex rounded-md shadow-xs">
                            <AddAttendanceSection />

                            {/* <button
                                type="button"
                                onClick={() => setOpenSFilter(true)}
                                className="relative -ml-px inline-flex items-center rounded-r-md bg-blue-100 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-blue-50 focus:z-10"
                            >
                                <FaFilter className="mr-1 text-blue-500" />
                                Filter Supplier
                            </button> */}
                        </span>
                        {/* <AddSupplierComponent
                            open={openSupplier}
                            setOpenSupplier={setOpenSupplier}
                        /> */}
                        {/* <FilterCustomersComponent
                            open={openSFilter}
                            setOpenSFilter={setOpenSFilter}
                        /> */}
                    </div>
                </div>
            </div>
            {/* <div className="mt-4 flex items-start justify-start">
                <SearchSection />
            </div> */}
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full border-separate border-spacing-0">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter sm:pl-6 lg:pl-8"
                                    >
                                        Student Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter sm:table-cell"
                                    >
                                        Student ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter sm:table-cell"
                                    >
                                        Contact No.
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter sm:table-cell"
                                    >
                                        Course
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter lg:table-cell"
                                    >
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(attendances) &&
                                attendances.length > 0 ? (
                                    attendances.map(
                                        (attendance, attendanceIdx) => (
                                            <tr key={attendanceIdx}>
                                                <td
                                                    className={classNames(
                                                        attendanceIdx !==
                                                            attendances.length -
                                                                1
                                                            ? 'border-b border-gray-200'
                                                            : '',
                                                        'border-b border-gray-200 py-4 pr-3 text-sm whitespace-nowrap text-gray-900 sm:pl-8',
                                                    )}
                                                >
                                                    {attendance.name}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        attendanceIdx !==
                                                            attendances.length -
                                                                1
                                                            ? 'border-b border-gray-200'
                                                            : '',
                                                        'border-b border-gray-200 py-4 pr-3 text-sm whitespace-nowrap text-gray-900 sm:pl-3',
                                                    )}
                                                >
                                                    {attendance.student_id ==
                                                        null ||
                                                    attendance.student_id === 0
                                                        ? '———'
                                                        : attendance.student_id}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        attendanceIdx !==
                                                            attendances.length -
                                                                1
                                                            ? 'border-b border-gray-200'
                                                            : '',
                                                        'border-b border-gray-200 py-4 pr-3 text-sm whitespace-nowrap text-gray-900 sm:pl-3',
                                                    )}
                                                >
                                                    {attendance.contact ==
                                                        null ||
                                                    attendance.contact === 0
                                                        ? '———'
                                                        : attendance.contact}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        attendanceIdx !==
                                                            attendances.length -
                                                                1
                                                            ? 'border-b border-gray-200'
                                                            : '',
                                                        'border-b border-gray-200 py-4 pr-3 text-sm whitespace-nowrap text-gray-900 sm:pl-3',
                                                    )}
                                                >
                                                    {attendance.course ==
                                                        null ||
                                                    attendance.course === 0
                                                        ? '———'
                                                        : attendance.course}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        attendanceIdx !==
                                                            attendances.length -
                                                                1
                                                            ? 'border-b border-gray-200'
                                                            : '',
                                                        'border-b border-gray-200 py-4 pr-3 text-sm whitespace-nowrap text-gray-900 sm:pl-3',
                                                    )}
                                                >
                                                    {moment(attendance.date).format('LL')}
                                                </td>
                                            </tr>
                                        ),
                                    )
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="py-4 text-center text-sm text-gray-500"
                                        >
                                            No data available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
