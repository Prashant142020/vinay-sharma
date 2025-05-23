import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Leaf, Users, BookOpen, Building, HeartPulse } from 'lucide-react';

export default function ResearchProblems() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Research Problems Addressed
      </h1>

      <div className="space-y-8">
        {/* Forest Bio-Residue */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                Environmental Sustainability
              </Badge>
            </div>
            <CardTitle>
              1. Forest Bio-Residue Management & Value Chain Development
            </CardTitle>
            <CardDescription>
              Can forest bio-residues (e.g., Chir Pine needles) be sustainably
              converted into renewable energy while engaging communities,
              markets, and policymakers?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Contributions</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Developed a hydraulic briquetting machine (no
                  electricity/heating required) to convert pine needles into
                  energy briquettes.
                </li>
                <li>
                  Mitigates forest fires by removing flammable residues
                  (500,000+ hectares covered in Uttarakhand).
                </li>
                <li>
                  Promotes micro-entrepreneurship, especially for women, in
                  Himalayan communities.
                </li>
                <li>
                  Supported by NMHS (₹90.8 lakh pilot; ₹400 lakh final phase
                  pending) and integrated into Unnat Bharat Abhiyan.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Outcomes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Carbon credit potential through pine needle utilization.
                </li>
                <li>
                  Scalable model for &quot;Energy Generation Parks&quot; in
                  Himalayan regions.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Bottom of the Pyramid */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                Social Impact
              </Badge>
            </div>
            <CardTitle>
              2. Co-Creation of Value at the Bottom of the Pyramid (BoP)
            </CardTitle>
            <CardDescription>
              How can value co-creation empower BoP markets without
              exploitation?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Contributions</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Established that BoP success requires values-driven strategies
                  (not just profit).
                </li>
                <li>
                  Collaborated with Copenhagen Business School (Denmark) and FGV
                  (Brazil).
                </li>
                <li>
                  Won Noël Deerr Gold Medal (2013, 2014) for sugar industry
                  business models.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Outcomes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Framework for inclusive market development via partnerships
                  and community engagement.
                </li>
                <li>
                  Featured Paper: Bharti et al. (2015) – &quot;Literature review
                  and proposed conceptual framework&quot; (Impact Factor:
                  0.910).
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Management Education */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-purple-600" />
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                Education Reform
              </Badge>
            </div>
            <CardTitle>
              3. Reforming Postgraduate Management Education in India
            </CardTitle>
            <CardDescription>
              Addressing quality decline amid rapid institutional growth.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Contributions</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Authored book: Masters Speak on Management Education
                  (Bloomsbury, 2015).
                </li>
                <li>
                  Identified critical challenges via Interpretive Structural
                  Modelling (ISM).
                </li>
                <li>
                  Proposed strategies for faculty retention, industry alignment,
                  and ethical governance.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Outcomes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Framework for &quot;good management institutes&quot;
                  prioritizing leadership, faculty quality, and student
                  aspirations.
                </li>
                <li>
                  Key Paper: Mahajan et al. (2014) – &quot;Factors affecting
                  quality of management education in India&quot;.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Rural Markets */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Building className="h-5 w-5 text-amber-600" />
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                Market Development
              </Badge>
            </div>
            <CardTitle>4. Redefining Rural Markets</CardTitle>
            <CardDescription>
              Bridging disparities in defining and accessing rural markets.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Contributions</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Defined rural marketing as values-based strategies for
                  inclusive upliftment.
                </li>
                <li>
                  Case study on Patanjali Ayurved Ltd.&apos;s Blue Ocean
                  Strategy in rural India.
                </li>
                <li>Prioritized barriers using Fuzzy-AHP modelling.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Outcomes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Market development model integrating value chains for
                  agriculture and handicrafts.
                </li>
                <li>
                  Featured Case: Sengar et al. (2017) – &quot;Market development
                  through integrating value chains&quot;.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Healthcare */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <HeartPulse className="h-5 w-5 text-red-600" />
              <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                Healthcare Access
              </Badge>
            </div>
            <CardTitle>
              5. Affordable Healthcare for Rural Populations
            </CardTitle>
            <CardDescription>
              Achieving &quot;Health for All&quot; through viable public-private
              models.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Contributions</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Proposed 5-step &quot;Affordability-Profitability&quot; model
                  balancing low-cost care and investor viability.
                </li>
                <li>
                  Leveraged e-governance for PPP efficiency (e.g., Kumbh Mela
                  health services).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Outcomes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Framework for scalable healthcare access in Uttar Pradesh and
                  beyond.
                </li>
                <li>
                  Key Publication: BOOK – &quot;Affordability for the Poor and
                  Profitability for the Provider&quot; (VDM, 2009).
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
