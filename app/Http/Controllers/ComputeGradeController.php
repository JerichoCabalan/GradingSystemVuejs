<?php

namespace App\Http\Controllers;


use App\Imports\ComputeGradeImport;
use App\Models\ComputeGrade;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ComputeGradeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ComputeGrade  $computeGrade
     * @return \Illuminate\Http\Response
     */
    public function show(ComputeGrade $computeGrade)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ComputeGrade  $computeGrade
     * @return \Illuminate\Http\Response
     */
    public function edit(ComputeGrade $computeGrade)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ComputeGrade  $computeGrade
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ComputeGrade $computeGrade)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ComputeGrade  $computeGrade
     * @return \Illuminate\Http\Response
     */
    public function destroy(ComputeGrade $computeGrade)
    {
        //
    }


    public function import_excel_classrecord(Request $request)
    {
        $file = $request->file('file');

        $import = new ComputeGradeImport();

        Excel::import($import, $file);

        $message = $import->getMessage();

        return response()->json($message);
    }

    public function getGrades()
    {
        $grades = ComputeGrade::all(); 
        return response()->json($grades, 200); 
    }
}