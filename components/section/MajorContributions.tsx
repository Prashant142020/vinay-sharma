import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Zap } from 'lucide-react';

export default function MajorContributions() {
  return (
    <section id="awards" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">
            {' '}
            Major Contributions
          </h2>
        </div>
        <p className="text-muted-foreground">
          Major contributions to academic literature and research.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div>
              <CardTitle>
                Acceptance of novel terminology in the field of marketing:
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              He has introduced new terminology in marketing management through
              his research published in the Journal of Industrial Marketing
              Management. Along with his co-authors, he has identified key
              drivers of marketing innovation, including:
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div>
              <CardTitle className="">
                An unique award-winning matrix:
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground ">
              Prof. Sharma has conceptualized and introduced a unique matrix
              that deciphers the innovator and marketer roles in driving
              innovation success. This groundbreaking work has been recognized
              and accepted by the Academy of Marketing Science.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div>
              <CardTitle> Forest Bio-Residue Briquetting Machine</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This experiment spanned 12 years, during which we developed the
              machine, averaging 100 hours per year, totalling 1200 hours.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div>
              <CardTitle> Revival of Gharats</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This project focuses on reviving Gharats (watermills) by
              implementing low-cost technological upgrades, transforming them
              into self-sustaining ecosystems for producing medicinal and
              aromatic plant-based products for commercial markets. Each Gharat
              supports the livelihoods of approximately 1,000 people.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
