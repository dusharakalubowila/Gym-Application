import { useState } from 'react';
import { Header } from './components/Header';
import { Overview } from './pages/Overview';
import { Memberships } from './pages/Memberships';
import { Trainers } from './pages/Trainers';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { MemberHome } from './pages/MemberHome';
import { Schedule } from './pages/Schedule';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

type Page = 'overview' | 'memberships' | 'trainers' | 'signin' | 'signup' | 'member-home' | 'schedule';

interface User {
  name: string;
  email: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleNavigate = (page: string) => {
    // Check if page requires authentication
    const protectedPages = ['member-home', 'schedule'];
    if (protectedPages.includes(page) && !isAuthenticated) {
      toast.error('Please sign in to access this page');
      setCurrentPage('signin');
      return;
    }
    setCurrentPage(page as Page);
  };

  const handleSignIn = (email: string, password: string) => {
    // Mock authentication - in a real app, this would call an API
    const mockUser: User = {
      name: 'John Anderson',
      email: email,
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    toast.success('Successfully signed in!');
    setCurrentPage('member-home');
  };

  const handleSignUp = (name: string, email: string, password: string) => {
    // Mock registration - in a real app, this would call an API
    const newUser: User = {
      name: name,
      email: email,
    };
    setUser(newUser);
    setIsAuthenticated(true);
    toast.success('Account created successfully!');
    setCurrentPage('member-home');
  };

  const handleSignOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    toast.info('You have been signed out');
    setCurrentPage('overview');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview onNavigate={handleNavigate} />;
      case 'memberships':
        return <Memberships isAuthenticated={isAuthenticated} onNavigate={handleNavigate} />;
      case 'trainers':
        return <Trainers isAuthenticated={isAuthenticated} onNavigate={handleNavigate} />;
      case 'signin':
        return <SignIn onSignIn={handleSignIn} onNavigate={handleNavigate} />;
      case 'signup':
        return <SignUp onSignUp={handleSignUp} onNavigate={handleNavigate} />;
      case 'member-home':
        return <MemberHome userName={user?.name || 'Member'} onNavigate={handleNavigate} />;
      case 'schedule':
        return <Schedule />;
      default:
        return <Overview onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header
        currentPage={currentPage}
        isAuthenticated={isAuthenticated}
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
        userName={user?.name}
      />
      <main>{renderPage()}</main>
      <Toaster position="top-right" />
    </div>
  );
}
