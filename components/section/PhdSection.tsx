import { Users } from 'lucide-react';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';

// 1. Extract table data as constants
const awardedPhdData = [
  {
    name: 'Neha',
    title: 'Concentric Innovation',
    year: '2025',
    status: 'Awarded',
  },
  {
    name: 'Dr. Kapil Joshi',
    title: 'POST DOCTORAL THESIS on Practically realising the Value Chain',
    year: '2021',
    status: 'Awarded',
  },
  {
    name: 'Anita Sengar',
    title: 'A Study of Evolving Perspectives of Rural Markets.',
    year: '2014',
    status: 'Awarded',
  },
  {
    name: 'Kapil Joshi',
    title:
      'Climate change mitigation through management of pine forest bio residue in N-W Himalayas.',
    year: '2014',
    status: 'Awarded',
  },
  {
    name: 'Kumkum Bharti',
    title:
      'Conceptualizing and measuring value co-creation for the bottom of the pyramid marketing in India.',
    year: '2015',
    status: 'Awarded',
  },

  {
    name: 'Rupesh Kumar',
    title:
      'Analysis of sustainable supply chain management practices in Indian manufacturing industries.',
    year: '2012',
    status: 'Awarded',
  },

  {
    name: 'Ritika Mahajan',
    title:
      'Post Graduate Management Education in India: Growth, Relevance and Direction.',
    year: '2014',
    status: 'Awarded',
  },
  {
    name: 'Asha Upawanshi',
    title:
      'A Study of Credit related Experiences of Farmer Household in Vidharbha Region of India.',
    year: '2011',
    status: 'Awarded',
  },
  {
    name: 'Piyush Seth',
    title:
      'An Empirical Study of Effects of ICT enabled Business Development Opportunities on the Capability Development of Rural Population.',
    year: '2011',
    status: 'Awarded',
  },
  {
    name: 'Sumit Mishra',
    title:
      'Value realization in marketing theory: An ancient Indian perspective.',
    year: '2013',
    status: 'Awarded',
  },
  {
    name: 'Shashi Kant',
    title:
      'A Study of Organizational Evidence of Gandhian Management Perspective with special reference to BHEL.',
    year: '2013',
    status: 'Awarded',
  },
  {
    name: 'Farhan Mustafa',
    title:
      'Marketing pervasiveness driven by belief and ethics based marketing practices',
    year: '2017',
    status: 'Awarded',
  },
  {
    name: 'Vijay Kr. Sharma',
    title:
      'Study and Analysis of Health Care Supply Chain Performance with CRM Considerations',
    year: '2017',
    status: 'Awarded',
  },
];

const ongoingPhdData = [
  {
    name: 'Manvi Goel',
    title: `A marketers' Perspective on Integrated Marketing Communication through the lenses of Linguistic Relativity`,
    year: '2019',
    status: 'Ongoing',
  },
  {
    name: 'Rakesh G Nair',
    title:
      'Growers Insights on Branding and Marketing of Plant-based Immunomodulators in Indian Himalayan Region',
    year: '2020',
    status: 'Ongoing',
  },
  {
    name: 'Ariba Anjum',
    title: `Marketing Saga of Universally Familiar Products: A Tale with an Inventors and Innovators Perspective`,
    year: '2021',
    status: 'Ongoing',
  },
  {
    name: 'Nandhakishore K',
    title: 'Brand IIT Éclat',
    year: '2021',
    status: 'Ongoing',
  },

  {
    name: 'Gajendra Giri',
    title: 'Actual Benefits of Contemporary Avtar of Traditional Process',
    year: '2021',
    status: 'Ongoing',
  },
  {
    name: 'Kritika Sharma',
    title: 'Technology and Traditional Knowledge',
    year: '2022',
    status: 'Ongoing',
  },
];

// 2. Create a reusable table component
interface PhdTableProps {
  data: { name: string; title: string; year: string; status: string }[];
  statusType: 'Awarded' | 'Ongoing';
}

function PhdTable({ data, statusType }: PhdTableProps) {
  return (
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
            {statusType === 'Awarded' ? 'Year' : 'Year Started'}
          </th>
          <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr className="border-b" key={idx}>
            <td className="px-4 py-3 text-sm">{row.name}</td>
            <td className="px-4 py-3 text-sm">{row.title}</td>
            <td className="px-4 py-3 text-sm">{row.year}</td>
            <td className="px-4 py-3 text-sm">
              <Badge
                className={
                  statusType === 'Awarded'
                    ? 'bg-green-100 text-green-800 hover:bg-green-100'
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-100'
                }
              >
                {row.status}
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// 3. Use the component in the main section
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
                <PhdTable data={awardedPhdData} statusType="Awarded" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ongoing" className="mt-4">
            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <PhdTable data={ongoingPhdData} statusType="Ongoing" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
