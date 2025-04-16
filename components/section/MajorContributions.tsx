import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Zap } from 'lucide-react';
import Link from 'next/link';

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
                <Link
                  href="https://www.sciencedirect.com/science/article/pii/S0019850124000646?via%3Dihub"
                  className="hover:underline cursor-pointer"
                >
                  Acceptance of novel terminology in the field of marketing
                </Link>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Introduced new terminology in marketing management through his
              research published in the Journal of Industrial Marketing
              Management (Q1, A* journal), which identifies key drivers of
              marketing innovation.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div>
              <CardTitle className="">
                <Link
                  href="https://link.springer.com/journal/13162/updates/26631600"
                  className="hover:underline cursor-pointer"
                >
                  An unique award-winning matrix
                </Link>
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
              <CardTitle>
                {' '}
                <Link
                  href="https://www.youtube.com/watch?v=-izGxlxyZHw"
                  className="hover:underline cursor-pointer"
                >
                  Forest Bio-Residue Briquetting Machine
                </Link>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              In this project, he and his team developed an affordable, manually
              operated technology to convert forest bio-residue and pine leaves
              into energy briquettes. This product is energy-dense, requires no
              mixing or heating, and offers year- round livelihood opportunities
              for forest dwellers.
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
