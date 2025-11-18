<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    public function index()
    {
        $attendance = Attendance::orderBy('id', 'asc')
            ->get();
        return response()->json([
            'result' => $attendance
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'contact' => 'required',
            'student_id' => 'required',
            'course' => 'required|string',
            'date' => 'required|date',
        ]);

        $attendance = Attendance::create($validated);

        return response()->json([
            'message' => 'Attendance saved successfully',
            'data' => $attendance,
        ], 201);
    }
}
