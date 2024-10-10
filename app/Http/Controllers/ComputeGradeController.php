<?php

namespace App\Http\Controllers;


use App\Imports\ComputeGradeImport;
use App\Models\ComputeGrade;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade\Pdf;

class ComputeGradeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $grades = ComputeGrade::all();
        return view('compute_grades.index')->with('grades', $grades);
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
    public function update(Request $request, $id)
    {
        $computeGrade = ComputeGrade::find($id);

        if (!$computeGrade) {
            return response()->json(['message' => 'Record not found'], 404);
        }

        $computeGrade->update([
            'written' => $request->input('written_total_score', 0),
            'performance' => $request->input('performance_total_score', 0),
            'midterm' => $request->input('midterm_total_score', 0),
            'finalexam' => $request->input('finalexam_total_score', 0),
            'total_weighted_score' => $request->input('total_weighted_score'),
            'final_numerical_grade' => $request->input('final_numerical_grade'),
            'remarks' => $request->input('remarks')
        ]);

        return response()->json(['message' => 'Record updated successfully', 'data' => $computeGrade]);
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ComputeGrade  $computeGrade
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $grade = ComputeGrade::find($id);

        if (!$grade) {
            return response()->json(['message' => 'Grade not found.'], 404);
        }

        $grade->delete();
        return response()->json(['message' => 'Grade deleted successfully.'], 200);
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

    public function print_pdf_classrecord()
    {
        $grades = ComputeGrade::all();

        $semester = '2nd semester';
        $course_year = 'BSEE III';
        $course_code = 'STS';
        $number_of_units = '3';
        $co_requisite = 'None';
        $academic_year = '2020-2021';
        $section = 'FGN01';
        $course_description = 'Science';
        $contact_hours = '3';
        $prerequisite = 'None';

        $pdf = Pdf::loadView('printgradepdf.printpdfgrade', [
            'grades' => $grades,
            'semester' => $semester,
            'course_year' => $course_year,
            'course_code' => $course_code,
            'number_of_units' => $number_of_units,
            'co_requisite' => $co_requisite,
            'academic_year' => $academic_year,
            'section' => $section,
            'course_description' => $course_description,
            'contact_hours' => $contact_hours,
            'prerequisite' => $prerequisite,
        ]);

        $pdf->getDomPDF()->setHttpContext(
            stream_context_create([
                'ssl' => [
                    'allow_self_signed' => TRUE,
                    'verify_peer' => FALSE,
                    'verify_peer_name' => FALSE,
                ]
            ])
        );

        $pdf->setPaper('A4', 'landscape');

        return $pdf->stream('class_record.pdf');
    }




    public function delete_classrecord(Request $request)
    {
        $classrecord = ComputeGrade::find($request->id);
        $classrecord->delete();
        return response()->json($classrecord, 200);
    }
}