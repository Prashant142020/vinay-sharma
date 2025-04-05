import React from 'react';

import { BookOpen } from 'lucide-react';
import CourseSection from './courseSection';
import Image from 'next/image';

export default function TeachingSection() {
  return (
    <section id="teaching" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">
            Teaching & Courses
          </h2>
        </div>
        public/logo
        <p className="text-muted-foreground">
          Courses taught and educational contributions.
        </p>
      </div>
      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">NPTEL Courses</h3>
          <CourseSection />
          {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Product and Brand Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/hero.jpg?height=150&width=300"
                  alt="Course Thumbnail"
                  width={300}
                  height={150}
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive course covering product lifecycle and brand
                  strategy development.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Course
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Strategic Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/hero.jpg?height=150&width=300"
                  alt="Course Thumbnail"
                  width={300}
                  height={150}
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced course on strategic planning and competitive
                  advantage in global markets.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Course
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Rural Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/hero.jpg?height=150&width=300"
                  alt="Course Thumbnail"
                  width={300}
                  height={150}
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Specialized course on marketing strategies for rural markets
                  and emerging economies.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Course
                </Button>
              </CardContent>
            </Card>
          </div> */}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Visiting Faculty & Fellow
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-2">
                {/* <span className="font-semibold text-xs">IIM-B</span> */}
                <Image
                  src="/logo/iimb.svg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <span className="text-sm">IIM Bangalore</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-2">
                {/* <span className="font-semibold text-xs">IIM-A</span>  */}
                <Image
                  src="/logo/iima.svg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <span className="text-sm">IIM Ahmedabad</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-2">
                {/* <span className="font-semibold text-xs">CBS</span> */}
                <Image
                  src="/logo/cbs.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <span className="text-sm">CBS Denmark</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-2">
                {/* <span className="font-semibold text-xs">UMB</span> */}
                <Image
                  src="/logo/ub.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <span className="text-sm">U Mass Boston</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
