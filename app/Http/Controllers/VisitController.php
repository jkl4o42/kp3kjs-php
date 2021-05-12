<?php

namespace App\Http\Controllers;

use App\Models\Visit;
use Illuminate\Http\Request;

class VisitController extends Controller
{
    public function getAll() {
        $visits = Visit::all();
        return response()->json($visits);
    }

    public function getForWeek(Request $request) {
        $dateArr = json_decode($request->dates);

        $visits = Visit::whereIn('date', $dateArr)->get();

        return response()->json($visits);
    }

    public function create(Request $request) {
        $visit = new Visit;
        $visit->studentId = $request->studentId;
        $visit->lectureId = $request->lectureId;
        $visit->date = $request->date;
        $visit->visited = $request->visited;
        $visit->save();

        return response()->json($visit);
    }

    public function remove($id) {
        $visit = Visit::where('id', $id)->get()[0];
        $visit->delete();

        return response()->json([
            'success' => true,
            'id' => intval($id)
        ]);
    }
}
