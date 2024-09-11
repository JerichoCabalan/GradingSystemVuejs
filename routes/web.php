<?php

use Illuminate\Support\Facades\Route;

Route::get('{any}',function (){
    return view('vue');
})->where('any', '.*')->where('any', '^(?!api).*');

Route::group(['prefix'=>'api/v1'],function (){
    Route::post('/register',[\App\Http\Controllers\AuthController::class, 'registerAuth']);
    Route::post('/login',[\App\Http\Controllers\AuthController::class, 'loginAuth']);
    Route::get('/auth/check',[\App\Http\Controllers\AuthController::class, 'checkAuth']);
    Route::get('/conform-mail/{key}',[\App\Http\Controllers\AuthController::class, 'conformMail']);
    Route::post('/forgot_password',[\App\Http\Controllers\AuthController::class, 'forgotPassword']);
    Route::get('/reset_password/{key}',[\App\Http\Controllers\AuthController::class, 'resetPasswordEmail']);
    Route::post('/reset_password',[\App\Http\Controllers\AuthController::class, 'resetPassword']);
});
Route::group(['prefix'=>'api/v1','middleware'=>'auth'],function (){
    Route::get('/get/user/info',[\App\Http\Controllers\UserController::class, 'getUserInfo']);
    Route::get('/logout',[\App\Http\Controllers\AuthController::class, 'logout']);
    Route::get('/profile/info', [\App\Http\Controllers\UserController::class, 'getProfileInfo']);
    Route::get('/sendVerifyMail',[\App\Http\Controllers\AuthController::class,'SendVerifyMail']);
    Route::get('/projects', [\App\Http\Controllers\ProjectController::class, 'getProject']);
    Route::post('/add/project', [\App\Http\Controllers\ProjectController::class, 'addProject']);
    Route::get('/get/project/{id}', [\App\Http\Controllers\ProjectController::class, 'getSingleProject']);
    Route::put('/update/project', [\App\Http\Controllers\ProjectController::class, 'updateProject']);
    Route::delete('/delete/project/{id}', [\App\Http\Controllers\ProjectController::class, 'deleteProject']);

    Route::get('/profile', [\App\Http\Controllers\UserController::class, 'getProfile']);
    Route::post('/update/profile/pic',[\App\Http\Controllers\UserController::class, 'updateProfilePic']);
    Route::put('/update/profile', [\App\Http\Controllers\UserController::class, 'updateProfileInformation']);

 
    Route::get('/notification', [\App\Http\Controllers\UserController::class, 'getNotification']);
    Route::post('/change_password', [\App\Http\Controllers\UserController::class, 'changePassword']);
    Route::post('/update/notification', [\App\Http\Controllers\UserController::class, 'updateNotification']);


    Route::get('/compute_grades', [\App\Http\Controllers\ComputeGradeController::class, 'compute_grades']);
    Route::get('/grades', [\App\Http\Controllers\ComputeGradeController::class, 'getGrades']);

    Route::post('/import_excel_classrecord', [\App\Http\Controllers\ComputeGradeController::class, 'import_excel_classrecord']);




});