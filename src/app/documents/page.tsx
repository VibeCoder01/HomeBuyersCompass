import { PageHeader } from '@/components/PageHeader';
import { documentsData } from '@/lib/data';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function DocumentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Key Document Library"
        description="Buying a home involves a lot of paperwork. Here’s a simple guide to the most important documents you’ll come across."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentsData.map((doc) => (
          <Card key={doc.title}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <FileText className="size-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                  <CardDescription className="mt-2">{doc.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
