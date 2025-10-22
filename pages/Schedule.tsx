import { Calendar, Clock, Dumbbell, Info } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function Schedule() {
  const weeklySchedule = [
    {
      day: 'Monday',
      session: 'Full Body Workout A',
      type: 'Strength',
      duration: '60 min',
      exercises: [
        { name: 'Barbell Squats', sets: '3x8-10', rest: '2 min' },
        { name: 'Bench Press', sets: '3x8-10', rest: '2 min' },
        { name: 'Barbell Rows', sets: '3x8-10', rest: '2 min' },
        { name: 'Overhead Press', sets: '3x8-10', rest: '90 sec' },
        { name: 'Plank Hold', sets: '3x30-45s', rest: '60 sec' },
      ],
    },
    {
      day: 'Tuesday',
      session: 'Cardio & Core',
      type: 'Conditioning',
      duration: '45 min',
      exercises: [
        { name: 'Treadmill Intervals', sets: '20 min', rest: 'As needed' },
        { name: 'Bicycle Crunches', sets: '3x15', rest: '45 sec' },
        { name: 'Russian Twists', sets: '3x20', rest: '45 sec' },
        { name: 'Mountain Climbers', sets: '3x30s', rest: '45 sec' },
        { name: 'Cool Down Walk', sets: '10 min', rest: '-' },
      ],
    },
    {
      day: 'Wednesday',
      session: 'Active Recovery',
      type: 'Mobility',
      duration: '30 min',
      exercises: [
        { name: 'Dynamic Stretching', sets: '10 min', rest: '-' },
        { name: 'Foam Rolling', sets: '10 min', rest: '-' },
        { name: 'Yoga Flow', sets: '10 min', rest: '-' },
      ],
    },
    {
      day: 'Thursday',
      session: 'Full Body Workout B',
      type: 'Strength',
      duration: '60 min',
      exercises: [
        { name: 'Deadlifts', sets: '3x6-8', rest: '2-3 min' },
        { name: 'Incline Dumbbell Press', sets: '3x8-10', rest: '90 sec' },
        { name: 'Pull-ups/Lat Pulldown', sets: '3x8-10', rest: '90 sec' },
        { name: 'Dumbbell Lunges', sets: '3x10/leg', rest: '90 sec' },
        { name: 'Cable Crunches', sets: '3x12-15', rest: '60 sec' },
      ],
    },
    {
      day: 'Friday',
      session: 'HIIT Training',
      type: 'Conditioning',
      duration: '45 min',
      exercises: [
        { name: 'Warm-up Jog', sets: '5 min', rest: '-' },
        { name: 'Burpees', sets: '4x30s', rest: '30s' },
        { name: 'Box Jumps', sets: '4x30s', rest: '30s' },
        { name: 'Battle Ropes', sets: '4x30s', rest: '30s' },
        { name: 'Rowing Machine', sets: '4x1 min', rest: '1 min' },
      ],
    },
    {
      day: 'Saturday',
      session: 'Upper Body Focus',
      type: 'Strength',
      duration: '60 min',
      exercises: [
        { name: 'Dumbbell Bench Press', sets: '3x10-12', rest: '90 sec' },
        { name: 'Cable Rows', sets: '3x10-12', rest: '90 sec' },
        { name: 'Lateral Raises', sets: '3x12-15', rest: '60 sec' },
        { name: 'Bicep Curls', sets: '3x10-12', rest: '60 sec' },
        { name: 'Tricep Pushdowns', sets: '3x10-12', rest: '60 sec' },
      ],
    },
    {
      day: 'Sunday',
      session: 'Rest & Recovery',
      type: 'Rest',
      duration: 'All day',
      exercises: [
        { name: 'Light Walking', sets: 'Optional', rest: '-' },
        { name: 'Stretching', sets: 'As needed', rest: '-' },
        { name: 'Meal Prep', sets: 'As needed', rest: '-' },
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Strength':
        return 'bg-[#1E3A8A] text-white';
      case 'Conditioning':
        return 'bg-[#F59E0B] text-white';
      case 'Mobility':
        return 'bg-[#059669] text-white';
      case 'Rest':
        return 'bg-[#6B7280] text-white';
      default:
        return 'bg-[#E5E7EB] text-[#111827]';
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-lg bg-[#1E3A8A] flex items-center justify-center">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-[#111827]">Your Weekly Schedule</h1>
              <p className="text-[#6B7280]">Beginner bodybuilding program</p>
            </div>
          </div>

          {/* Info Banner */}
          <Card className="p-4 bg-blue-50 border-[#1E3A8A]/20">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#111827] mb-1">Program Guidelines</p>
                <p className="text-[#6B7280]">
                  This is a beginner-friendly full-body program focusing on compound movements. Always warm up before
                  each session and maintain proper form. Rest 48 hours between similar muscle groups.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Weekly Schedule Grid */}
        <div className="space-y-6">
          {weeklySchedule.map((day, index) => (
            <Card key={index} className="overflow-hidden">
              {/* Day Header */}
              <div className="bg-gradient-to-r from-[#1E3A8A]/10 to-[#F59E0B]/10 p-6 border-b border-[#E5E7EB]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#1E3A8A] flex items-center justify-center flex-shrink-0">
                      <Dumbbell className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-[#111827]">{day.day}</h2>
                      <p className="text-[#6B7280]">{day.session}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getTypeColor(day.type)}>{day.type}</Badge>
                    <div className="flex items-center gap-2 text-[#6B7280]">
                      <Clock className="h-4 w-4" />
                      <span>{day.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exercise List */}
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-[#E5E7EB]">
                      <tr>
                        <th className="text-left py-3 text-[#111827]">Exercise</th>
                        <th className="text-left py-3 text-[#111827] hidden sm:table-cell">Sets x Reps</th>
                        <th className="text-left py-3 text-[#111827] hidden md:table-cell">Rest</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      {day.exercises.map((exercise, i) => (
                        <tr key={i} className="hover:bg-[#F3F4F6]">
                          <td className="py-4 text-[#111827]">
                            <div>
                              <p>{exercise.name}</p>
                              <p className="text-[#6B7280] sm:hidden mt-1">
                                {exercise.sets} · Rest: {exercise.rest}
                              </p>
                            </div>
                          </td>
                          <td className="py-4 text-[#6B7280] hidden sm:table-cell">{exercise.sets}</td>
                          <td className="py-4 text-[#6B7280] hidden md:table-cell">{exercise.rest}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Tips */}
        <Card className="p-6 mt-8 bg-gradient-to-br from-blue-900/10 to-amber-600/10">
          <h3 className="text-[#111827] mb-4">Training Tips</h3>
          <ul className="space-y-2 text-[#6B7280]">
            <li className="flex items-start gap-2">
              <span className="text-[#1E3A8A] mt-1">•</span>
              <span>Track your weights and aim to progressively increase load each week</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1E3A8A] mt-1">•</span>
              <span>Maintain a 2-3 second eccentric (lowering) phase on all exercises</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1E3A8A] mt-1">•</span>
              <span>Stay hydrated and consume adequate protein (0.8-1g per pound of body weight)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1E3A8A] mt-1">•</span>
              <span>Get 7-9 hours of sleep for optimal recovery and muscle growth</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
