import { PageHeader } from '@/components/PageHeader';
import { checklistData } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function ChecklistsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Phase-by-Phase Checklists"
        description="Stay organized and on top of every task with these detailed checklists for each phase of your home-buying journey. Tick them off as you go!"
      />

      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {checklistData.map((phase, index) => (
          <AccordionItem key={phase.phase} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              {phase.phase}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    <Checkbox id={`${phase.phase}-${itemIndex}`} />
                    <Label htmlFor={`${phase.phase}-${itemIndex}`} className="text-base font-normal text-muted-foreground">
                      {item}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
