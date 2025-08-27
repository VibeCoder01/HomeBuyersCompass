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

      <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-0">
        {timelineData.map((item, index) => (
          <div key={item.phase} className="relative grid md:grid-cols-[1fr_3fr] gap-8 pb-12">
            <div className="flex items-start">
              <div className="absolute w-6 h-6 bg-background border-2 rounded-full -left-3 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <div className="md:text-left pt-1.5">
                <h3 className="font-semibold text-primary">{item.phase}</h3>
                <Badge variant="secondary" className="mt-1">{item.duration}</Badge>
              </div>
            </div>

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
        ))}
         <div className="absolute w-6 h-6 bg-primary border-2 border-background rounded-full -left-3 bottom-0 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
}
