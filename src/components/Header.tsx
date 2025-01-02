'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Card, CardContent } from '@/components/ui/card'
import { Menu } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#cv', label: 'CV' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="sticky top-4 z-50 mx-4 mt-4 bg-gradient-to-r from-white via-gray-100 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 shadow-lg backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 to-zinc-600 dark:from-neutral-400 dark:to-zinc-600">
              Portfolio Web
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300"
                >
                  {item.label}
                </a>
              ))}
              <ThemeToggle />
            </nav>
            <div className="flex items-center md:hidden">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2 text-gray-700 dark:text-gray-300">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-zinc-900">
                  <nav>
                    <ul className="space-y-4">
                      {navItems.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="block text-lg text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

