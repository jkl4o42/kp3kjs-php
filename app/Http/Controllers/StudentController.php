<?php

namespace App\Http\Controllers;

use Faker\Core\Number;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function getAll() {
        $students = Student::all()
        ->sortBy('fullName');

        $data = [];
        foreach ($students as $k => $v) {
            $data[] = $v;
        }

        return response()->json($data);
    }

    public function create(Request $request) {
        $student = new Student;
        $student->fullName = $request->fullName;
        $student->save();

        return response()->json($student);
    }

    public function update(Request $request) {
        $student = Student::where('id', $request->id)->get()[0];
        $student->fullName = $request->fullName;
        $student->save();

        return response()->json($student);
    }

    public function remove($id) {
        $student = Student::where('id', $id)->get()[0];
        $student->delete();

        return response()->json([
           'success' => true,
           'id' => intval($id)
        ]);
    }
}
