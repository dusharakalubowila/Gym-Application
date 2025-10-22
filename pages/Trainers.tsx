import { Award, Lock, Mail, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface TrainersProps {
  isAuthenticated: boolean;
  onNavigate: (page: string) => void;
}

export function Trainers({ isAuthenticated, onNavigate }: TrainersProps) {
  const trainers = [
    {
      name: 'Marcus Johnson',
      gender: 'Male',
      specialty: ['Strength Training', 'Hypertrophy'],
      experience: '7+ years',
      rating: 4.9,
      bio: 'Specialized in progressive overload and muscle building programs. Marcus has helped hundreds of clients achieve their strength and physique goals through evidence-based training methodologies.',
      image: 'https://images.unsplash.com/photo-1704223523169-52feeed90365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZml0bmVzcyUyMHRyYWluZXIlMjBneW18ZW58MXx8fHwxNzYxMTMyODAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['NASM-CPT', 'CSCS', 'Nutrition Coach'],
    },
    {
      name: 'Derek Thompson',
      gender: 'Male',
      specialty: ['Conditioning', 'Weight Loss'],
      experience: '5+ years',
      rating: 4.8,
      bio: 'Expert in high-intensity interval training and sustainable fat loss programs. Derek combines metabolic conditioning with strength work to help clients achieve lean, athletic physiques.',
      image: 'https://images.unsplash.com/photo-1758875569220-6934933d443c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcGVyc29uYWwlMjB0cmFpbmVyJTIwY29hY2hpbmd8ZW58MXx8fHwxNzYxMTMyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['ACE-CPT', 'TRX Certified', 'Sports Nutrition'],
    },
    {
      name: 'Sarah Mitchell',
      gender: 'Female',
      specialty: ['Mobility', 'Functional Training'],
      experience: '6+ years',
      rating: 5.0,
      bio: 'Focuses on movement quality, injury prevention, and functional strength. Sarah helps clients build resilient bodies that perform well in the gym and in daily life activities.',
      image: 'https://images.unsplash.com/photo-1758875569220-6934933d443c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBmaXRuZXNzJTIwdHJhaW5lciUyMGF0aGxldGV8ZW58MXx8fHwxNzYxMTMyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['FMS Level 2', 'NASM-CPT', 'Yoga Alliance RYT'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900/10 to-amber-600/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-[#111827]">Our Expert Trainers</h1>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Work with certified fitness professionals who are passionate about helping you achieve your goals. Each
              trainer brings unique expertise and proven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                {/* Trainer Image */}
                <div className="aspect-square bg-[#E5E7EB] relative overflow-hidden">
                  <ImageWithFallback
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Trainer Info */}
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-[#111827]">{trainer.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                        <span className="text-[#111827]">{trainer.rating}</span>
                      </div>
                    </div>
                    <p className="text-[#6B7280]">{trainer.experience} experience</p>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialty.map((spec, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-[#1E3A8A]/10 text-[#1E3A8A] hover:bg-[#1E3A8A]/20"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-[#6B7280] flex-1">{trainer.bio}</p>

                  {/* Certifications */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#6B7280]">
                      <Award className="h-4 w-4 text-[#F59E0B]" />
                      <span>Certifications</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, i) => (
                        <Badge key={i} variant="outline" className="border-[#E5E7EB] text-[#6B7280]">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2">
                    <Button
                      className="w-full bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90"
                      disabled={!isAuthenticated}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Trainer
                    </Button>
                    {!isAuthenticated && (
                      <p className="text-center text-[#6B7280] flex items-center justify-center gap-2">
                        <Lock className="h-3 w-3" />
                        <span>
                          <button
                            onClick={() => onNavigate('signin')}
                            className="text-[#1E3A8A] hover:underline"
                          >
                            Sign in
                          </button>{' '}
                          to contact
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With a Trainer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-[#111827] mb-4">Why Work With a Personal Trainer?</h2>
            <p className="text-[#6B7280]">
              Personal training accelerates your progress and ensures you're training safely and effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-[#1E3A8A]" />
              </div>
              <h3 className="text-[#111827] mb-2">Expert Guidance</h3>
              <p className="text-[#6B7280]">
                Certified professionals design programs tailored to your goals and experience level
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-[#F59E0B]" />
              </div>
              <h3 className="text-[#111827] mb-2">Faster Results</h3>
              <p className="text-[#6B7280]">Proven techniques and accountability help you reach your goals quicker</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-[#059669]/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-[#059669]" />
              </div>
              <h3 className="text-[#111827] mb-2">Injury Prevention</h3>
              <p className="text-[#6B7280]">Learn proper form and technique to train safely for the long term</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('memberships')}
              className="bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
