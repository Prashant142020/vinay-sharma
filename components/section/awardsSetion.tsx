import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Award } from 'lucide-react';

export default function AwardsSetion() {
  return (
    <section id="awards" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Awards & Honors</h2>
        </div>
        <p className="text-muted-foreground">
          Recognition for excellence in research and academic contributions.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>
                National Award to Teachers 2024, presented by the President of
                India
              </CardTitle>
              <CardDescription>2024</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              A renowned expert in marketing, innovation, branding, and
              strategy, he is the only management professor from India to
              receive this prestigious recognition.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="flex h-12 w-12 items-center shrink-0 justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="">
                AIMS IBA Outstanding Management Researcher Award
              </CardTitle>
              <CardDescription>2024</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground ">
              Awarded for exceptional contributions to management research and
              academic excellence.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>Sheth Foundation Award</CardTitle>
              <CardDescription>2024</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Recognized for significant contributions to marketing theory and
              practice.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>Noël Deerr Gold Medal</CardTitle>
              <CardDescription>2013, 2014</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Awarded consecutively for outstanding research in sustainable
              business practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
