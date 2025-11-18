import store from '@/app/store/store';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { Input } from '../../../../components/input';
import Modal from '../../../../components/modal';
import {
    create_attendance_thunk,
    get_attendance_thunk,
} from '../../../../redux/attendance-thunk';

export default function AddAttendanceSection() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        name: '',
        contact: '',
        student_id: '',
        course: '',
        date: '',
    });

    const [loading, setLoading] = useState(false);

    async function add_attendance(e) {
        e.preventDefault();

        try {
            setLoading(true);

            await store.dispatch(create_attendance_thunk(form));

            await store.dispatch(get_attendance_thunk());
            setOpen(false);
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="font-semiboldring-1 relative inline-flex items-center rounded-md bg-blue-500 px-3 py-2 text-sm text-white ring-gray-300 ring-inset hover:bg-blue-600 focus:z-10"
            >
                <FaPlus className="text-white-500 mr-1" />
                ADD NEW ATTENDANCE
            </button>

            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Add Attendance"
                width="max-w-lg"
            >
                <form action="" onSubmit={add_attendance}>
                    <div className="flex flex-col gap-3">
                        <div>
                            <label htmlFor="">Name</label>
                            <Input
                                label="Name"
                                name=""
                                value={form.name}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        name: e.target.value,
                                    })
                                }
                                type="text"
                            />
                        </div>
                        <div>
                            <label htmlFor="">Contact</label>
                            <Input
                                label="Contact"
                                name=""
                                value={form.contact}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        contact: e.target.value,
                                    })
                                }
                                type="number"
                            />
                        </div>
                        <div>
                            <label htmlFor="">School ID</label>
                            <Input
                                label="Student ID"
                                name=""
                                value={form.student_id}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        student_id: e.target.value,
                                    })
                                }
                                type="text"
                            />
                        </div>
                        <div>
                            <label htmlFor="">Course</label>
                            <Input
                                label="Course"
                                name=""
                                value={form.course}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        course: e.target.value,
                                    })
                                }
                                type="text"
                            />
                        </div>
                        <div>
                            <label htmlFor="">Date</label>
                            <Input
                                label="Date"
                                name=""
                                value={form.date}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        date: e.target.value,
                                    })
                                }
                                type="date"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 rounded-md bg-green-500 p-2 text-white hover:bg-green-600"
                            disabled={loading}
                        >
                            ADD ATTENDANCE
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
