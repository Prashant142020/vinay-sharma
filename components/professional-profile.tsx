import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Award,
  BookOpen,
  Briefcase,
  Building,
  Clock,
  FileText,
  GraduationCap,
  Users,
} from 'lucide-react';

// 1. Extract education data as a constant array
const educationData = [
  {
    qualification: '10th',
    subjects: 'SCIENCE, MATHEMATICS, SOCIAL SCIENCE, HINDI AND ENGLISH',
    college: 'KENDRIYA VIDYALAYA, FAIZABAD',
    university: 'CBSE',
    year: '1987',
  },
  {
    qualification: '12th',
    subjects: 'BIOLOGY, PHYSICS, CHEMISTRY AND ENGLISH',
    college: 'KENDRIYA VIDYALAYA, BHEL, HARIDWAR',
    university: 'CBSE',
    year: '1989',
  },
  {
    qualification: 'Graduation BSBA',
    subjects:
      'MARKETING, HUMAN RESOURCE MANAGEMENT, FINANCIAL MANAGEMENT, PRODUCTION MANAGEMENT, ACCOUNTING MANAGEMENT',
    college: 'VMUF, PHILIPPINES',
    university: 'VMUF',
    year: '1992',
  },
  {
    qualification: 'Master Degree MBA',
    subjects:
      'MARKETING MANAGEMENT, HUMAN RESOURCE MANAGEMENT, FINANCIAL MANAGEMENT, PRODUCTION MANAGEMENT, ACCOUNTING MANAGEMENT',
    college: 'PHILIPPINE CHRISTIAN UNIVERSITY, MANILA, PHILIPPINES',
    university: 'PCU, PHILIPPINES',
    year: '1994',
  },
  {
    qualification: 'Ph.D.',
    subjects:
      'STRATEGIC MANAGEMENT AND BUSINESS OPPORTUNITY DEVELOPMENT, "HEALTH CARE TO THE RURAL POPULATION IN INDIA"',
    college: 'UPTU, LUCKNOW',
    university: 'UPTU',
    year: '2006',
  },
  {
    qualification: 'Graduation (Additional Degree)',
    subjects: 'ECONOMICS',
    college: 'IGNOU, NEW DELHI',
    university: 'IGNOU',
    year: '2010',
  },
];

// 2. Create a reusable EducationCard component
interface EducationCardProps {
  qualification: string;
  subjects: string;
  college: string;
  university: string;
  year: string;
}

function EducationCard({
  qualification,
  subjects,
  college,
  university,
  year,
}: EducationCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
      <div className="md:col-span-3">
        <h3 className="font-bold text-lg">Qualification: {qualification}</h3>
        <p>
          <strong>Subjects:</strong> {subjects}
        </p>
        <p>
          <strong>College:</strong> {college}
        </p>
        <p>
          <strong>University:</strong> {university}
        </p>
      </div>
      <div className="flex items-center justify-center md:justify-end">
        <span className="text-lg font-semibold bg-slate-100 px-4 py-2 rounded-full">
          {year}
        </span>
      </div>
    </div>
  );
}

// EMPLOYMENT DETAILS DATA & COMPONENT
const employmentData = [
  {
    title: 'PROFESSOR',
    period: '16th December, 2019 - Present',
    employer: 'INDIAN INSTITUTE OF TECHNOLOGY (IIT) ROORKEE',
    nature:
      'Teaching (Marketing and Innovation), Research (Market Opportunity Development). Also Managed Training and Placements for all the Graduating Students of IIT Roorkee.',
  },
  {
    title: 'ASSOCIATE PROFESSOR',
    period: '04-Apr-2014 - 16th December, 2019 (5 Years, 8 Months, 13 Days)',
    employer: 'INDIAN INSTITUTE OF TECHNOLOGY (IIT) ROORKEE',
    nature:
      'Teaching (Marketing and Innovation), Research (Market Opportunity Development). Also Managed Training and Placements for the Graduating all Students of IIT Roorkee.',
  },
  {
    title: 'ASSISTANT PROFESSOR',
    period: '01-Jul-2008 - 03-Apr-2014 (5 Years, 9 Months, 2 Days)',
    employer: 'INDIAN INSTITUTE OF TECHNOLOGY (IIT) ROORKEE',
    nature:
      'Teaching (Marketing and Innovation), Research (Market Opportunity Development). Also Managed Training and Placements for the Graduating Students of Department of Management Studies, IIT, Roorkee.',
  },
  {
    title: 'PROFESSOR and DEAN',
    period: '25-Aug-2007 - 30-Jun-2008 (10 Months, 5 Days)',
    employer: 'IILM LUCKNOW',
    nature:
      'Teaching (Marketing), Research (Market Opportunity Development) and Managing Admissions and General Administration of the Institute.',
  },
  {
    title: 'ASSOCIATE PROFESSOR',
    period: '25-Jun-2007 - 24-Aug-2007 (1 Month, 29 Days)',
    employer: 'IMT GHAZIABAD',
    nature: 'Teaching (Marketing), Research (Market Opportunity Development)',
  },
];

interface EmploymentCardProps {
  title: string;
  period: string;
  employer: string;
  nature: string;
}

function EmploymentCard({
  title,
  period,
  employer,
  nature,
}: EmploymentCardProps) {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="bg-slate-100 px-4 py-1 rounded-full text-sm font-medium inline-flex items-center mt-2 md:mt-0">
          {period}
        </div>
      </div>
      <p>
        <strong>Employer:</strong> {employer}
      </p>
      <p>
        <strong>Nature of Work:</strong> {nature}
      </p>
    </div>
  );
}

