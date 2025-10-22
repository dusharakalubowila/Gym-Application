import { Check, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface MembershipsProps {
  isAuthenticated: boolean;
  onNavigate: (page: string) => void;
}

export function Memberships({ isAuthenticated, onNavigate }: MembershipsProps) {
  const plans = [
    {
      name: '1 Month',
      price: 29,
      duration: '1 month',
      savings: null,
      popular: false,
      features: [
        'Full gym access',
        'Basic equipment usage',
        'Locker room facilities',
        'Mobile app access',
        'Community events',
      ],
    },
    {
      name: '3 Months',
      price: 79,
      duration: '3 months',
      savings: 'Save $8',
      popular: true,
      features: [
        'Full gym access',
        'All equipment usage',
        'Locker room facilities',
        'Mobile app access',
        'Community events',
        'One free guest pass',
        '10% nutrition shop discount',
      ],
    },
    {
      name: '6 Months',
      price: 149,
      duration: '6 months',
      savings: 'Save $25',
      popular: false,
      features: [
        'Full gym access',
        'Premium equipment usage',
        'Locker room facilities',
        'Mobile app access',
        'Community events',
        'Two free guest passes',
        '15% nutrition shop discount',
        'Free fitness assessment',
        'Priority class booking',
      ],
    },
    {
      name: '12 Months',
      price: 279,
      duration: '12 months',
      savings: 'Save $69',
      popular: false,
      features: [
        'Full gym access',
        'Premium equipment usage',
        'Locker room facilities',
        'Mobile app access',
        'Community events',
        'Four free guest passes',
        '20% nutrition shop discount',
        'Free quarterly fitness assessment',
        'Priority class booking',
        'One month free trainer consultation',
        'Exclusive member perks',
      ],
    },
  ];

  const comparisonFeatures = [
    { feature: 'Gym Access', plans: [true, true, true, true] },
    { feature: 'Mobile App', plans: [true, true, true, true] },
    { feature: 'Locker Facilities', plans: [true, true, true, true] },
    { feature: 'Community Events', plans: [true, true, true, true] },
    { feature: 'Guest Passes', plans: [false, true, true, true] },
    { feature: 'Nutrition Discount', plans: [false, true, true, true] },
    { feature: 'Fitness Assessment', plans: [false, false, true, true] },
    { feature: 'Priority Booking', plans: [false, false, true, true] },
    { feature: 'Trainer Consultation', plans: [false, false, false, true] },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900/10 to-amber-600/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-[#111827]">Membership Plans</h1>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Choose the perfect plan for your fitness journey. All memberships include full gym access and premium
              facilities. Flexible options with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-6 flex flex-col ${
                  plan.popular ? 'border-2 border-[#F59E0B] shadow-lg' : 'border border-[#E5E7EB]'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white">
                    Most Popular
                  </Badge>
                )}
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-[#111827]">{plan.name}</h3>
                    {plan.savings && (
                      <p className="text-[#059669]">{plan.savings}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#111827]">${plan.price}</span>
                      <span className="text-[#6B7280]">USD</span>
                    </div>
                    <p className="text-[#6B7280] mt-1">{plan.duration}</p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#059669] flex-shrink-0 mt-0.5" />
                        <span className="text-[#6B7280]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-3">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-[#F59E0B] text-white hover:bg-[#F59E0B]/90'
                        : 'bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90'
                    }`}
                  >
                    Choose {plan.name}
                  </Button>
                  {!isAuthenticated && (
                    <p className="text-center text-[#6B7280] flex items-center justify-center gap-2">
                      <Lock className="h-4 w-4" />
                      <span>
                        <button
                          onClick={() => onNavigate('signin')}
                          className="text-[#1E3A8A] hover:underline"
                        >
                          Sign in
                        </button>{' '}
                        to purchase
                      </span>
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-[#111827] mb-4">Plan Comparison</h2>
            <p className="text-[#6B7280]">Compare features across all membership tiers</p>
          </div>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <Card className="overflow-hidden">
                <table className="min-w-full divide-y divide-[#E5E7EB]">
                  <thead className="bg-[#F3F4F6]">
                    <tr>
                      <th className="px-6 py-4 text-left text-[#111827]">Feature</th>
                      {plans.map((plan, index) => (
                        <th key={index} className="px-6 py-4 text-center text-[#111827]">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB] bg-white">
                    {comparisonFeatures.map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-[#6B7280]">{row.feature}</td>
                        {row.plans.map((included, i) => (
                          <td key={i} className="px-6 py-4 text-center">
                            {included ? (
                              <Check className="h-5 w-5 text-[#059669] mx-auto" />
                            ) : (
                              <span className="text-[#D1D5DB]">—</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="p-8 text-center">
            <h3 className="text-[#111827] mb-4">Have Questions?</h3>
            <p className="text-[#6B7280] mb-6">
              All memberships include access to state-of-the-art equipment, locker facilities, and our member community.
              No setup fees, cancel anytime.
            </p>
            <Button
              onClick={() => onNavigate('trainers')}
              variant="outline"
              className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
            >
              Talk to a Trainer
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
