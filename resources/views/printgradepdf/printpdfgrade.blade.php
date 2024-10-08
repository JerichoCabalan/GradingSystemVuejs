<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Final Semestral Grade</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid black;
            text-align: center;
            padding: 5px;
        }

        .cyan-cell {
            background-color: #e0ffff;
        }

        .red-cell {
            color: red;
        }

        .header-section {
            text-align: center;
        }

        .logo {
            width: 100px;
            /* Adjust size as needed */
        }
    </style>
</head>

<body>
    <!-- Header section with logo -->
    <div class="header-section">
        {{-- <img src="{{ asset('assets/img/profile/aw.png') }}" class="logo" alt="Logo"> --}}
        {{-- <img src="{{ URL::to('/assets/img/profile/default.jpg') }}"> --}}
        <img src="{{ asset('assets/img/profile/806834796514581.png') }}">
        <h2>Final Semestral Grade</h2>a
        <table>
            <thead>
                <tr>
                    <th rowspan="2">No.</th>
                    <th rowspan="2">Student's Name</th>
                    <th colspan="2">Lecture</th>
                    <th colspan="2">Laboratory</th>
                    <th colspan="2">Midterm Examination</th>
                    <th colspan="2">Final Examination</th>
                    <th rowspan="2">Total Weighted Score</th>
                    <th rowspan="2">Final Numerical Grade</th>
                    <th rowspan="2">Remarks</th>
                </tr>
                <tr>
                    <th class="cyan-cell">Total Score</th>
                    <th class="cyan-cell">WS</th>
                    <th class="cyan-cell">Total Score</th>
                    <th class="cyan-cell">WS</th>
                    <th class="cyan-cell">Total Score</th>
                    <th class="cyan-cell">WS</th>
                    <th class="cyan-cell">Total Score</th>
                    <th class="cyan-cell">WS</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($grades as $key => $grade)
                    <tr>
                        <td>{{ $key + 1 }}</td>
                        <td>{{ $grade->student_name }}</td>
                        <td>{{ $grade->lecture_score }}</td>
                        <td>{{ $grade->lecture_ws }}</td>
                        <td>{{ $grade->lab_score }}</td>
                        <td>{{ $grade->lab_ws }}</td>
                        <td>{{ $grade->midterm_score }}</td>
                        <td>{{ $grade->midterm_ws }}</td>
                        <td>{{ $grade->final_score }}</td>
                        <td>{{ $grade->final_ws }}</td>
                        <td>{{ $grade->total_weighted_score }}</td>
                        <td class="red-cell">{{ $grade->final_numerical_grade }}</td>
                        <td>{{ $grade->remarks }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
</body>

</html>
