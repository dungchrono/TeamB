<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
route::get('/product/create',function (){
    return view('products.product');
    });
    Route::post('product/create',[App\Http\Controllers\ProductController::class,'store']);
    Route::get('product/index',[App\Http\Controllers\ProductController::class,'index']);
    Route::get('product/update/{id}',[App\Http\Controllers\ProductController::class,'edit']);
    Route::post('product/update/{id}',[App\Http\Controllers\ProductController::class,'update']);