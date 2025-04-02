import { Heart } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

export default function SpiritualitySection() {
  return (
    <section id="spirituality" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">
            Spirituality & Outreach
          </h2>
        </div>
        <p className="text-muted-foreground">
          Contributions to Indian Knowledge Systems and spiritual teachings.
        </p>
      </div>
      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Ramayana/Gita Teaching</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-medium mb-2">
                    Ramayana Discourse Series
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Weekly discourse series exploring the management and
                    leadership lessons from Ramayana, connecting ancient wisdom
                    with modern business practices.
                  </p>
                  <Button variant="outline" size="sm">
                    View Recordings
                  </Button>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Bhagavad Gita for Professionals
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Workshop series on applying Gita&apos;s teachings to
                    professional life, focusing on work-life balance, ethical
                    decision making, and leadership.
                  </p>
                  <Button variant="outline" size="sm">
                    View Course Materials
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Conference Papers on Indian Knowledge Systems
          </h3>
          <ul className="space-y-4">
            <li className="rounded-lg border p-4">
              <h4 className="font-medium">
                &quot;Ancient Indian Management Principles: Relevance in Modern
                Business Context&quot;
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                International Conference on Indian Knowledge Systems, 2022
              </p>
              <Button variant="link" size="sm" className="px-0">
                Download Paper
              </Button>
            </li>
            <li className="rounded-lg border p-4">
              <h4 className="font-medium">
                &quot;Sustainable Business Practices in Ancient Indian Texts:
                Lessons for Contemporary Organizations&quot;
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                World Sanskrit Conference, 2021
              </p>
              <Button variant="link" size="sm" className="px-0">
                Download Paper
              </Button>
            </li>
            <li className="rounded-lg border p-4">
              <h4 className="font-medium">
                &quot;Ethical Leadership Framework from Arthashastra:
                Applications in Modern Corporate Governance&quot;
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Indian Management Conclave, 2020
              </p>
              <Button variant="link" size="sm" className="px-0">
                Download Paper
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
