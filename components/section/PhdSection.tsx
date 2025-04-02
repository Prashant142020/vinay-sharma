import { Users } from 'lucide-react';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';

export default function PhdSection() {
  return (
    <section id="students" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">PhD Supervision</h2>
        </div>
        <p className="text-muted-foreground">
          Doctoral students guided and their research topics.
        </p>
      </div>
      <div className="mt-8">
        <Tabs defaultValue="awarded" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="awarded">Awarded</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          </TabsList>
          <TabsContent value="awarded" className="mt-4">
            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Student Name
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Thesis Title
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Year
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Dr. Ananya Sharma</td>
                      <td className="px-4 py-3 text-sm">
                        Consumer Behavior in Rural Markets: A Study of FMCG
                        Products in Northern India
                      </td>
                      <td className="px-4 py-3 text-sm">2022</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Awarded
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Dr. Rajiv Mehta</td>
                      <td className="px-4 py-3 text-sm">
                        Sustainable Supply Chain Management in Emerging
                        Economies: Challenges and Opportunities
                      </td>
                      <td className="px-4 py-3 text-sm">2021</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Awarded
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Dr. Priya Patel</td>
                      <td className="px-4 py-3 text-sm">
                        Digital Marketing Strategies for Small Businesses in
                        Semi-Urban India
                      </td>
                      <td className="px-4 py-3 text-sm">2020</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Awarded
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Dr. Sanjay Kumar</td>
                      <td className="px-4 py-3 text-sm">
                        Innovation Adoption in Agricultural Communities: A Study
                        of Technology Diffusion
                      </td>
                      <td className="px-4 py-3 text-sm">2019</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Awarded
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ongoing" className="mt-4">
            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Student Name
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Thesis Title
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Year Started
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Vikram Singh</td>
                      <td className="px-4 py-3 text-sm">
                        AI-Driven Marketing Strategies for Rural Market
                        Penetration
                      </td>
                      <td className="px-4 py-3 text-sm">2022</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          Ongoing
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Meera Desai</td>
                      <td className="px-4 py-3 text-sm">
                        Sustainable Business Models in the Post-Pandemic Era: A
                        Study of Indian SMEs
                      </td>
                      <td className="px-4 py-3 text-sm">2021</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          Ongoing
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Arjun Reddy</td>
                      <td className="px-4 py-3 text-sm">
                        Digital Transformation of Traditional Retail: Challenges
                        and Opportunities
                      </td>
                      <td className="px-4 py-3 text-sm">2023</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          Ongoing
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
