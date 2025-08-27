import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  BookText,
  CheckSquare,
  Contact,
  Library,
  Waypoints,
} from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Process Timeline',
    description: 'Visualize the entire home-buying journey from start to finish.',
    href: '/timeline',
    icon: <Waypoints className="size-8 text-primary" />,
  },
  {
    title: 'Phase Checklists',
    description: 'Step-by-step guidance to keep you on track at every phase.',
    href: '/checklists',
    icon: <CheckSquare className="size-8 text-primary" />,
  },
  {
    title: 'Document Library',
    description: 'Understand the key documents you will encounter.',
    href: '/documents',
    icon: <Library className="size-8 text-primary" />,
  },
  {
    title: 'Contact Directory',
    description: 'Know who to contact, about what, and when.',
    href: '/contacts',
    icon: <Contact className="size-8 text-primary" />,
  },
  {
    title: 'Terms Glossary',
    description: 'Demystify complex property jargon with our simple glossary.',
    href: '/glossary',
    icon: <BookText className="size-8 text-primary" />,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Welcome to HomeBuyer's Compass"
        description="Your friendly guide to buying your first freehold home in England. Let's get started on your journey to homeownership!"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.href} className="flex">
            <Card className="flex flex-col w-full hover:border-primary transition-colors group">
              <CardHeader className="flex-grow">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="mt-2">{feature.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <div className="p-6 pt-0 mt-auto">
                <Button variant="ghost" className="p-0 h-auto text-primary">
                  Learn more <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
