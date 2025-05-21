import { Briefcase } from 'lucide-react';
import React from 'react';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">
            {' '}
            Administrative Feats
          </h2>
        </div>
        <p className="text-muted-foreground">
          Professor In Charge Placement and Internship Cell at Institute level
          at IIT Roorkee from (May) 2018-2022 (July), where in his team
          initiated the placement and internship journey from 2017-18. Starting
          Point 1022 Job offers with (Overall) Average CTC 12.33 and Median CTC
          9.60 Lakh Rs. to Average CTC 20.57 and Median CTC 16.00 Lakh Rs in
          2021-22 With Graduate Employment 100% as per QS Data Sheet for
          Rankings 2023.
        </p>
      </div>
      <div className="mt-8 space-y-8">
        <h3 className="text-xl font-semibold mb-4">Major Contributions</h3>
        <ul className="grid gap-3 md:grid-cols-2">
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />

            <a
              href="https://www.business-standard.com/article/education/iit-roorkee-student-bags-record-salary-package-at-rs-2-15-crore-121122300987_1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span>2.15 cr. International Salary for 1 student</span>
            </a>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <a
              href="https://timesofindia.indiatimes.com/city/dehradun/at-rs-2-15-cr-iit-roorkee-student-bags-record-salary-offer/articleshow/88058216.cms?from=mdr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span>1.8 cr. Domestic Salary for 3 students: </span>
            </a>
          </li>

          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <a
              href="https://www.telegraphindia.com/edugraph/news/iit-roorkee-begins-placement-drive-for-2021-22-batch-with-strategy-change-for-pandemic/cid/1841581"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span>11 Students got more than 1 cr. Salary</span>
            </a>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <a
              href="https://www.business-standard.com/article/education/iit-roorkee-student-bags-record-salary-package-at-rs-2-15-crore-121122300987_1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span> 32 International offers: </span>
            </a>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <a
              href="https://www.cnbctv18.com/news/rs-215-crore-package-for-iit-roorkee-student-uber-offers-rs-205-crore-to-two-other-iitians-11674642.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span> 1416 job offers: </span>
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="mt-8">
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
      </div> */}
    </section>
  );
}
