import { Check } from 'lucide-react';

export default function AcademicRoles() {
  return (
    <div className="   ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
        Academic Roles & Responsibilities
      </h2>

      <div className="space-y-4">
        {roles.map((role, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 flex-shrink-0">
              <Check className="h-5 w-5 text-emerald-600" />
            </div>
            <p className="text-gray-700">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const roles = [
  'He is presently the Chairperson Institute Academic Ethics Committee (June 2023 – Present).',
  'Have developed 2 Institutions, rejuvenated 2 institutions of National importance and developed large business organizations.',
  'Chairperson, Institute Academics Ethics Committee, IIT Roorkee (Jun 2023 – Present).',
  'Worked as Professor In-Charge of Training and Placements of IIT, Roorkee for 4 years and',
  'Have worked as In-charge of Placements for Department of Management Studies, IIT Roorkee for 10 years.',
  'Convener, Special Purchase Committee, IIT Roorkee (May 2023 – Present).',
  'Chairperson, Centre Academic Programme Committee, Centre for Sustainable Energy, IIT Roorkee.',
  'Chairperson, Committee for Evaluation of Faculty Performance Appraisal Report, Department of Humanities and Social Sciences, IIT Roorkee.',
  'Member Continuing Education Cell Advisory Committee.',
  'Member Distinguished Alumni Selection Committee.',
];
