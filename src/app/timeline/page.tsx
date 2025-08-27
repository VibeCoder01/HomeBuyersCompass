import { PageHeader } from '@/components/PageHeader';
import { timelineData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="The Home-Buying Timeline"
        description="Buying a home is a journey with several key stages. Here’s a typical timeline for a freehold property purchase in England to help you understand what to expect."
      />

      <div className="relative pl-8 md:pl-0">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-border md:left-1/3 md:-translate-x-1/2"></div>
        {timelineData.map((item, index) => (
          <div key={item.phase} className="relative flex flex-col md:flex-row items-start gap-8 pb-12">
            <div className="md:w-1/3 md:pr-12 md:text-right">
              <div className="absolute w-6 h-6 bg-background border-2 rounded-full left-0 -translate-x-1/2 md:left-1/3 md:-translate-x-1/2">
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
              <h3 className="font-semibold text-primary">{item.phase}</h3>
              <Badge variant="secondary" className="mt-1">{item.duration}</Badge>
            </div>

            <div className="md:w-2/3 md:pl-12">
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-semibold text-foreground">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
         <div className="absolute w-6 h-6 bg-primary border-2 border-background rounded-full left-0 -translate-x-1/2 bottom-0 md:left-1/3 md:-translate-x-1/2">
            <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
}
