<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lecture;

class LectureController extends Controller
{
    public function getAll() {
        $lectures = Lecture::all()
            ->sortBy('name');

        $data = [];
        foreach ($lectures as $k => $v) {
            $data[] = $v;
        }

        return response()->json($data);
    }

    public function create(Request  $request) {
        $lecture = new Lecture;
        $lecture->name = $request->name;
        $lecture->save();
        return response()->json($lecture);
    }

    public function update(Request $request) {
        $lecture = Lecture::where('id', $request->id)->get()[0];
        $lecture->name = $request->name;
        $lecture->save();

        return response()->json($lecture);
    }

    public function remove($id) {
        $lecture = Lecture::where('id', $id)->get()[0];
        $lecture->delete();

        return response()->json([
            'success' => true,
            'id' => intval($id)
        ]);
    }
}
