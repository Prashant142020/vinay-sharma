export default function ResearchTables() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Table 1: Consultancy Projects as a Project Investigator */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Details of Consultancy Projects as a Project Investigator:</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">S.No</th>
                <th className="border border-gray-300 px-4 py-2">Title of Project</th>
                <th className="border border-gray-300 px-4 py-2">Funding Agency</th>
                <th className="border border-gray-300 px-4 py-2">Financial Outlay</th>
                <th className="border border-gray-300 px-4 py-2">Year of Start & Total Period</th>
                <th className="border border-gray-300 px-4 py-2">Name of Co-P.I. and other Investigators</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1.</td>
                <td className="border border-gray-300 px-4 py-2">
                  Outcome review and evaluation study of CSS NIAM Jaipur
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  CSS NIAM Jaipur, Ministry of Agriculture, Govt. of India
                </td>
                <td className="border border-gray-300 px-4 py-2">767150.00</td>
                <td className="border border-gray-300 px-4 py-2">04/17/2017 to 09/30/2017</td>
                <td className="border border-gray-300 px-4 py-2">Dr. Rajat Aggarwal</td>
                <td className="border border-gray-300 px-4 py-2">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 2: Consultancy Projects as a Co-PI */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Details of Consultancy Projects as a Co-PI:</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">S.No</th>
                <th className="border border-gray-300 px-4 py-2">Title of Project</th>
                <th className="border border-gray-300 px-4 py-2">Funding Agency</th>
                <th className="border border-gray-300 px-4 py-2">Financial Outlay</th>
                <th className="border border-gray-300 px-4 py-2">Year of Start & Total Period</th>
                <th className="border border-gray-300 px-4 py-2">Name of P.I. and other Investigators</th>
                <th className="border border-gray-300 px-4 py-2">Status Started or completed or in progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1.</td>
                <td className="border border-gray-300 px-4 py-2">Need assessment of Ganga Water for rituals</td>
                <td className="border border-gray-300 px-4 py-2">Motilal Bhimaji Trust</td>
                <td className="border border-gray-300 px-4 py-2">.67 lakhs</td>
                <td className="border border-gray-300 px-4 py-2">2014 6 Months</td>
                <td className="border border-gray-300 px-4 py-2">Dr. Rajat Agrawal</td>
                <td className="border border-gray-300 px-4 py-2">Completed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2.</td>
                <td className="border border-gray-300 px-4 py-2">
                  A study on cost-benefit analysis of inland waterways
                </td>
                <td className="border border-gray-300 px-4 py-2">Motilal Bhimaji Trust</td>
                <td className="border border-gray-300 px-4 py-2">2.5 Lakhs</td>
                <td className="border border-gray-300 px-4 py-2">2015</td>
                <td className="border border-gray-300 px-4 py-2">Dr. Rajat Agrawal</td>
                <td className="border border-gray-300 px-4 py-2">In Progress</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3.</td>
                <td className="border border-gray-300 px-4 py-2">
                  Conducted 50 Full Day Workshops for BHEL, THDC, Power Grid Corporations for Middle to Top Executives
                </td>
                <td className="border border-gray-300 px-4 py-2">BHEL, THDC, Power Grid Corp</td>
                <td className="border border-gray-300 px-4 py-2">15 Lakhs</td>
                <td className="border border-gray-300 px-4 py-2">2011-2018</td>
                <td className="border border-gray-300 px-4 py-2">Prof. S. Ranganekar</td>
                <td className="border border-gray-300 px-4 py-2">Ongoing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">5.</td>
                <td className="border border-gray-300 px-4 py-2">
                  Socio and Commercialization aspect of Forest Bio-Residue Briquetting Machine
                </td>
                <td className="border border-gray-300 px-4 py-2">Dept. of Forest, Govt. of Uttarakhand</td>
                <td className="border border-gray-300 px-4 py-2">7.5 Lakhs</td>
                <td className="border border-gray-300 px-4 py-2">01/05/2018 to 30/04/2019</td>
                <td className="border border-gray-300 px-4 py-2">Prof. R.P. Saini HRED Prof. M.P. Sharma HRED</td>
                <td className="border border-gray-300 px-4 py-2">Completed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">6.</td>
                <td className="border border-gray-300 px-4 py-2">
                  Carrying Capacity Assessment of the Tourist Destination of Auli keeping Eco sensitivity of the place
                  in mind
                </td>
                <td className="border border-gray-300 px-4 py-2">Govt. of Uttarakhand</td>
                <td className="border border-gray-300 px-4 py-2">Around 5 Lakhs</td>
                <td className="border border-gray-300 px-4 py-2">April 2021, Mar 2022</td>
                <td className="border border-gray-300 px-4 py-2">Dr. Rajat Agrawal</td>
                <td className="border border-gray-300 px-4 py-2">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 3: Sponsored Research Projects as a Co-PI */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Details of Sponsored Research Projects as a Co-PI:</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">S.No</th>
                <th className="border border-gray-300 px-4 py-2">Title of Project</th>
                <th className="border border-gray-300 px-4 py-2">Funding Agency</th>
                <th className="border border-gray-300 px-4 py-2">Financial Outlay</th>
                <th className="border border-gray-300 px-4 py-2">Year of Start & Total Period</th>
                <th className="border border-gray-300 px-4 py-2">Name of Co-P.I. and other Investigators</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">
                  Drudgery reduction and Income enhancement of the Handloom weavers through technology intervention in
                  Tripura
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Department of Science & Technology, Government of India
                </td>
                <td className="border border-gray-300 px-4 py-2">Rs.75,27,634</td>
                <td className="border border-gray-300 px-4 py-2">June, 2024-May, 2027</td>
                <td className="border border-gray-300 px-4 py-2">
                  Dr.Bibhuti Ranjan Bhattacharjya, IIT Roorkee (PI) Prof. Inderdeep Singh (Co-PI), Prof. Rajat Agrawal,
                  IIT Roorkee (Co-PI) Dr. Mamoni Kalita & Prof. Sujoy Hazari, ICFAI University, Tripura (Co-PI)
                </td>
                <td className="border border-gray-300 px-4 py-2">Ongoing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">
                  Participatory Action Research in Select Micro Watersheds in Uttarakhand
                </td>
                <td className="border border-gray-300 px-4 py-2">IIT Roorkee</td>
                <td className="border border-gray-300 px-4 py-2">Rs. 3750000</td>
                <td className="border border-gray-300 px-4 py-2">August 2022-July 2025</td>
                <td className="border border-gray-300 px-4 py-2">
                  Professor S P Singh HSS (PI) Professor R P Saini HRED (Co-PI) Professor H C Pokhriyal Member BoG IIT
                  Roorkee (Co-PI)
                </td>
                <td className="border border-gray-300 px-4 py-2">Ongoing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 4: Sponsored Research Project as a Project Investigator */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Details of Sponsored Research Project as a Project Investigator:</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">S.No</th>
                <th className="border border-gray-300 px-4 py-2">Title of Project</th>
                <th className="border border-gray-300 px-4 py-2">Funding Agency</th>
                <th className="border border-gray-300 px-4 py-2">Financial Outlay</th>
                <th className="border border-gray-300 px-4 py-2">Year of Start & Total Period</th>
                <th className="border border-gray-300 px-4 py-2">
                  Name of CO P.I. and other Investigators PI in all the Projects
                </th>
                <th className="border border-gray-300 px-4 py-2">Status Started or completed or in progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1.</td>
                <td className="border border-gray-300 px-4 py-2">
                  Assessment of Domestic Violence and Formulation of its Preventive Measures in the Regions of
                  Uttarakhand
                </td>
                <td className="border border-gray-300 px-4 py-2">ICSSR</td>
                <td className="border border-gray-300 px-4 py-2">20 Lakhs</td>
                <td className="border border-gray-300 px-4 py-2">01/05/2018 to 30/04/20</td>
                <td className="border border-gray-300 px-4 py-2">Dr. Sujata Kar Co-PI</td>
                <td className="border border-gray-300 px-4 py-2">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
