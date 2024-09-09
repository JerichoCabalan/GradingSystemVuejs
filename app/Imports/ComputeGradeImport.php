<?php

namespace App\Imports;

use App\Models\ComputeGrade;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ComputeGradeImport implements  ToCollection, WithHeadingRow
{
    private $ret;

    public function getMessage()
    {
        return $this->ret;
    }

    public function collection(Collection $rows)
    {
        $semester = $rows[2]['2'] ?? null;
        $course_year = $rows[2]['7'] ?? null;
        $course_code = $rows[2]['15'] ?? null;
        $number_of_units = ($rows[2]['26'] ?? '') . ($rows[2]['28'] ?? '');
        $co_requisite = $rows[2]['33'] ?? null;
        $academic_year = $rows[3]['2'] ?? null;
        $section = $rows[3]['7'] ?? null;
        $course_description = $rows[3]['15'] ?? null;
        $contact_hours = ($rows[3]['26'] ?? '') . ($rows[3]['28'] ?? '');
        $prerequisite = $rows[3]['33'] ?? null;

        $rows_9_to_end = $rows->slice(9)->take(60);

        $filtered_rows = $rows_9_to_end->filter(function ($row) {
            $student_name = $row['1'] ?? null;
            $written_total_score = is_numeric($row[3]) ? $row[3] : 0;
            $performance_total_score = is_numeric($row[18]) ? $row[18] : 0;
            $midterm_total_score = is_numeric($row[33]) ? $row[33] : 0;
            $finalexam_total_score = is_numeric($row[34]) ? $row[34] : 0;

            return !empty($student_name) &&
                ($written_total_score > 0 || $performance_total_score > 0 || $midterm_total_score > 0 || $finalexam_total_score > 0);
        });

        foreach ($filtered_rows as $row) {
            $student_name = substr($row['1'] ?? '', 0, 60);

            $written_total_score = is_numeric($row[3]) ? $row[3] : 0;
            $performance_total_score = is_numeric($row[18]) ? $row[18] : 0;
            $midterm_total_score = is_numeric($row[33]) ? $row[33] : 0;
            $finalexam_total_score = is_numeric($row[34]) ? $row[34] : 0;

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

            ComputeGrade::create([
                'student_name' => $student_name,
                'semester' => $semester,
                'course_year' => $course_year,
                'course_code' => $course_code,
                'number_of_units' => $number_of_units,
                'co_requisite' => $co_requisite,
                'academic_year' => $academic_year,
                'written' => $written_total_score,
                'performance' => $performance_total_score,
                'section' => $section,
                'course_description' => $course_description,
                'contact_hours' => $contact_hours,
                'prerequisite' => $prerequisite,
                'oral_recitation_project' => $row['oral_recitation_project'] ?? null,
                'midterm' => $midterm_total_score,
                'finalexam' => $finalexam_total_score,
                'total_weighted_score' => $total_weighted_score,
                'final_numerical_grade' => $final_numerical_grade,
                'remarks' => $remarks,
            ]);
        }

        // Set the success message
        $this->ret = [
            "success" => true,
            "message" => "Excel Data Uploaded Successfully",
        ];
    }
}