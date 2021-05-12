<?php

namespace App\Http\Controllers;

use App\Models\Lecture;
use Illuminate\Http\Request;
use App\Models\Schedule;

class ScheduleController extends Controller
{
    public function getAll() {
        $schedule = Schedule::all();

        foreach ($schedule as $key => $value) {
            $lecture = Lecture::where('id', $value->lectureId)->get()[0];
            $value['lecture'] = $lecture;
        }

        return response()->json($schedule);
    }

    public function create(Request $request) {
        $schedule = new Schedule;
        $schedule->day = strtolower($request->day);
        $schedule->lectureId = intval($request->lectureId);
        $schedule->sequenceNumber = intval($request->sequenceNumber);
        $schedule->save();

        $schedule['lecture'] = Lecture::where('id', $request->lectureId)->get()[0];

        return response()->json($schedule);
    }

    public function remove($id) {
        $schedule = Schedule::where('id', $id)->get()[0];
        $schedule->delete();

        return response()->json([
            'success' => true,
            'id' => intval($id)
        ]);
    }
}
