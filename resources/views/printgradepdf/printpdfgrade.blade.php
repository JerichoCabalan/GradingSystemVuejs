<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complex Grading Sheet</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f0f0;
        }

        .container {
            display: flex;
            justify-content: space-between;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            margin: 10px 0;
            background-color: white;
        }

        th,
        td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
            font-size: 12px;
        }

        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }

        .main-table {
            width: 100%;
        }

        .grading-table {
            width: 22%;
            margin-left: 20px;
        }

        .header-table th,
        .header-table td {
            font-size: 14px;
        }

        .header-table {
            width: 100%;
            margin-bottom: 20px;
            border: none;
        }

        .header-table td {
            border: none;
        }

        .grade-system .pass {
            color: green;
        }

        .grade-system .fail {
            color: red;
        }

        .highlight {
            background-color: #d1f0ff;
        }

        .remarks-passed {
            color: green;
            font-weight: bold;
        }

        .remarks-failed {
            color: red;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <table class="header-table">
        <tr>
            <th>Semester</th>
            <th>{{ $semester }}</th>
            <th>Course & Year</th>
            <th>{{ $course_year }}</th>
            <th>Course Code</th>
            <th>{{ $course_code }}</th>
        </tr>
        <tr>
            <th>Academic Year</th>
            <th>{{ $academic_year }}</th>
            <th>Section</th>
            <th>{{ $section }}</th>
            <th>Course Description</th>
            <th>{{ $course_description }}</th>
        </tr>
        <tr>
            <th>Number of Units</th>
            <th>{{ $number_of_units }}</th>
            <th>Lecture Hours</th>
            <th>{{ $contact_hours }}</th>
            <th>Pre-requisite</th>
            <th>{{ $prerequisite }}</th>
        </tr>
    </table>

    <div class="container">
        <table class="main-table">
            <thead>
                <tr>
                    <th rowspan="2">No.</th>
                    <th rowspan="2">Student's Name</th>
                    <th colspan="3">WRITTEN (10 pts, 15%)</th>
                    <th colspan="3">PERFORMANCE (40 pts, 25%)</th>
                    <th colspan="3">MIDTERM EXAM (50 pts, 30%)</th>
                    <th colspan="3">FINAL EXAM (100 pts, 30%)</th>
                    <th rowspan="2">Total Weighted Score</th>
                    <th rowspan="2">Final Grade</th>
                    <th rowspan="2">Remarks</th>
                </tr>
                <tr>
                    <th>Total Score</th>
                    <th>PS</th>
                    <th>WS</th>
                    <th>Total Score</th>
                    <th>PS</th>
                    <th>WS</th>
                    <th>Total Score</th>
                    <th>PS</th>
                    <th>WS</th>
                    <th>Total Score</th>
                    <th>PS</th>
                    <th>WS</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($grades as $index => $grade)
                    <tr>
                        <td>{{ $index + 1 }}</td>
                        <td>{{ $grade->student_name }}</td>
                        <td>{{ $grade->written }}</td>
                        <td>{{ number_format(($grade->written / 10) * 100, 2) }}%</td>
                        <td class="highlight">{{ number_format(($grade->written / 10) * 15, 2) }}</td>
                        <td>{{ $grade->performance }}</td>
                        <td>{{ number_format(($grade->performance / 40) * 100, 2) }}%</td>
                        <td class="highlight">{{ number_format(($grade->performance / 40) * 25, 2) }}</td>
                        <td>{{ $grade->midterm }}</td>
                        <td>{{ number_format(($grade->midterm / 50) * 100, 2) }}%</td>
                        <td class="highlight">{{ number_format(($grade->midterm / 50) * 30, 2) }}</td>
                        <td>{{ $grade->finalexam }}</td>
                        <td>{{ number_format(($grade->finalexam / 100) * 100, 2) }}%</td>
                        <td class="highlight">{{ number_format(($grade->finalexam / 100) * 30, 2) }}</td>
                        <td class="highlight">{{ number_format($grade->total_weighted_score, 2) }}</td>
                        <td>{{ $grade->final_numerical_grade }}</td>
                        <td class="{{ $grade->remarks == 'Passed' ? 'remarks-passed' : 'remarks-failed' }}">
                            {{ $grade->remarks }}
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>

    </div>

</body>

</html>
