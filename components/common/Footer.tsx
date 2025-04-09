import { Mail, MapPin, Youtube } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto flex flex-col gap-6 py-8 px-6 md:flex-row md:items-center md:justify-between md:py-12 md:px-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Prof. Vinay Sharma</h2>
          <p className="text-sm text-muted-foreground">
            Professor of Marketing & Strategy, IIT Roorkee
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>vinay.sharma@ms.iitr.ac.in</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>
              First Floor,Department of Management Studies IIT Roorkee,
              Uttarakhand, India
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="icon">
            <Youtube />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button variant="outline" size="icon">
            <Mail />
            <span className="sr-only">Email</span>
          </Button>
          <Button variant="outline" size="icon">
            <MapPin />
            <span className="sr-only">ResearchGate</span>
          </Button>
          <Button variant={'outline'}>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Prof. vinay sharma. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
