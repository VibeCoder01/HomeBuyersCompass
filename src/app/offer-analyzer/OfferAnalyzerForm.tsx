'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { analyzeOffer, type AnalyzeOfferOutput } from '@/ai/flows/offer-analyzer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  propertyFeatures: z
    .string()
    .min(20, { message: 'Please provide more details about the property features.' }),
  marketConditions: z
    .string()
    .min(10, { message: 'Please provide more details about the market conditions.' }),
  financialSituation: z
    .string()
    .min(10, { message: 'Please provide more details about your financial situation.' }),
  askingPrice: z.coerce.number().positive({ message: 'Please enter a valid asking price.' }),
});

type FormValues = z.infer<typeof formSchema>;

export function OfferAnalyzerForm() {
  const [analysis, setAnalysis] = useState<AnalyzeOfferOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyFeatures: '',
      marketConditions: '',
      financialSituation: '',
      askingPrice: undefined,
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzeOffer(values);
      setAnalysis(result);
    } catch (error) {
      console.error('Error analyzing offer:', error);
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: 'There was an error analyzing your offer. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Property Details</CardTitle>
          <CardDescription>Enter the information for analysis.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="askingPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asking Price (£)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 300000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyFeatures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Features</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 3-bed semi-detached, recently renovated kitchen, small garden, needs new windows..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marketConditions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Market Conditions</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Prices are falling, properties are on the market for 3 months on average..."
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="financialSituation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Financial Situation</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Stable job, 15% deposit, no chain, mortgage in principle agreed..."
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze Offer'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="flex items-center justify-center">
        {isLoading && (
          <div className="text-center text-muted-foreground">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-lg">Our AI is analyzing the data...</p>
            <p>This may take a moment.</p>
          </div>
        )}
        {analysis && (
          <Card className="w-full bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-4 text-primary">
                <Lightbulb className="size-8" />
                <CardTitle className="text-2xl text-primary">AI-Powered Suggestion</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Suggested Offer Price</p>
                <p className="text-4xl font-bold text-primary">
                  {new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP',
                    maximumFractionDigits: 0,
                  }).format(analysis.suggestedOfferPrice)}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Reasoning</p>
                <p className="mt-1 text-foreground whitespace-pre-wrap">{analysis.reasoning}</p>
              </div>
              <p className="text-xs text-muted-foreground italic">
                Disclaimer: This is an AI-generated suggestion and should be used as a guide only. Always consult with your solicitor and surveyor before making a final decision.
              </p>
            </CardContent>
          </Card>
        )}
        {!isLoading && !analysis && (
            <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                <Lightbulb className="mx-auto h-12 w-12" />
                <p className="mt-4 text-lg font-semibold">Your analysis will appear here</p>
                <p>Fill out the form to get started.</p>
            </div>
        )}
      </div>
    </div>
  );
}
