import { Calendar, CreditCard, Dumbbell, TrendingUp, User, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface MemberHomeProps {
  userName: string;
  onNavigate: (page: string) => void;
}

export function MemberHome({ userName, onNavigate }: MemberHomeProps) {
  // Mock member data
  const memberData = {
    name: userName,
    age: 28,
    gender: 'Male',
    joinDate: 'January 15, 2025',
    membershipPlan: '6 Months Premium',
    membershipExpiry: 'July 15, 2025',
    email: 'member@example.com',
    phone: '+1 (555) 123-4567',
  };

  const stats = [
    {
      icon: Dumbbell,
      label: 'Workouts This Month',
      value: '12',
      change: '+3 from last month',
      positive: true,
    },
    {
      icon: Calendar,
      label: 'Classes Attended',
      value: '8',
      change: '+2 from last month',
      positive: true,
    },
    {
      icon: TrendingUp,
      label: 'Current Streak',
      value: '5 days',
      change: 'Keep it up!',
      positive: true,
    },
    {
      icon: Users,
      label: 'Training Sessions',
      value: '3',
      change: '1 upcoming',
      positive: true,
    },
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'View Schedule',
      description: 'See your weekly workout plan',
      action: () => onNavigate('schedule'),
      color: 'bg-[#1E3A8A]',
    },
    {
      icon: Dumbbell,
      title: 'Book a Class',
      description: 'Reserve your spot in group classes',
      action: () => {},
      color: 'bg-[#F59E0B]',
    },
    {
      icon: Users,
      title: 'Contact Trainer',
      description: 'Get expert guidance',
      action: () => onNavigate('trainers'),
      color: 'bg-[#059669]',
    },
    {
      icon: CreditCard,
      title: 'Manage Membership',
      description: 'View or renew your plan',
      action: () => onNavigate('memberships'),
      color: 'bg-[#1E3A8A]',
    },
  ];

  const announcements = [
    {
      title: 'New HIIT Classes Added',
      date: 'October 20, 2025',
      content: 'Join our new high-intensity interval training classes every Monday and Thursday at 6 PM.',
    },
    {
      title: 'Gym Maintenance Schedule',
      date: 'October 18, 2025',
      content: 'The gym will be closed for maintenance on Sunday, October 27th. We apologize for any inconvenience.',
    },
    {
      title: 'Nutrition Workshop',
      date: 'October 15, 2025',
      content: 'Free nutrition workshop this Saturday at 10 AM. Learn about meal planning for muscle gain.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-[#111827] mb-2">Welcome back, {memberData.name}!</h1>
          <p className="text-[#6B7280]">Here's your fitness overview and quick actions</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#1E3A8A]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[#6B7280]">{stat.label}</p>
                  <p className="text-[#111827]">{stat.value}</p>
                  <p className={stat.positive ? 'text-[#059669]' : 'text-[#6B7280]'}>{stat.change}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Member Details */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-[#1E3A8A]" />
                </div>
                <div>
                  <h2 className="text-[#111827]">Member Information</h2>
                  <p className="text-[#6B7280]">Your account details</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[#6B7280] mb-1">Full Name</p>
                  <p className="text-[#111827]">{memberData.name}</p>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Age</p>
                  <p className="text-[#111827]">{memberData.age} years</p>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Gender</p>
                  <p className="text-[#111827]">{memberData.gender}</p>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Join Date</p>
                  <p className="text-[#111827]">{memberData.joinDate}</p>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Email</p>
                  <p className="text-[#111827]">{memberData.email}</p>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Phone</p>
                  <p className="text-[#111827]">{memberData.phone}</p>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Membership Plan</p>
                  <Badge className="bg-[#1E3A8A] text-white">{memberData.membershipPlan}</Badge>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Expires On</p>
                  <p className="text-[#111827]">{memberData.membershipExpiry}</p>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div>
              <h2 className="text-[#111827] mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={action.action}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`h-12 w-12 rounded-lg ${action.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[#111827] mb-1">{action.title}</h3>
                          <p className="text-[#6B7280]">{action.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Membership Status */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-5 w-5 text-[#1E3A8A]" />
                <h3 className="text-[#111827]">Membership Status</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[#6B7280] mb-1">Current Plan</p>
                  <Badge className="bg-[#1E3A8A] text-white">{memberData.membershipPlan}</Badge>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Valid Until</p>
                  <p className="text-[#111827]">{memberData.membershipExpiry}</p>
                </div>
                <Button
                  onClick={() => onNavigate('memberships')}
                  variant="outline"
                  className="w-full border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                >
                  Renew Membership
                </Button>
              </div>
            </Card>

            {/* Announcements */}
            <Card className="p-6">
              <h3 className="text-[#111827] mb-4">Announcements</h3>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="pb-4 border-b border-[#E5E7EB] last:border-0 last:pb-0">
                    <h4 className="text-[#111827] mb-1">{announcement.title}</h4>
                    <p className="text-[#6B7280] mb-2">{announcement.date}</p>
                    <p className="text-[#6B7280]">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-6 bg-gradient-to-br from-blue-900/10 to-amber-600/10">
              <h3 className="text-[#111827] mb-4">Fitness Tip</h3>
              <p className="text-[#6B7280] mb-4">
                Progressive overload is key to building muscle. Gradually increase weights, reps, or sets each week to
                continue making gains.
              </p>
              <Button
                onClick={() => onNavigate('trainers')}
                size="sm"
                className="bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90"
              >
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
