import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Award } from 'lucide-react';
import Link from 'next/link';

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
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary shrink-0" />
            </div>
            <div>
              <Link
                href="https://ndtv.in/videos/national-teachers-award-award-announced-for-professor-vinay-sharma-watch-this-special-conversation-834059"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardTitle className="hover:underline cursor-pointer">
                  National Award to Teachers 2024, presented by the President of
                  India
                </CardTitle>
              </Link>
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
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Link
                href="https://link.springer.com/journal/13162/updates/26631600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardTitle className="hover:underline cursor-pointer">
                  Sheth Foundation Award
                </CardTitle>
              </Link>
              <CardDescription>2024</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Winner of Academy of Marketing Science (AMS) Review Doctoral
              Competition 2024 (Joint paper awarded – award received by the
              scholar).
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
              Awarded at 21st AIMS International Conference on Management in
              2024.
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
              Award received two times consecutively for developing a business
              model for the Sugar Industry of India. (2013, 2014)
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
