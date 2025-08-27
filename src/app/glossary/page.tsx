import { PageHeader } from '@/components/PageHeader';
import { glossaryData } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function GlossaryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Property Terms Glossary"
        description="Feeling lost in jargon? This glossary explains common property-buying terms in simple language to help you feel more confident."
      />

      <Accordion type="multiple" className="w-full">
        {glossaryData.map((entry) => (
          <AccordionItem key={entry.term} value={entry.term}>
            <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
              {entry.term}
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="text-base text-muted-foreground prose"
                dangerouslySetInnerHTML={{ __html: entry.definition }}
              ></div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
