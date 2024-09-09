<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComputeGradesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compute_grades', function (Blueprint $table) {
            $table->id();
            $table->string('student_name')->nullable();
            $table->string('semester')->nullable();
            $table->string('course_year')->nullable();
            $table->string('course_code')->nullable();
            $table->string('number_of_units')->nullable();
            $table->string('co_requisite')->nullable();
            $table->string('academic_year')->nullable();
            $table->string('section')->nullable();
            $table->string('written')->nullable();
            $table->string('performance')->nullable();
            $table->string('course_description')->nullable();
            $table->string('contact_hours')->nullable();
            $table->string('prerequisite')->nullable();
            $table->longText('qas_work')->nullable();
            $table->longText('oral_recitation_project')->nullable();
            $table->string('midterm')->nullable();
            $table->string('finalexam')->nullable();
            $table->string('total_weighted_score')->nullable();
            $table->string('final_numerical_grade')->nullable();
            $table->string('remarks')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('compute_grades');
    }
}
