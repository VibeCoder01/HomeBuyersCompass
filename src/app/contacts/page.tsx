import { PageHeader } from '@/components/PageHeader';
import { contactsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function ContactsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Who's Who in Your Purchase"
        description="A home purchase involves a team of professionals. Here’s a breakdown of who they are and what they do, so you know who to contact and when."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactsData.map((contact) => (
          <Card key={contact.role} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              <contact.icon className="size-10 text-primary" />
              <CardTitle className="text-xl">{contact.role}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {contact.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="size-4 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
