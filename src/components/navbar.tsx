'use client';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLocaleStore } from '@/stores/localStore';
import { SignOutButton } from '@clerk/nextjs';
import {
  Bell,
  Briefcase,
  ChevronDown,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
  User,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { locale, setLocale } = useLocaleStore();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);
    const urlLocale = segments[0];
    if (['en', 'vi'].includes(urlLocale)) {
      setLocale(urlLocale as 'en' | 'vi');
    } else if (locale !== 'en') {
      setLocale('en');
    }
  }, [locale, pathname, setLocale]);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'vi' : 'en';
    setLocale(newLocale);
    const segments = pathname.split('/').filter(Boolean);
    if (['en', 'vi'].includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    router.push(`/${segments.join('/')}`);
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container flex h-16 items-center px-4 md:px-10 lg:px-16">
        {/* Left Section */}
        <div className="flex items-center">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="text-lg font-bold tracking-tight text-primary hover:text-primary/80 transition-colors">
              TradingLens
            </span>
          </Link>
          <nav className="ml-8 hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/dashboard"
              className="relative py-1 px-2 text-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Dashboard
            </Link>
            <Link
              href="/chatbot"
              className="relative py-1 px-2 text-muted-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Chatbot
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-foreground hover:text-primary md:hidden"
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-background/95 backdrop-blur">
            <nav className="flex flex-col gap-4 mt-6">
              <Link
                href="/dashboard"
                className="px-4 py-2 text-lg font-medium text-foreground hover:bg-accent hover:text-primary rounded-md transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/chatbot"
                className="px-4 py-2 text-lg font-medium text-foreground hover:bg-accent hover:text-primary rounded-md transition-colors"
              >
                Chatbot
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Right Section */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative text-foreground hover:text-primary hover:bg-accent rounded-full transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 h-4 w-4 flex items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground animate-pulse">
                3
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-foreground hover:text-primary hover:bg-accent rounded-full transition-colors"
              aria-label="Toggle Theme"
            >
              {/* Only render icon after mounting on client */}
              {mounted
                ? (
                    theme === 'dark'
                      ? (
                          <Sun className="h-5 w-5" />
                        )
                      : (
                          <Moon className="h-5 w-5" />
                        )
                  )
                : (
                    <Sun className="h-5 w-5" />
                  )}
            </Button>

            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="font-medium text-foreground hover:bg-primary hover:text-primary-foreground border-muted transition-colors"
              aria-label="Toggle Language"
            >
              {locale === 'en' ? 'EN' : 'VI'}
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 hover:bg-accent rounded-full px-2 py-1 transition-colors"
                  aria-label="User menu"
                >
                  <Avatar className="h-8 w-8 border-2 border-primary/20">
                    {/* User Avatar */}
                  </Avatar>
                  <span className="hidden md:inline-block font-medium text-foreground">
                    {/* Username */}
                  </span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32 bg-background/95 backdrop-blur border-muted shadow-lg rounded-lg">
                <DropdownMenuLabel className="font-semibold text-foreground">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-muted/50" />
                <DropdownMenuItem
                  onClick={() => router.push('/profile')}
                  className="flex items-center gap-2 text-foreground hover:bg-accent hover:text-primary rounded-md transition-colors cursor-pointer"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => router.push('/settings')}
                  className="flex items-center gap-2 text-foreground hover:bg-accent hover:text-primary rounded-md transition-colors cursor-pointer"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => router.push('/portfolio')}
                  className="flex items-center gap-2 text-foreground hover:bg-accent hover:text-primary rounded-md transition-colors cursor-pointer"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Portfolio</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-muted/50" />
                <DropdownMenuItem
                  className="flex items-center gap-2 text-red-500 hover:bg-red-500/10 rounded-md transition-colors cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  <SignOutButton>
                    <span>Log out</span>
                  </SignOutButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
