import { Briefcase } from 'lucide-react';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';

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
      <div className="mt-8 space-y-8">
        <h3 className="text-xl font-semibold mb-4">Major Contributions</h3>
        <ul className="grid gap-3 md:grid-cols-2">
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <span>2.15 cr. International Salary for 1 student</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <span>1.8 cr. Domestic Salary for 3 students: </span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <span>11 Students got more than 1 cr. Salary</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <span> 32 International offers: </span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <span> 1416 job offers: </span>
          </li>
        </ul>
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
        <div className="mt-8 flex justify-center">
          <Button variant="outline">View All Administrative feats </Button>
        </div>
      </div>
    </section>
  );
}
