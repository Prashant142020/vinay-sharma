import React from 'react';

import { FileText } from 'lucide-react';

export default function page() {
  return (
    <div className="container mx-auto py-8 px-6 md:px-12">
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
            Sustainability: A Realist Evaluation. Social Science &amp; Medicine.
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

        {/* //  */}

        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sengar, A., Sharma, V., Joshi, K., Agrawal, R., Dwivedi, A.,
            Dwivedi, P., ... &amp; Barthwal, M. (2022). A fuzzy Analytic
            Hierarchy Process based analysis for prioritization of enablers to
            pine briquettes based energy generation in alignment with the United
            Nations&apos; sustainable development goals: Evidence from India.
            Biomass and Bioenergy, 165, 106580.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sengar, A., Sharma, V., Agrawal, R., Dwivedi, A., Dwivedi, P.,
            Dwivedi, Joshi, K., Dixit, G., Sharma, P.K., & Barthwal, M. (2020).
            Prioritization of barriers to energy generation using pine needles
            to mitigate climate change: Evidence from India. Journal of Cleaner
            Production, 275, 123840.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Dwivedi, A., Dwivedi, P., Joshi, K., Sharma, V., Sengar, A.,
            Agrawal, R., Sharma, P.K., Dixit, &amp; Barthwal, M. (2022). Local
            leader&apos;s impact on adoption of renewable energy generation
            technology by rural communities in the Himalayan region. Journal of
            Cleaner Production, 352, 131479.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Chandra, P., & Sharma, V. (2018). Marketing information system and
            strategies for sustainable and competitive medicinal and aromatic
            plants trade. Information Development, 0266666918802415.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Chandra, P., & Sharma, V. (2018). Strategic marketing prospects for
            developing sustainable medicinal and aromatic plants businesses in
            the Indian Himalayan region. Small-scale Forestry, 1-19.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Chandra, P., Sharma, V., & Kant, S. (2018). From commodity to brand:
            The country of origin branding perspective for Indian medicinal and
            aromatic plants. Business Strategy and Development, 1-9.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V. Chandra, P., & Agrawal, R. (2018). Disasters and
            medicinal and aromatic plants (MAPs): Preparing governance for
            resilient MAP based livelihood in Uttarakhand. In: Ha H., Fernando
            R.L.S., & Mahajan S.K. (eds.) Disaster Risk Management: Case Studies
            in South Asian Countries. Business Expert Press, New Jersey, United
            States.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Kant, S., Chandra, P., Sharma, V., & Agrawal, R. (2018). Gandhian
            management perspective for enhancing productivity and innovation in
            public sector organization. International Journal of Intelligent
            Enterprise. 6(1), 92-119.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mishra, S., & Sharma, V. (2018). Developing ambidexterity in
            children: Understanding social change through the social marketing
            framework. The Indian Journal of Social Work, 79(3), 327-350.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Chandra, P., & Sharma, V. (2018). Strategic Marketing Prospects for
            Developing Sustainable Medicinal and Aromatic Plants Businesses in
            the Indian Himalayan Region. Small-scale Forestry, 1-19.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mishra, S., Kant, S., Sharma, V., & Agrawal, R. (2017). Decisional
            dilemma in maintaining industrial peace in PSU in India. Emerald
            Emerging Markets Case Studies, 7(2), 1-15.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Bharti, K., Agrawal, R., & Sharma, V. (2017). Embrace, before it is
            too late! prediction of future studies on value co-creation.
            International Journal of Business Excellence, 14(1), 121-151.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nath, V., Agrawal, R., Gautam, A., & Sharma, V. (2017). Antecedents
            of green purchase intentions: A review and testing of hypothesis on
            Indian consumers. International Journal of Environment and
            Sustainable Development, 16(3), 297-314.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Dewangan, D. K., Agrawal, R., & Sharma, V. (2017). Enablers of
            eco-innovation to enhance the competitiveness of the Indian
            manufacturing sector: An integrated ISM-fuzzy MICMAC approach.
            International Journal of Business Innovation and Research, 13(4),
            475-501.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Goel, V., Agrawal, R., & Sharma, V. (2017). Factors affecting labour
            productivity: An integrative synthesis and productivity modelling.
            Global Business and Economics Review, 19(3), 299-322.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Madan, P., Sharma, V., & Seth, P. (2016). Capability&apos;s development
            through ICT enabled business opportunity development model of
            e-choupal. Journal of Business Economics and Management, 17(2),
            314-330.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Sengar, A., Agrawal, R., & Bharti, K. (2016). Values
            based business ethics along the entire value chain-a demonstration
            of the definition of marketing. In 2016 Global Marketing Conference
            at Hong Kong, 1169-1180.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sengar, A., Agrawal, R., Sharma, V., & Bharti, K. (2016). Modelling
            the drivers for rural (emerging) markets: A case of India. In 2016
            Global Marketing Conference at Hong Kong, 461-461.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mahajan, R., Agrawal, R., Sharma, V., & Nangia, V. (2016). Analysis
            of challenges for management education in India using total
            interpretive structural modelling. Quality Assurance in Education,
            24(1), 95-122.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Singhal, P., Agrawal, R., & Sharma, V. (2016). Significance of
            supply chain management in public distribution system. Journal of
            Supply Chain Management Systems, 5(1).
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Dewangan, D. K., Agrawal, R., & Sharma, V. (2016). An approach of
            modelling for humanitarian supplies. In Managing humanitarian
            logistics, 153-163. Springer, New Delhi.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Joshi, K. K., & Sharma, V. (2016). A study on passages to global
            climate change financing: Funding for a greener earth. Indian
            Forester, 142(2), 112-120.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V. & Joshi, K. K. (2016). Natural resource management and
            leadership. In Land Leadership and Local Resource Management,
            167-184. Mittal Publications, New Delhi, India.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mani, V., Agrawal, R., & Sharma, V. (2016). Impediments to social
            sustainability adoption in the supply chain: An ISM and MICMAC
            analysis in Indian manufacturing industries. Global Journal of
            Flexible Systems Management, 17(2), 135-156.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mani, V., Agrawal, R., Sharma, V., & Kavitha, T. N. (2016). Socially
            sustainable business practices in Indian manufacturing industries: A
            study of two companies. International Journal of Logistics Systems
            and Management, 24(1), 18-44.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Joshi, K., Sharma, V., & Mittal, S. (2015). Social entrepreneurship
            through forest bio residue briquetting: An approach to mitigate
            forest fires in pine areas of Western Himalaya, India. Renewable and
            Sustainable Energy Reviews, 51, 1338-1344.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Joshi, K. K., & Agrawal, R. (2015). Mitigating disasters
            through community involvement and righteous practices in Himalayan
            region of Uttarakhand, India. In Strategic Disaster Risk Management
            in Asia.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Joshi, K.K., & Sharma, V. (2015). An interpretative account of
            voyages to address climate change under United Nations framework
            convention on climate change: Gradual development of policies-
            prospects and protests. Ecology, Environment and Conservation, 2(2).
            957-967.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mishra, S., & Sharma, V. (2015). Excellence driven sustainability in
            business through the prism of Vedanta. Procedia-Social and
            Behavioral Sciences, 189, 351-355.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mani, V., Agrawal, R., & Sharma, V. (2015). Supply chain social
            sustainability: A comparative case analysis in Indian manufacturing
            industries. Procedia-Social and Behavioral Sciences, 189, 234-251.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mani, V., Agrawal, R., & Sharma, V. (2015). Social sustainability in
            the supply chain: Analysis of enablers. Management Research Review,
            38(9), 1016-1042.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Dewangan, D. K., Agrawal, R., & Sharma, V. (2015). Enablers for
            competitiveness of Indian manufacturing sector: An ISM-fuzzy MICMAC
            analysis. Procedia-Social and Behavioral Sciences, 189, 416-432.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Dewangan, D. K., Agrawal, R., & Sharma, V. (2015). Supplier
            selection for competitive advantage in supply chain: An integrated
            fuzzy analytic hierarchy process using simulation approach.
            International Journal of Automation and Logistics, 1(4), 370-399.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Kumar, R., Agrawal, R., & Sharma, V. (2015). IT enablement in sugar
            supply chain: an approach for farmers. International Journal of
            Business Performance and Supply Chain Modelling, 7(4), 360-381.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Bharti, K., Agrawal, R., & Sharma, V. (2015). Literature review and
            proposed conceptual framework. International Journal of Market
            Research, 57(4), 571-604.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Agrawal, R., &amp; Bharti, K. (2015). Lack of Integrity
            Moving the Goals Away. In Land and Disaster Management Strategies in
            Asia, 139-153. Springer, New Delhi.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Joshi, K.K. & Agrawal, R. (2014). Empowering Women
            through social entrepreneurship. Indian Management- The Journal of
            AIMA, 53, 58-63.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., & Joshi, K. K. (2014). Revoking historic water
            management system in Himalayan region through traditional practice
            and community involvement. International Journal of
            Multidisciplinary Research in Social and Management Sciences, 2(2),
            107-110.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Joshi, K.K., & Sharma, V. (2014). Administrative sensitivity: a
            fundamental key factor in disaster management. Journal on the
            Proceedings of 18th International Conference of Society of
            Operations Management, 967-971.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Joshi, K.K., & Sharma, V. (2014). Challenges in community based
            forest bio residue resource utilization for bio briquetting in the
            Western Himalayan region of Uttarakhand. SAARC Forestry.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Joshi, K.K., & Sharma, V. (2014). Genesis of people&apos;s perception of
            forest fires in Western Himalayan region of Uttarakhand, India:
            Causes and remedies. Journal of Trade Science, 10(11).
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Bharti, K., Sharma, V., Agrawal, R., & Sengar, A. (2014). Marketer&apos;s
            mindset: Key to develop bottom of the pyramid market.
            Procedia-Social and Behavioral Sciences, 133, 169-179.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Bharti, K., Agrawal, R., & Sharma, V. (2014). What drives the
            customer of world&apos;s largest market to participate in value
            co-creation? Marketing Intelligence & Planning, 32(4), 413-435.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Bharti, K., Agrawal, R., & Sharma, V. (2014). A Vedic view on the
            evolution of bottom of the pyramid in ancient India and role of
            marketers in its disintegration. VFIM Bi-Annual International
            Journal, 6(2), 22-31.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sengar, A., Sharma, V., Agrawal, R. & Bharti, K. (2014). Rural
            marketing: An answer to economic development in emerging markets.
            Indian Management, 53(1), 48-53.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sengar, A., Sharma, V., Agrawal, R., & Bharti, K. (2014).
            Prioritisation of barriers to rural markets: Integrating fuzzy logic
            and AHP. International Journal of Business and Emerging Markets,
            6(4), 371-394.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mahajan, R., Agrawal, R., Sharma, V., & Nangia, V. (2014).
            Identification and modelling of winners and qualifiers for
            management institutes: Evidence from India. International Journal of
            Management in Education, 9(1), 70-91.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mahajan, R., Agrawal, R., Sharma, V., & Nangia, V. (2014). Factors
            affecting quality of management education in India: An interpretive
            structural modelling approach. International Journal of Educational
            Management, 28(4), 379-399.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mahajan, R., Nangia, V.K. & Sharma, V., (2014). Management
            education: Is it only for Business? Asian Management Review, 9(3),
            52-57.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mani, V., Agrawal, R., & Sharma, V. (2014). It&apos;s time to change the
            system. Indian Management-The Journal of AIMA, 53(1), 42- 46.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nath, V., Kumar, R., Agrawal, R., Gautam, A., & Sharma, V. (2014).
            Impediments to adoption of green products: An ISM analysis. Journal
            of Promotion Management, 20(5), 501-520.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nath, V., Agrawal, R., Gautam, A., & Sharma, V. (2014). Green
            marketing promotion tools and Indian consumers&apos; green purchase
            intentions. International Journal of Business Competition and
            Growth, 3(4), 275-291.
          </p>
        </li>

        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Kumar, R., Agrawal, R., & Sharma, V. (2014). Barriers to
            E-application in agrifood supply chain. In Encyclopaedia of Business
            Analytics and Optimization, 227-240. IGI Global.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Bharti, K., Agrawal, R. & Sharma, V. (2013). Will value co-creation
            help bottom of the pyramid development? Indian Management, 52(7),
            26-29.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Bharti, K., Agrawal, R., Sharma, V., & Sengar, A. (2013). Innovative
            product development at the bottom of the pyramid. International
            Journal of Spirituality and Organization Leadership, 1(2), 50-61.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Bharti, K., Sharma, V. & Agrawal, R. (2013). Ability, willingness
            and information & communication technology: means to uplift bottom
            of the pyramid. International Conference on Research in Marketing,
            Department of Management Studies, Indian Institute of Technology,
            Delhi. (21-22 December). Springer Publication.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Joshi, K. K., & Sharma, V. (2013). Concrete heaps to carpet green
            through people&apos;s participation. Success stories in mountain
            ecosystem management, SAARC Forestry, 34-42.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., & Joshi, K. (2013). &quot;Nature reclaims: locked in growth
            Patterns—Revisiting Land, Water and Disasters on the Banks of Ganges
            in the Hills of Uttarakhand, India&quot;, (Springer).
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Agrawal, R., Mahajan, R., & Sengar, A. (2013). &quot;Role of
            qualitative research methodology in radical researches&quot;,
            International Journal of Business and Management Studies,2(1),
            239-250.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Madan, P., & Seth, P. (2013). Capability development of
            customers: a globally viable business. Strategic Adoption of
            Technological Innovations, 93.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Kumar, R., Agrawal, R., & Sharma, V. (2013). E-applications in
            Indian agri-food supply chain: Relationship among enablers. Global
            business review, 14(4), 711-727.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Kumar, R., Nath, V., Agrawal, R. & Sharma, V. (2013). Performance
            measurement of sugar supply chain. Journal of Management
            Research-SCMS Noida, 1(1), 3-14
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nath, V., Kumar, R., Agrawal, R., Gautam, A., & Sharma, V. (2013).
            Consumer adoption of green products: Modelling the enablers. Global
            business review, 14(3), 453-470
          </p>
        </li>

        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Mahajan, R., Nangia, V.K. & Sharma, V. (2012). Management education
            landscape in India: Issues, challenges and strategies, AIMA Journal
            of Management and Research, 6(4/4).
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nangia, V.K., Sharma, V., & Mahajan, R. (2012). Postgraduate
            management education in India- a researcher&apos;s perspective, Indore
            Management Journal-Special Issue, 309-326.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nath, V., Kumar, R., Agrawal, R., Gautam, A., & Sharma, V. (2012).
            Green behaviors of Indian consumers. International Journal of
            Research in Management, Economics and Commerce, 2(11), 488-498.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nath, V., Agrawal, R., Sharma, V., & Gautam, A. (2012). Peer
            influence and green purchase intentions. Research and Sustainable
            Business, 51, 750.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nath, V., Agrawal, R., Gautam, A., & Sharma, V. (2012). A framework
            for green product adoption by Indian consumers. International
            Journal of Research in Computer Application and Management, 2(5),
            1-7.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Seth, P., & Niyazi, S. (2012). Blue ocean strategy: A
            vehicle for entrepreneurship. Advancing Technologies for Asian
            Business and Economics: Information Management Developments:
            Information Management Developments, 198.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Dwivedi, P., & Seth, P. (2013). Capability Approach: A
            Prospective Basis for Measuring the Entrepreneurial Development
            Schemes. In Business, Technology, and Knowledge Management in Asia:
            Trends and Innovations, 226-233. IGI Global.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Seth, P., & Niyazi, S. (2012). Capability enhancement of
            women through information technology to reduce poverty, inequality
            and radical feminism. International Journal of Asian Business and
            Information Management (IJABIM), 3(1), 1-10.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Dwivedi, P., & Seth, P. (2012). Capability Approach: A
            prospective basis for measuring the entrepreneurial development
            schemes. In P. Ordóñez de Pablos, Business, Technology, and
            Knowledge Management in Asia: Trends and Innovations, 226-233. IGI
            Global.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., & Seth, P. (2011). Effective Public Private Partnership
            through E-Governance Facilitation. Computer & Communications
            Sciences, 34(1), 15-25.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Dwivedi, P., & Seth, P. (2011). Airports and
            productivity. International Journal of Aviation Management, 1(1-2),
            105-123.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V. (2010). Public private partnerships: a knowledge economy
            based mode of market and business opportunity development for rural
            development at large. Journal of Administration and Governance, a
            Journal of Network of Asia Pacific Schools of Public Administration
            and Governance (JOAAG), 4(1), 72-85.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Seth, P., & Niyazi, S. (2010). Blue ocean strategy: A
            vehicle for entrepreneurship development and economic growth in
            rural areas. International Journal of Asian Business and Information
            Management (IJABIM), 1(1), 32-41.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Dwivedi, P., & Seth, P. (2009). The role of
            e-facilitation (ICTs) in economic development of the rural
            population. International Journal of Electronic Governance, 2(2-3),
            277-287.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V. (2006). Motivation absorbs magnitude: An Analysis of
            health care service of Kumbh Mela. Chinese Public Administration
            Review, 6(1/2), 1-7.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V. (2006). E-governance-A carrier of societal development:
            Developing business opportunities for the rural poor in the state of
            Uttar Pradesh a province in India. Chinese Public Administration
            Review, 3(3/4), 13-22.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Pathak, R. D., Vinay, S., Zafar, H., & Nidhi, G. (2004).
            E-governance for poverty alleviation with special reference to Uttar
            Pradesh-a state in India. Chinese Public Administration Review
            (CPAR), 3(3/4).
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., & Sengar, A. (2012). Rural Marketing: A conceptual view.
            Fourth International Conference on Excellence in Research and
            Education, by Indian Institute of Management, Indore. Published in
            Indore Management Journal (Special Issue): Proceedings of Conference
            on Excellence in Research and Education, IIM Indore, on May 10-13,
            2012, (ISSN No: 0975&apos;1653).
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nangia, V.K., Sharma, V., & Mahajan, R. (2012). Emerging Issues in
            Economy and Business Management Education in India: Retrospect and
            Prospect. In Management Education in India: Issues and Challenges.
            (Bookwell Publishers, Delhi) (ISBN No: 978-93-80574-26-2), Book
            Chapter, Conference Book, Edited by Kanika T Bhal, N P Singh, Prem
            Vrat, and Prabhat K Datta, Emerging Issues in Economy and Business
            Management Education in India&apos;s experience and strategies for the future, 183&apos;190.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., Agrawal, R., Mahajan, R., & Sengar, A. (2012). Role of
            qualitative research methodology in radical researches. Journal of
            International Education Research (JIER), 8(4), 379-386.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., & Mahajan, R. (2012). Quality of postgraduate
            management education in India- a researcher&apos;s perspective, Indore
            Management Journal-Special Issue, 309-326.
          </p>
        </li>
      </ol>
    </div>
  );
}
