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
    public function index( Request $request)
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
    
        $written_total_score = $request->input('written_total_score', 0);
        $performance_total_score = $request->input('performance_total_score', 0);
        $midterm_total_score = $request->input('midterm_total_score', 0);
        $finalexam_total_score = $request->input('finalexam_total_score', 0);
    
        $max_written_score = 10;
        $max_performance_score = 40;
        $max_midterm_score = 100;
        $max_finalexam_score = 100;
    
        $weighted_written = ($written_total_score / $max_written_score) * 15;
        $weighted_performance = ($performance_total_score / $max_performance_score) * 25;
        $weighted_midterm = ($midterm_total_score / $max_midterm_score) * 30;
        $weighted_finalexam = ($finalexam_total_score / $max_finalexam_score) * 30;
    
        $total_weighted_score = $weighted_written + $weighted_performance + $weighted_midterm + $weighted_finalexam;
    
        $final_numerical_grade = 5.00;
        $remarks = 'Failed';
    
        if ($total_weighted_score >= 94.44) {
            $final_numerical_grade = 1.00;
            $remarks = 'Passed';
        } elseif ($total_weighted_score >= 88.89) {
            $final_numerical_grade = 1.25;
            $remarks = 'Passed';
        } elseif ($total_weighted_score >= 83.33) {
            $final_numerical_grade = 1.50;
            $remarks = 'Passed';
        } elseif ($total_weighted_score >= 77.78) {
            $final_numerical_grade = 1.75;
            $remarks = 'Passed';
        } elseif ($total_weighted_score >= 72.22) {
            $final_numerical_grade = 2.00;
            $remarks = 'Passed';
        } elseif ($total_weighted_score >= 66.67) {
            $final_numerical_grade = 2.25;
            $remarks = 'Passed';
        } elseif ($total_weighted_score >= 61.11) {
            $final_numerical_grade = 2.50;
            $remarks = 'Passed';
        } elseif ($total_weighted_score >= 55.56) {
            $final_numerical_grade = 2.75;
            $remarks = 'Passed';
        } elseif ($total_weighted_score >= 50.00) {
            $final_numerical_grade = 3.00;
            $remarks = 'Passed';
        }
    
        $computeGrade->update([
            'written' => $written_total_score,
            'performance' => $performance_total_score,
            'midterm' => $midterm_total_score,
            'finalexam' => $finalexam_total_score,
            'total_weighted_score' => $total_weighted_score,
            'final_numerical_grade' => $final_numerical_grade,
            'remarks' => $remarks,
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
      
        $pdf = Pdf::loadView('printgradepdf.printpdfgrade', ["grades" => $grades]);
        $pdf->getDomPDF()->setHttpContext(
            stream_context_create([
                'ssl' => [
                    'allow_self_signed' => TRUE,
                    'verify_peer' => FALSE,
                    'verify_peer_name' => FALSE,
                ]
            ])
        );
        $pdf->setPaper('A4', 'portrait');
        return $pdf->stream();
    }


    public function delete_classrecord(Request $request)
    {
        $classrecord = ComputeGrade::find($request->id);
        $classrecord->delete();
        return response()->json($classrecord, 200);
    }
}