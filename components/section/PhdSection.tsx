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
                      <td className="px-4 py-3 text-sm"> Dr. Kapil Joshi</td>
                      <td className="px-4 py-3 text-sm">
                        POST DOCTORAL THESIS on Practically realising the Value
                        Chain
                      </td>
                      <td className="px-4 py-3 text-sm">2021</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Awarded
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm"> Anita Sengar</td>
                      <td className="px-4 py-3 text-sm">
                        A Study of Evolving Perspectives of Rural Markets.
                      </td>
                      <td className="px-4 py-3 text-sm">2014</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Awarded
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Kapil Joshi</td>
                      <td className="px-4 py-3 text-sm">
                        Climate change mitigation through management of pine
                        forest bio residue in N-W Himalayas.
                      </td>
                      <td className="px-4 py-3 text-sm">2015</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Awarded
                        </Badge>
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm"> Kumkum Bharti</td>
                      <td className="px-4 py-3 text-sm">
                        Conceptualizing and measuring value co-creation for the
                        bottom of the pyramid marketing in India.
                      </td>
                      <td className="px-4 py-3 text-sm">2019</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Awarded
                        </Badge>
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm"> Kumkum Bharti</td>
                      <td className="px-4 py-3 text-sm">
                        Conceptualizing and measuring value co-creation for the
                        bottom of the pyramid marketing in India.
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
                      <td className="px-4 py-3 text-sm">Manvi Goel</td>
                      <td className="px-4 py-3 text-sm">
                        A marketers&apos; Perspective on Integrated Marketing
                        Communication through the lenses of Linguistic
                        Relativity
                      </td>
                      <td className="px-4 py-3 text-sm">2019</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          Ongoing
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Rakesh G Nair</td>
                      <td className="px-4 py-3 text-sm">
                        Growers Insights on Branding and Marketing of
                        Plant-based Immunomodulators in Indian Himalayan Region
                      </td>
                      <td className="px-4 py-3 text-sm">2020</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          Ongoing
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Ariba Anjum</td>
                      <td className="px-4 py-3 text-sm">
                        Marketing Saga of Universally Familiar Products: A Tale
                        with an Inventors and Innovators Perspective
                      </td>
                      <td className="px-4 py-3 text-sm">2021</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          Ongoing
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Nandhakishore K</td>
                      <td className="px-4 py-3 text-sm">Brand IIT Éclat</td>
                      <td className="px-4 py-3 text-sm">2021</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          Ongoing
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Neha</td>
                      <td className="px-4 py-3 text-sm">
                        Celebrity Homologation of Celebrity endorsement
                      </td>
                      <td className="px-4 py-3 text-sm">2021</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          Ongoing
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Gajendra Giri</td>
                      <td className="px-4 py-3 text-sm">
                        Actual Benefits of Contemporary Avtar of Traditional
                        Process
                      </td>
                      <td className="px-4 py-3 text-sm">2021</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          Ongoing
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm">Kritika Sharma</td>
                      <td className="px-4 py-3 text-sm">
                        Technology and Traditional Knowledge
                      </td>
                      <td className="px-4 py-3 text-sm">2022</td>
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
