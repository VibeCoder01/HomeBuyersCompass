import { PageHeader } from '@/components/PageHeader';
import { OfferAnalyzerForm } from './OfferAnalyzerForm';

export default function OfferAnalyzerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="AI Offer Analyzer"
        description="Deciding on an offer price can be tricky. Fill in the details below, and our AI assistant will provide a suggested offer and reasoning to help you make an informed decision."
      />
      <OfferAnalyzerForm />
    </div>
  );
}
