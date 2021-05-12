<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\StudentController;
use \App\Http\Controllers\LectureController;
use \App\Http\Controllers\ScheduleController;
use \App\Http\Controllers\VisitController;

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

//  Students
Route::get('/students', [StudentController::class, 'getAll']);
Route::post('/students', [StudentController::class, 'create']);
Route::post('/students/update', [StudentController::class, 'update']);
Route::delete('/students/{id}', [StudentController::class, 'remove']);

//  Lectures
Route::get('/lectures', [LectureController::class, 'getAll']);
Route::post('/lectures', [LectureController::class, 'create']);
Route::post('/lectures/update', [LectureController::class, 'update']);
Route::delete('/lectures/{id}', [LectureController::class, 'remove']);

// Schedule
Route::get('/schedules', [ScheduleController::class, 'getAll']);
Route::post('/schedules', [ScheduleController::class, 'create']);
Route::delete('/schedules/{id}', [ScheduleController::class, 'remove']);

//  Visits
Route::get('/visits', [VisitController::class, 'getAll']);
Route::post('/visits/for_week', [VisitController::class, 'getForWeek']);
Route::post('/visits', [VisitController::class, 'create']);
Route::delete('/visits/{id}', [VisitController::class, 'remove']);
