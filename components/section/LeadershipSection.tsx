import { Briefcase } from 'lucide-react';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Leadership</h2>
        </div>
        <p className="text-muted-foreground">
          Administrative and leadership roles.
        </p>
      </div>
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Placement Cell at IIT Roorkee</CardTitle>
            <CardDescription>2018-2022</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-6">
              Led the transformation of the placement cell, implementing
              innovative strategies to enhance student placement opportunities
              and industry connections.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-muted p-4 text-center">
                <div className="text-2xl font-bold">67%</div>
                <p className="text-xs text-muted-foreground">
                  Increase in Placements
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 text-center">
                <div className="text-2xl font-bold">₹20.57L</div>
                <p className="text-xs text-muted-foreground">Average CTC</p>
              </div>
              <div className="rounded-lg bg-muted p-4 text-center">
                <div className="text-2xl font-bold">120+</div>
                <p className="text-xs text-muted-foreground">New Companies</p>
              </div>
              <div className="rounded-lg bg-muted p-4 text-center">
                <div className="text-2xl font-bold">98%</div>
                <p className="text-xs text-muted-foreground">Placement Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
