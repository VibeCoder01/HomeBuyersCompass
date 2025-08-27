'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import {
  BookText,
  CheckSquare,
  Contact,
  Home,
  Library,
  Waypoints,
  Compass,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/timeline', label: 'Timeline', icon: Waypoints },
  { href: '/checklists', label: 'Checklists', icon: CheckSquare },
  { href: '/documents', label: 'Documents', icon: Library },
  { href: '/contacts', label: 'Contacts', icon: Contact },
  { href: '/glossary', label: 'Glossary', icon: BookText },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <Compass className="size-8 text-primary" />
            <div className="flex flex-col">
              <h2 className="text-lg font-bold tracking-tight font-headline">HomeBuyer's Compass</h2>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} className="w-full">
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={{ children: item.label, side: 'right' }}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b md:justify-end">
          <SidebarTrigger className="md:hidden" />
          {/* Header content for main area can go here if needed */}
        </header>
        <main className="flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
