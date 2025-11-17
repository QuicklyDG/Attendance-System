import axios from "axios"

export function get_attendance_service() {
    try {
        const result = axios.get('/api/attendance')
        return result
    } catch (error) {

    }
}

export async function create_attendance_service(data) {
    try {
        const result = await axios.post('/api/attendance', data);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
