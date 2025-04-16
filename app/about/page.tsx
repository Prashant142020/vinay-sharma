import React from 'react';

export default function page() {
  return (
    <div className="container mx-auto py-8 px-6 md:px-12">
      <section className=" ">
        <div className="px-3">
          <div className="grid gap-10">
            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/t3319BG6GdQ"
                title="Prof  Vinay Sharma"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              {/* <iframe
              className="h-full w-full"
              src="https://www.youtube.com/watch?v=t3319BG6GdQ"
              title="Introductory Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
            </div>
            <div className="grid gap-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Vinay Sharma
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none space-y-5">
                <p>
                  Dr Vinay Sharma is an acclaimed academician with over 24 years
                  of experience in management education. His area of expertise
                  includes strategic management, marketing and marketing
                  communications, branding, innovation and design thinking with
                  his firm focus on applying reflexivity in his works. Starting
                  his teaching career in the early 2000s, Dr Vinay joined the
                  Indian Institute of Technology, Roorkee in 2008 and is
                  currently a professor there at the Department of Management
                  Studies (DoMS) as well as a joint professor at the Department
                  of Design (DoD).
                </p>
                <p>
                  His academic tenure saw him teaching more than 15,000
                  undergraduate students and 4,000 post graduate students in
                  various subjects. In addition to that, Dr Vinay Sharma have
                  five courses running in National Programme on Technology
                  Enhanced Learning (NPTEL), a massive open online course (MOOC)
                  platform funded by the Ministry of Education, Government of
                  India, with over 50,000 enrollments amassed for his courses in
                  the last 10 years. The major subjects covered by Dr Vinay
                  Sharma include Strategic Management, Brand Management,
                  Innovation and Business Models, Integrated Marketing
                  Communication, Sales and Distribution Management, Product
                  Management and Business Ethics.
                </p>
                <p>
                  A practitioner of reflexivity in his works, Dr Vinay has
                  published and presented over 150 papers in various journals
                  and conferences. He has chaired multiple sessions in national
                  and international platforms, developed multiple case studies
                  and have conducted more than 100 workshops, seminars, Faculty
                  Development Programs (FDPs) and Management Development
                  Programs (MDPs) for CEOs, MDs and senior executives of
                  different organizations. Dr Vinay has also taught and
                  addressed students from other premium institutes in India and
                  abroad and have been member of Editorial boards of several
                  prestigious journals. He has guided 14 PhDs and one
                  Post-Doctoral Research so far with 8 PhDs currently being
                  pursued.
                </p>
                <p>
                  An astute administrator, Dr Vinay Sharma has been part of
                  various committees, councils and positions. He is part of
                  advisory and academic councils and of the Board of Management
                  of various institutions and bodies. He worked as the
                  Professor-in-charge of Training and Placements of IIT, Roorkee
                  for 4 years from 2018 to 2022, a tenure during which the
                  institution reached and set new records in their placement
                  statistics. Dr Vinay Sharma is currently the Chairperson for
                  the Institute Academics Ethics Committee, IIT Roorkee and is
                  also part of different committees and councils within the
                  institution.
                </p>

                <p>
                  Dr Vinay Sharma has also contributed to and co-authored three
                  books, with the recent one titled &apos;Stop Predicting -
                  Revisit Life Lessons from Covid 19&apos; exploring the horrid
                  times of Covid-19 pandemic and the lessons it left behind. The
                  other two books are &apos;Masters Speak on Management
                  Education&apos; and &apos;Affordability for the Poor and
                  Profitability for the Provider&apos;. Along with his books, Dr
                  Vinay Sharma is an admirer of poetry and music and has written
                  multitudes of poems. His conviction to convert his research
                  acumen into practical applications, Dr Vinay Sharma has also
                  led different successful projects. The project titled
                  “Socio-Economic Value Creation through Forest Bio-Residue
                  Based Energy Generation in alignment with the UN’s SDG” is one
                  of the success stories featured by the National Mission on
                  Himalayan Studies (NMHS). Over the years, he and his team have
                  completed projects worth Rs. 2.6 crores which include both
                  sponsored and consultancy projects. Dr Vinay professional
                  experience of having worked in multiple industry prior to his
                  shift to academics have aided him with the ability to merge
                  the practical know-how with the academic learnings.
                </p>
                <p>
                  He has also received different awards and honors, a
                  recognition for his contributions to academia. In 2024, Dr
                  Vinay Sharma was awarded AIMS IBA outstanding Management
                  Researcher Award and his joint paper with his scholar was
                  awarded the Sheth Foundation Award – winner of Academy of
                  Marketing Science Review Doctoral Competition 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="   mt-30">
        {/* Employment Details Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 border-b pb-2">
            EMPLOYMENT DETAILS
          </h2>

          <div className="space-y-8">
            {/* IIT ROORKEE - PROFESSOR */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
              <div>
                <h3 className="font-semibold">
                  Employer: INDIAN INSTITUTE OF TECHNOLOGY (IIT) ROORKEE
                </h3>
                <p className="font-medium">Post Held: PROFESSOR</p>
                <p className="text-gray-700 mt-1">
                  Nature of Work: Teaching (Marketing and Innovation), Research
                  (Market Opportunity Development). Also Managed Training and
                  Placements for all the Graduating Students of IIT Roorkee.
                </p>
              </div>
              <div className="text-right">
                <p>From: 16th December, 2019</p>
                <p>To: Presently Working</p>
              </div>
            </div>

            {/* IIT ROORKEE - ASSOCIATE PROFESSOR */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
              <div>
                <h3 className="font-semibold">
                  Employer: INDIAN INSTITUTE OF TECHNOLOGY (IIT) ROORKEE
                </h3>
                <p className="font-medium">Post Held: ASSOCIATE PROFESSOR</p>
                <p className="text-gray-700 mt-1">
                  Nature of Work: Teaching (Marketing and Innovation), Research
                  (Market Opportunity Development). Also Managed Training and
                  Placements for the Graduating all Students of IIT Roorkee.
                </p>
              </div>
              <div className="text-right">
                <p>From: 04-Apr-2014</p>
                <p>To: 16th December, 2019</p>
                <p>Duration: Years: 5 Months: 8 Days: 13</p>
              </div>
            </div>

            {/* IIT ROORKEE - ASSISTANT PROFESSOR */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
              <div>
                <h3 className="font-semibold">
                  Employer: INDIAN INSTITUTE OF TECHNOLOGY (IIT) ROORKEE
                </h3>
                <p className="font-medium">Post Held: ASSISTANT PROFESSOR</p>
                <p className="text-gray-700 mt-1">
                  Nature of Work: Teaching (Marketing and Innovation), Research
                  (Market Opportunity Development). Also Managed Training and
                  Placements for the Graduating Students of Department of
                  Management Studies, IIT, Roorkee.
                </p>
              </div>
              <div className="text-right">
                <p>From: 01-Jul-2008</p>
                <p>To: 03-Apr-2014</p>
                <p>Duration: Years: 5 Months: 9 Days: 2</p>
              </div>
            </div>

            {/* IILM LUCKNOW */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
              <div>
                <h3 className="font-semibold">Employer: IILM LUCKNOW</h3>
                <p className="font-medium">Post Held: PROFESSOR and DEAN</p>
                <p className="text-gray-700 mt-1">
                  Nature of Work: Teaching (Marketing), Research (Market
                  Opportunity Development) and Managing Admissions and General
                  Administration of the Institute.
                </p>
              </div>
              <div className="text-right">
                <p>From: 25-Aug-2007</p>
                <p>To: 30-Jun-2008</p>
                <p>Duration: Months: 10 Days: 5</p>
              </div>
            </div>

            {/* IMT GHAZIABAD */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
              <div>
                <h3 className="font-semibold">Employer: IMT GHAZIABAD</h3>
                <p className="font-medium">Post Held: ASSOCIATE PROFESSOR</p>
                <p className="text-gray-700 mt-1">
                  Nature of Work: Teaching (Marketing), Research (Market
                  Opportunity Development)
                </p>
              </div>
              <div className="text-right">
                <p>From: 25-Jun-2007</p>
                <p>To: 24-Aug-2007</p>
                <p>Duration: Months: 1 Days: 29</p>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Details Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 border-b pb-2">
            EDUCATIONAL DETAILS
          </h2>

          <div className="space-y-8">
            {/* Ph.D. */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
              <div>
                <h3 className="font-semibold">Qualification: Ph.D.</h3>
                <p className="text-gray-700">
                  Subjects: STRATEGIC MANAGEMENT AND BUSINESS OPPORTUNITY
                  DEVELOPMENT, &quot;HEALTH CARE TO THE RURAL POPULATION IN
                  INDIA&quot;
                </p>
                <p className="text-gray-700">College: UPTU, LUCKNOW</p>
                <p className="text-gray-700">University: UPTU</p>
              </div>
              <div className="text-right">
                <p className="font-medium">2006</p>
              </div>
            </div>

            {/* Master Degree MBA */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
              <div>
                <h3 className="font-semibold">
                  Qualification: Master Degree MBA
                </h3>
                <p className="text-gray-700">
                  Subjects: MARKETING MANAGEMENT, HUMAN RESOURCE MANAGEMENT,
                  FINANCIAL MANAGEMENT, PRODUCTION MANAGEMENT, ACCOUNTING
                  MANAGEMENT
                </p>
                <p className="text-gray-700">
                  College: PHILIPPINE CHRISTIAN UNIVERSITY, MANILA, PHILIPPINES
                </p>
                <p className="text-gray-700">University: PCU, PHILIPPINES</p>
              </div>
              <div className="text-right">
                <p className="font-medium">1994</p>
              </div>
            </div>

            {/* Graduation BSBA */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
              <div>
                <h3 className="font-semibold">
                  Qualification: Graduation BSBA
                </h3>
                <p className="text-gray-700">
                  Subjects: MARKETING, HUMAN RESOURCE MANAGEMENT, FINANCIAL
                  MANAGEMENT, PRODUCTION MANAGEMENT, ACCOUNTING MANAGEMENT
                </p>
                <p className="text-gray-700">College: VMUF, PHILIPPINES</p>
                <p className="text-gray-700">University: VMUF</p>
              </div>
              <div className="text-right">
                <p className="font-medium">1992</p>
              </div>
            </div>

            {/* Graduation (Additional Degree) */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
              <div>
                <h3 className="font-semibold">
                  Qualification: Graduation (Additional Degree)
                </h3>
                <p className="text-gray-700">Subjects: ECONOMICS</p>
                <p className="text-gray-700">College: IGNOU, NEW DELHI</p>
                <p className="text-gray-700">University: IGNOU</p>
              </div>
              <div className="text-right">
                <p className="font-medium">2010</p>
              </div>
            </div>

            {/* 12th */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
              <div>
                <h3 className="font-semibold">Qualification: 12th</h3>
                <p className="text-gray-700">
                  Subjects: BIOLOGY, PHYSICS, CHEMISTRY AND ENGLISH
                </p>
                <p className="text-gray-700">
                  College: KENDRIYA VIDYALAYA, BHEL, HARIDWAR
                </p>
                <p className="text-gray-700">University: CBSE</p>
              </div>
              <div className="text-right">
                <p className="font-medium">1989</p>
              </div>
            </div>

            {/* 10th */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
              <div>
                <h3 className="font-semibold">Qualification: 10th</h3>
                <p className="text-gray-700">
                  Subjects: SCIENCE, MATHEMATICS, SOCIAL SCIENCE, HINDI AND
                  ENGLISH
                </p>
                <p className="text-gray-700">
                  College: KENDRIYA VIDYALAYA, FAIZABAD
                </p>
                <p className="text-gray-700">University: CBSE</p>
              </div>
              <div className="text-right">
                <p className="font-medium">1987</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