// 3. Use the component in the main section
export default function ProfessionalProfile() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-8">
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              EDUCATIONAL DETAILS
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <EducationCard key={idx} {...edu} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* EMPLOYMENT DETAILS */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Clock className="h-6 w-6" />
              EMPLOYMENT DETAILS
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {employmentData.map((job, idx) => (
                <EmploymentCard key={idx} {...job} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* TEACHING AND TRAINING */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              TEACHING AND TRAINING
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Teach Design Thinking, Innovation in relation to Product
                Management, Integrated Marketing Communication, Brand
                Management, Promotion Strategy and Strategic Management and have
                received a student feedback of 4.2-4.8 (90% of the feedbacks).
              </li>
              <li>
                Teaching Innovation and Entrepreneurship for Department of
                Management Studies, IIT Roorkee, EMBA course in association with
                online platform Coursera.
              </li>
              <li>
                Three courses on NPTEL:
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    Innovation, Business Models and Entrepreneurship (Over 46000
                    enrolments and 90% feedback)
                  </li>
                  <li>
                    Integrated Marketing Communication (Over 2500 enrolments)
                  </li>
                  <li>Product and Brand Management (Over 3300 enrolments)</li>
                </ul>
              </li>
              <li>
                Visiting faculty to premier Institutions in India like IIM
                Lucknow, IIM Raipur and IIM Kashipur and have delivered at CBS,
                Denmark as a visiting Fellow and U Mass Boston as guest
                speaker/faculty other than other Universities in Asia like
                University of SriJayawardenepura, Sri Lanka and Tribhuvan
                University, Nepal.
              </li>
              <li>
                Have delivered workshops and trained around 10,000 Faculty
                Members, Corporate Executives including Corporate Leaders on
                Innovations, Design Thinking, Spirituality and Market
                Opportunity Development.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ADMINISTRATION */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileText className="h-6 w-6" />
              ADMINISTRATION
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Have developed 2 Institutions, rejuvenated 2 institutions of
                National importance and developed large business organizations.
              </li>
              <li>
                Chairperson, Institute Academics Ethics Committee, IIT Roorkee
                (Jun 2023 – Present).
              </li>
              <li>
                Worked as Professor In-Charge of Training and Placements of IIT,
                Roorkee for 4 years.
              </li>
              <li>
                Have worked as In-charge of Placements for Department of
                Management Studies, IIT Roorkee for 10 years.
              </li>
              <li>
                Convener, Special Purchase Committee, IIT Roorkee (May 2023 –
                Present).
              </li>
              <li>
                Chairperson, Center Academic Programme Committee, Center for
                Sustainable Energy, IIT Roorkee.
              </li>
              <li>
                Chairperson, Committee for Evaluation of Faculty Performance
                Appraisal Report, Department of Humanities and Social Sciences,
                IIT Roorkee.
              </li>
              <li>Member Continuing Education Cell Advisory Committee.</li>
              <li>Member Distinguished Alumni Selection Committee.</li>
              <li>Member, DPC, Center for Sustainable Energy, IIT Roorkee.</li>
              <li>Convener, DFSC, Department of Design, IIT Roorkee.</li>
              <li>Member, DAPC, Department of Design, IIT Roorkee.</li>
              <li>Member, DPC, Department of Design, IIT Roorkee.</li>
              <li>
                Member, DPC, Department of Management Studies, IIT Roorkee.
              </li>
              <li>
                Chairman, DRC, Department of Management Studies, IIT Roorkee.
              </li>
              <li>
                Member, DPC, Department of Architecture and Planning, IIT
                Roorkee.
              </li>
              <li>Member, SPARK Committee, IIT Roorkee.</li>
              <li>
                Chairperson, SRC for 18 students from various departments
                including, Department of Management Studies, Department of
                Mechanical and Industrial Engineering, Department of
                Architecture and Planning, Department of Electrical Engineering
                and Department of Design.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* INDUSTRY */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              INDUSTRY
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p>
              Have worked with the largest read News Paper of the World, IT
              enabled services and projects of UNICEF.
            </p>
          </CardContent>
        </Card>

        {/* INSTITUTIONAL REVIVAL AND DEVELOPMENT */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Building className="h-6 w-6" />
              INSTITUTIONAL REVIVAL AND DEVELOPMENT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>NSI:</strong> I worked with the core team of 8 people
                nominated by Government of India for revival plan of National
                Sugar Institute Kanpur. The institution having worked for around
                80 years required a turnaround.
              </li>
              <li>
                <strong>NIAM:</strong> 2017, I as a Project Investigator along
                with a team of academicians nominated by Government of India
                worked for revival plan of National Institute of Agriculture
                Marketing, Jaipur. This institution having worked for around 30
                years required a turnaround.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CORE BUSINESS CONSULTING PROJECTS */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="h-6 w-6" />
              CORE BUSINESS CONSULTING PROJECTS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Have worked on 24 large feasibility consulting projects for
                business organizations of different status including
                Multinational Companies, Industrial Organizations, Hospitals,
                Universities and Schools.
              </li>
              <li>
                Have worked with 3 large organizations in the area of Media,
                Production and Consumer Goods for Market and Business
                Development.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ORGANIZATIONAL PROJECT */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="h-6 w-6" />
              ORGANIZATIONAL PROJECT
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p>
              Accomplished a project on spiritual orientation of organizations
              and its role in market prosperity development, proposing
              spirituality as the key element of sustainable businesses and
              sustainability as a strategy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
