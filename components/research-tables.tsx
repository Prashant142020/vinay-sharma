// Table rendering component
interface ResearchTableProps {
  title: string;
  columns: string[];
  data: string[][];
}

function ResearchTable({ title, columns, data }: ResearchTableProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((col: string, idx: number) => (
                <th key={idx} className="border border-gray-300 px-4 py-2">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row: string[], i: number) => (
              <tr key={i}>
                {row.map((cell: string, j: number) => (
                  <td key={j} className="border border-gray-300 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Table data as constants
const projectInvestigatorColumns = [
  'S.No',
  'Title of Project',
  'Funding Agency',
  'Financial Outlay',
  'Year of Start & Total Period',
  'Name of Co-P.I. and other Investigators',
  'Status',
];
const projectInvestigatorData = [
  [
    '1.',
    'Outcome review and evaluation study of CSS NIAM Jaipur',
    'CSS NIAM Jaipur, Ministry of Agriculture, Govt. of India',
    '767150.00',
    '04/17/2017 to 09/30/2017',
    'Dr. Rajat Aggarwal',
    'Completed',
  ],
];

const coPiColumns = [
  'S.No',
  'Title of Project',
  'Funding Agency',
  'Financial Outlay',
  'Year of Start & Total Period',
  'Name of P.I. and other Investigators',
  'Status Started or completed or in progress',
];
const coPiColumns1 = [
  'S.No',
  'Title of Project',
  'Funding Agency',
  'Financial Outlay',
  'Year of Start & Total Period',
  'Name of P.I. and other Investigators',
  'Status Started or completed or in progress',
];
const coPiColumns2 = [
  'S.No',
  'Title of Project',
  'Funding Agency',
  'Financial Outlay',
  'Year of Start & Total Period',
  'Name of P.I. and other Investigators',
  'Status Started or completed or in progress',
];
const coPiData = [
  [
    '1.',
    'Need assessment of Ganga Water for rituals',
    'Motilal Bhimaji Trust',
    '67 lakhs',
    '2014 6 Months',
    'Dr. Rajat Agrawal',
    'Completed',
  ],
  [
    '2.',
    'A study on cost-benefit analysis of inland waterways',
    'Motilal Bhimaji Trust',
    '2.5 Lakhs',
    '2015',
    'Dr. Rajat Agrawal',
    'In Progress',
  ],
  [
    '3.',
    'Conducted 50 Full Day Workshops for BHEL, THDC, Power Grid Corporations for Middle to Top Executives',
    'BHEL, THDC, Power Grid Corp',
    '15 Lakhs',
    '2011-2018',
    'Prof. S. Ranganekar',
    'Ongoing',
  ],
  [
    '4.',
    'Socio and Commercialization aspect of Forest Bio-Residue Briquetting Machine',
    'Dept. of Forest, Govt. of Uttarakhand',
    '7.5 Lakhs',
    '01/05/2018 to 30/04/2019',
    'Prof. R.P. Saini HRED Prof. M.P. Sharma HRED',
    'Completed',
  ],
  [
    '5.',
    'Carrying Capacity Assessment of the Tourist Destination of Auli keeping Eco sensitivity of the place in mind',
    'Govt. of Uttarakhand',
    'Around 5 Lakhs',
    'April 2021, Mar 2022',
    'Dr. Rajat Agrawal',
    'Completed',
  ],
];

const coPiData1 = [
  [
    '1.',
    'Drudgery reduction and Income enhancement of the Handloom weavers through technology intervention in Tripura',
    'Department of Science & Technology, Government of India',
    'Rs.75,27,634',
    'June, 2024-May, 2027',
    'Dr.Bibhuti Ranjan Bhattachariya, IIT Roorkee (PI) Prof. Inderdeep Singh (Co-PI), Prof. Rajat Agrawal, IIT Roorkee (Co-PI) Dr. Mamoni Kalita & Prof. Sujoy Hazari, ICFAI University, Tripura (Co-PI)',
    'Ongoing',
  ],
  [
    '2.',
    'Participatory Action Research in Select Micro Watersheds in Uttarakhand',
    'IIT Roorkee',
    'Rs. 3750000',
    'August 2022-July 2025',
    'Professor S P Singh HSS (PI) Professor R P Saini HRED (Co-PI) Professor H C Pokhriyal Member BoG IIT Roorkee (Co-PI)',
    'Ongoing',
  ],
  [
    '3.',
    'Building a network on Social Entrepreneurship, Co-creation and Innovation with partners from Copenhagen Business School, Denmark, FGV-EAESP, Sao Paulo, Brazil VUZF University, Sofia Bulgaria and IMT, Ghaziabad, India',
    'Danish Innovation Council, Denmark',
    '500,000 DKK',
    '2014 1 Year',
    'Sudhanshu Rai Associate Professor Copenhagen Business School, Denmark Dr.Rajat Agrawal, DoMS, IIT R',
    'Completed',
  ],
  [
    '4.',
    'Developing Traditional Weaver Clusters near Roorkee Period of Two Years',
    'FIG-B Project Funded by IITR',
    'Rs. 3.50 Lakhs',
    '2014 2 Years',
    'Dr Rajat Agrawal, DoMS, IIT R Dr Z. Rahman, DoMS, IITR',
    'Completed',
  ],
  [
    '5.',
    'International Project entitled "Promoting the International dimensions of Research in Higher Educational Institutes"',
    'Funded by European Commission',
    'Not specified',
    '2014 1.5 years',
    'Professor P.K. Ghosh, Metallurgy Department Dr. Rajat Agrawal, DoMS, IIT R',
    'Completed',
  ],
  [
    '6.',
    'Mapping the transition in Knowledge Economy',
    'MCIT Govt. of India',
    '495 Lakhs',
    '07/01/2008 to 10/31/2011',
    'Prof. V.K. Nangia, Prof. S. Rangnekar, Dr.Rajat Agrawal, DoMS, IIT R',
    'Project Complete Carried Out as (Co-Adviser)',
  ],
  [
    '7.',
    'Ganga River Basin Environment Management Plan',
    'Government of India',
    'Not specified',
    '2011-2014',
    'Prof. Vinod Tare, IIT Kanpur Prof. I. M. Mishra, Prof. S. P. Singh',
    'A Team Member of IIT Consortium Team',
  ],
];

const coPiData2 = [
  [
    '1.',
    'Assessment of Domestic Violence and Formulation of its Preventive Measures in the Regions of Uttarakhand',
    'ICSSR',
    '20 Lakhs',
    '01/05/2018 to 30/04/2020',
    'Dr. Sujata Kar (Co-PI)',
    'Completed',
  ],
  [
    '2.',
    'Innovation for Rural & Societal Development using Traditional Medicinal and Aromatic Plants Based products of North-West Himalayan Region',
    'Department of Biotechnology, GOI',
    '74 Lakhs',
    '2019-Ongoing',
    'Dr. Rajat Agrawal (PI), Prof. Partha Roy DBSBE IIT R (Co-PI)',
    'Ongoing',
  ],
  [
    '3.',
    "Transforming Women's Livelihood through Revival of Gharaïs/Waternills and Associated Applications in the Hilly Regions of Uttarakhand",
    'ICSSR (Verbal approval received)',
    '6 Lakhs',
    'Aug 2023 - Present',
    '',
    'Ongoing',
  ],
  [
    '4.',
    "Socio-Economic Value Creation through Forest Bio-Residue Based Energy Generation in alignment with the UN's SDGs",
    'Ministry of Environment and Forests GOI',
    '90.80 Lakhs',
    'April 2019-March 2022',
    'Dr. Rajat Agrawal (Co-PI), Dr. Prasoon Dwivedi UPES Dehradun (Co-PI)',
    'Completed',
  ],
  [
    '5.',
    'Corporate Spirituals',
    'FIG-A IIT Roorkee',
    '2.5 Lakhs',
    '2009-2011',
    '',
    'Completed',
  ],
];

export default function ResearchTables() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <ResearchTable
        title="Details of Consultancy Projects as a Project Investigator:"
        columns={projectInvestigatorColumns}
        data={projectInvestigatorData}
      />
      <ResearchTable
        title="Details of Consultancy Projects as a Co-PI:"
        columns={coPiColumns}
        data={coPiData}
      />
      <ResearchTable
        title="Details of Sponsored Research Projects as a Co-PI:
"
        columns={coPiColumns1}
        data={coPiData1}
      />
      <ResearchTable
        title="Details of Sponsored Research Project as a Project Investigator:"
        columns={coPiColumns2}
        data={coPiData2}
      />
    </div>
  );
}
