// Offer Analyzer Genkit Flow
'use server';

/**
 * @fileOverview An AI-powered tool to suggest a suitable offer price for a property.
 *
 * - analyzeOffer - A function that handles the offer analysis process.
 * - AnalyzeOfferInput - The input type for the analyzeOffer function.
 * - AnalyzeOfferOutput - The return type for the analyzeOffer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeOfferInputSchema = z.object({
  propertyFeatures: z
    .string()
    .describe('Detailed description of the property features.'),
  marketConditions: z
    .string()
    .describe('Current market conditions in the property location.'),
  financialSituation: z
    .string()
    .describe('The buyers financial situation, including income, savings, and debts.'),
  askingPrice: z.number().describe('The asking price of the property.'),
});
export type AnalyzeOfferInput = z.infer<typeof AnalyzeOfferInputSchema>;

const AnalyzeOfferOutputSchema = z.object({
  suggestedOfferPrice: z
    .number()
    .describe('The suggested offer price for the property.'),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind the suggested offer price, considering market conditions, property features, and financial situation.'
    ),
});
export type AnalyzeOfferOutput = z.infer<typeof AnalyzeOfferOutputSchema>;

export async function analyzeOffer(input: AnalyzeOfferInput): Promise<AnalyzeOfferOutput> {
  return analyzeOfferFlow(input);
}

const analyzeOfferPrompt = ai.definePrompt({
  name: 'analyzeOfferPrompt',
  input: {schema: AnalyzeOfferInputSchema},
  output: {schema: AnalyzeOfferOutputSchema},
  prompt: `You are an expert real estate analyst helping first-time buyers determine a suitable offer price for a property.

  Consider the following information to suggest an offer price:

  Property Features: {{{propertyFeatures}}}
  Market Conditions: {{{marketConditions}}}
  Financial Situation: {{{financialSituation}}}
  Asking Price: {{{askingPrice}}}

  Based on this information, what is a suitable offer price for the property? Provide a detailed reasoning for your suggestion.
  Ensure that suggestedOfferPrice is a number.
`,
});

const analyzeOfferFlow = ai.defineFlow(
  {
    name: 'analyzeOfferFlow',
    inputSchema: AnalyzeOfferInputSchema,
    outputSchema: AnalyzeOfferOutputSchema,
  },
  async input => {
    const {output} = await analyzeOfferPrompt(input);
    return output!;
  }
);
