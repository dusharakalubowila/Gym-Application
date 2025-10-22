import { Activity, Apple, Calendar, ChartBar, CreditCard, Dumbbell, Target, TrendingUp, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

interface OverviewProps {
  onNavigate: (page: string) => void;
}

export function Overview({ onNavigate }: OverviewProps) {
  const benefits = [
    {
      icon: Dumbbell,
      title: 'Strength Building',
      description: 'Progressive overload training to build muscle mass and increase overall strength effectively.',
    },
    {
      icon: Activity,
      title: 'Enhanced Endurance',
      description: 'Improve cardiovascular health and stamina through structured conditioning programs.',
    },
    {
      icon: Target,
      title: 'Perfect Form',
      description: 'Learn proper technique and form to maximize results while minimizing injury risk.',
    },
    {
      icon: Apple,
      title: 'Nutrition Guidance',
      description: 'Comprehensive nutrition plans tailored to support your bodybuilding goals.',
    },
  ];

  const features = [
    {
      icon: CreditCard,
      title: 'Flexible Memberships',
      description: 'Choose from monthly, quarterly, or annual plans that fit your budget and commitment.',
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Work with certified professionals specializing in strength, conditioning, and mobility.',
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Book classes and training sessions with an intuitive calendar system.',
    },
    {
      icon: ChartBar,
      title: 'Progress Tracking',
      description: 'Monitor your fitness journey with detailed dashboards and performance metrics.',
    },
    {
      icon: TrendingUp,
      title: 'Custom Programs',
      description: 'Personalized workout plans designed to match your fitness level and goals.',
    },
    {
      icon: Activity,
      title: 'Member Dashboard',
      description: 'Access all your gym information, schedule, and account details in one place.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900/10 to-amber-600/10 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-[#111827]">Welcome to Gym Manager</h1>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Your complete bodybuilding and fitness management platform. Transform your physique with expert guidance,
              structured programs, and a community dedicated to strength and wellness.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                onClick={() => onNavigate('memberships')}
                className="bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90"
              >
                Explore Memberships
              </Button>
              <Button
                onClick={() => onNavigate('trainers')}
                variant="outline"
                className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
              >
                Meet Our Trainers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Bodybuilding Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-[#111827] mb-4">The Science of Bodybuilding</h2>
            <p className="text-[#6B7280] max-w-3xl mx-auto">
              Bodybuilding is the art and science of developing muscular strength, size, and definition through
              resistance training, proper nutrition, and recovery. Our programs are designed to help you achieve your
              physical potential while maintaining balance and long-term health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#1E3A8A]" />
                    </div>
                    <h3 className="text-[#111827]">{benefit.title}</h3>
                    <p className="text-[#6B7280]">{benefit.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About the Application Section */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-[#111827] mb-4">Comprehensive Gym Management</h2>
            <p className="text-[#6B7280] max-w-3xl mx-auto">
              Everything you need to manage your fitness journey in one powerful platform. From memberships to training
              schedules, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#F59E0B]" />
                    </div>
                    <h3 className="text-[#111827]">{feature.title}</h3>
                    <p className="text-[#6B7280]">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-gradient-to-br from-blue-900/10 to-amber-600/10 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-[#111827] mb-4">Ready to Transform Your Body?</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto mb-8">
              Join our community of dedicated athletes and fitness enthusiasts. Choose a membership plan that fits your
              goals and start your journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => onNavigate('memberships')}
                className="bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90"
              >
                View Membership Plans
              </Button>
              <Button
                onClick={() => onNavigate('trainers')}
                variant="outline"
                className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
              >
                Meet Our Expert Trainers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
