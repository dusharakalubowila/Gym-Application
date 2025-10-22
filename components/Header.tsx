import { Dumbbell, Menu, User, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  isAuthenticated: boolean;
  onNavigate: (page: string) => void;
  onSignOut: () => void;
  userName?: string;
}

export function Header({ currentPage, isAuthenticated, onNavigate, onSignOut, userName }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const publicPages = [
    { id: 'overview', label: 'Overview' },
    { id: 'memberships', label: 'Memberships' },
    { id: 'trainers', label: 'Trainers' },
  ];

  const memberPages = [
    { id: 'member-home', label: 'Dashboard' },
    { id: 'schedule', label: 'Schedule' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('overview')}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E3A8A]">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-[#111827] font-medium hidden sm:inline">Gym Manager</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {publicPages.map((page) => (
              <button
                key={page.id}
                onClick={() => onNavigate(page.id)}
                className={`transition-colors hover:text-[#1E3A8A] ${
                  currentPage === page.id ? 'text-[#1E3A8A]' : 'text-[#6B7280]'
                }`}
              >
                {page.label}
              </button>
            ))}
            {isAuthenticated && memberPages.map((page) => (
              <button
                key={page.id}
                onClick={() => onNavigate(page.id)}
                className={`transition-colors hover:text-[#1E3A8A] ${
                  currentPage === page.id ? 'text-[#1E3A8A]' : 'text-[#6B7280]'
                }`}
              >
                {page.label}
              </button>
            ))}
          </nav>

          {/* Desktop Auth Actions */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F3F4F6]">
                  <User className="h-4 w-4 text-[#1E3A8A]" />
                  <span className="text-[#111827]">{userName}</span>
                </div>
                <Button
                  onClick={onSignOut}
                  variant="outline"
                  size="sm"
                  className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => onNavigate('signin')}
                  variant="ghost"
                  size="sm"
                  className="text-[#1E3A8A] hover:text-[#1E3A8A] hover:bg-[#F3F4F6]"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => onNavigate('signup')}
                  size="sm"
                  className="bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#6B7280] hover:text-[#1E3A8A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-3">
            {publicPages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  onNavigate(page.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page.id
                    ? 'bg-[#1E3A8A]/10 text-[#1E3A8A]'
                    : 'text-[#6B7280] hover:bg-[#F3F4F6]'
                }`}
              >
                {page.label}
              </button>
            ))}
            {isAuthenticated && memberPages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  onNavigate(page.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page.id
                    ? 'bg-[#1E3A8A]/10 text-[#1E3A8A]'
                    : 'text-[#6B7280] hover:bg-[#F3F4F6]'
                }`}
              >
                {page.label}
              </button>
            ))}
            <div className="border-t pt-3 mt-3 space-y-2">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-2 text-[#111827]">
                    <User className="h-4 w-4 text-[#1E3A8A]" />
                    <span>{userName}</span>
                  </div>
                  <Button
                    onClick={() => {
                      onSignOut();
                      setMobileMenuOpen(false);
                    }}
                    variant="outline"
                    className="w-full border-[#1E3A8A] text-[#1E3A8A]"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      onNavigate('signin');
                      setMobileMenuOpen(false);
                    }}
                    variant="ghost"
                    className="w-full text-[#1E3A8A]"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => {
                      onNavigate('signup');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-[#1E3A8A] text-white"
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
