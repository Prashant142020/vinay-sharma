import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function Journal() {
  return (
    <div className="container mx-auto  ">
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">
              Journal Publications
            </h2>
          </div>
        </div>

        {/* <hr /> */}
        <p className="text-muted-foreground">
          Contributions to Journal Publications in the field of marketing.
        </p>
      </div>
      <ol className="mt-8 list-decimal pl-6 space-y-6">
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Rishi, N., Sharma, V., Gupta, D. D., Singh, Y. P., & Agnihotri, R.
            (2024). Crisis-driven innovations in marketing. Industrial Marketing
            Management, 119, 135-146.
            <a
              href="https://doi.org/10.1016/j.indmarman.2024.04.008"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1016/j.indmarman.2024.04.008
            </a>
          </p>
        </li>

        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Goel, M., Sharma, V., & Gupta, O. (2024). Language and thought:
            Linguistic relativity in social marketing communication.
            International Journal of Consumer Studies, 48(3), e13041.
            <a
              href="https://doi.org/10.1111/ijcs.13041"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1111/ijcs.13041
            </a>
          </p>
        </li>

        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., & Nair, K. G. (2023). Unravelling the Creation of
            Community-Based Enterprises for Indigenous Medicinal Knowledge
            Sustainability: A Realist Evaluation. Social Science & Medicine.
            (Under Review)
          </p>
        </li>

        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mustafa, F., & Sharma, V. (2023). Factors enabling pervasiveness of
            belief and ethics-based marketing practice: an interpretive
            structural modeling approach. Journal of Islamic Marketing, 14(10),
            2429-2449.
            <a
              href="https://doi.org/10.1108/JIMA-11-2021-0362"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1108/JIMA-11-2021-0362
            </a>
          </p>
        </li>
      </ol>
      <div className="mt-5 flex justify-center">
        <Link href="/journal">
          <Button variant="outline">View All </Button>
        </Link>
      </div>

      {/* here 2nd */}

      <div className="space-y-4 mt-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">
              Conference Publications
            </h2>
          </div>
        </div>

        {/* <hr /> */}
        <p className="text-muted-foreground">
          Contributions to Conference Publications in the field of marketing.
        </p>
      </div>
      <ol className="mt-8 list-decimal pl-6 space-y-6">
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Gupta, D. D., Singh, Y. P., Neha, & Agnihotri, R. (2023,
            January). Crisis Driven Innovations in Marketing Processes
            [Conference session]. 6th Industrial Marketing Management Summit,
            University of Bamberg, Germany.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Goel, M., & Sharma, V. (2023, August). A Crisis lead Marketing
            Responsibility Expression – Can it be forever? [Poster session]
            American Marketing Association Summer Conference, San Francisco, CA,
            USA.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Neha., Agrawal, R. (2023). &apos;Reducing vulnerability
            with concentric technological interventions through cooperative
            re-building processes for consistent livelihood.&apos; An
            experimental learning in North-western Himalayas&apos;. Paper
            selected for presentation at the annual conference of the HDCA 2023
            at Sofia, Bulgaria.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Neha., Agrawal, R. (2023). &apos;&apos;Concentric
            Innovation for Reducing Vulnerability- A learning from Northwestern
            Himalayas&apos;&apos; Paper selected for presentation at the annual
            conference of the HDCA 2023 at Sofia, Bulgaria.
          </p>
        </li>
      </ol>
      <div className="mt-5 flex justify-center">
        <Link href="/conference">
          <Button variant="outline">View All </Button>
        </Link>
      </div>

      {/* here 3rd */}

      <div className="space-y-4 mt-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Case Studies</h2>
          </div>
        </div>

        {/* <hr /> */}
        <p className="text-muted-foreground">
          Contributions to Case Studies in the field of marketing.
        </p>
      </div>
      <ol className="mt-8 list-decimal pl-6 space-y-6">
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sengar, A., Sharma, V., & Agrawal R. (2017). Market development
            through integrating value chains – a case of Patanjali Food and
            Herbal Park. Emerald Emerging Markets Case Studies, 7(4), 1-22.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sengar A., Sharma V., Agrawal R., Jain N., & Jain, P. (2016). A case
            study of Patanjali Ayurved Ltd - Offering consumer products with
            &apos;a blue ocean strategy. Case Centre, Reference No. 316-0428-1.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V. (2011). Think people&apos;s development- Focus on means-
            build trust- Do business for ever-A case study on the strategic
            development of TATAs as an organization and their contribution in
            the societal and national development. European Case Clearing House
            posted on www.ecch.com.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nangia, V. K., Agarwal, R., Sharma, V., & Reddy, K. S. (2011).
            Conglomerate diversification through cross-continent acquisition:
            Vedanta weds Cairn India. Emerald Emerging Markets Case Studies,
            1(1), 1-15.
          </p>
        </li>
      </ol>
      <div className="mt-4 flex justify-center">
        <Link href="/case-studies">
          <Button variant="outline">View All </Button>
        </Link>
      </div>
    </div>
  );
}
