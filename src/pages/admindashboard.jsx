import React from 'react';
import Header from '../components/Header';


// Dummy data for demonstration
const summaryData = [
  { label: 'Total Revenue (MTD)', value: '₹12,50,000', trend: [10, 12, 14, 13, 15, 18, 20], color: 'bg-green-100' },
  { label: 'Total Expenses', value: '₹7,80,000', trend: [7, 8, 7.5, 8.2, 8, 7.8, 7.9], color: 'bg-red-100' },
  { label: 'Net Profit/Loss', value: '₹4,70,000', trend: [3, 4, 5, 4.5, 5.5, 6, 6.2], color: 'bg-blue-100' },
  { label: 'Cash Flow (In/Out)', value: '+₹2,00,000', trend: [1, 2, 1.5, 2.2, 2, 2.5, 2.7], color: 'bg-yellow-100' },
  { label: 'Balance Overview', value: '₹9,00,000', trend: [8, 8.5, 9, 9.2, 9.1, 9.3, 9.4], color: 'bg-purple-100' },
];

const invoices = [
  { client: 'Acme Corp', amount: '₹1,20,000', due: '2025-08-10', status: 'Paid', mode: 'Bank' },
  { client: 'Beta Ltd', amount: '₹80,000', due: '2025-08-15', status: 'Unpaid', mode: 'UPI' },
  { client: 'Gamma Inc', amount: '₹2,00,000', due: '2025-08-05', status: 'Overdue', mode: 'Card' },
];

const expenses = [
  { date: '2025-08-01', type: 'Salaries', vendor: 'Payroll', amount: '₹3,00,000' },
  { date: '2025-08-03', type: 'Software', vendor: 'SaaSify', amount: '₹25,000' },
  { date: '2025-08-04', type: 'Rent', vendor: 'OfficeSpace', amount: '₹1,00,000' },
];

const clients = [
  { name: 'Acme Corp', contact: 'acme@email.com', plan: 'Gold', status: 'Active', services: 'Accounting, Tax', payment: 'Paid' },
  { name: 'Beta Ltd', contact: 'beta@email.com', plan: 'Silver', status: 'Inactive', services: 'Payroll', payment: 'Unpaid' },
];

const taxAlerts = [
  { type: 'GST Filing', due: '2025-08-20', status: 'Pending' },
  { type: 'TDS Payment', due: '2025-08-07', status: 'Filed' },
  { type: 'ITR Submission', due: '2025-08-31', status: 'Urgent' },
];

const reports = [
  { name: 'Profit & Loss', type: 'PDF' },
  { name: 'Balance Sheet', type: 'Excel' },
  { name: 'Cash Flow', type: 'PDF' },
];

const statusColors = {
  Paid: 'bg-green-100 text-green-700',
  Unpaid: 'bg-yellow-100 text-yellow-700',
  Overdue: 'bg-red-100 text-red-700',
  Active: 'bg-green-100 text-green-700',
  Inactive: 'bg-gray-100 text-gray-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Filed: 'bg-green-100 text-green-700',
  Urgent: 'bg-red-100 text-red-700',
};

const AdminDashboard = () => {
  return (
  <div className="bg-gray-50 min-h-screen">
  <Header />
  <h1 className="text-3xl font-bold mb-8 text-orange-600 max-w-7xl mx-auto pt-24 px-4">Admin Dashboard</h1>
  <div className="max-w-7xl mx-auto pb-10 px-4">

        {/* 1. Financial Summary Widget - Modern Blue/White Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between border border-orange-100">
            <div className="font-bold text-base text-black mb-2">Total Balance</div>
            <div className="text-3xl font-bold text-black mb-2">$ 432568</div>
            <div className="border-t border-orange-200 my-2"></div>
            <div className="flex items-center text-xs mt-2">
              <span className="text-orange-600 font-bold mr-1">↑ 2.47%</span>
              <span className="text-orange-400 ml-1">Last month <span className="font-semibold">$24,478</span></span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between border border-orange-100">
            <div className="font-bold text-base text-black mb-2">Total Period Change</div>
            <div className="text-3xl font-bold text-black mb-2">$ 245860</div>
            <div className="border-t border-orange-200 my-2"></div>
            <div className="flex items-center text-xs mt-2">
              <span className="text-orange-600 font-bold mr-1">↑ 2.47%</span>
              <span className="text-orange-400 ml-1">Last month <span className="font-semibold">$24,478</span></span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between border border-orange-100">
            <div className="font-bold text-base text-black mb-2">Total Period Expenses</div>
            <div className="text-3xl font-bold text-black mb-2">$ 25.35</div>
            <div className="border-t border-orange-200 my-2"></div>
            <div className="flex items-center text-xs mt-2">
              <span className="text-orange-600 font-bold mr-1">↓ 2.47%</span>
              <span className="text-orange-400 ml-1">Last month <span className="font-semibold">$24,478</span></span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between border border-orange-100">
            <div className="font-bold text-base text-black mb-2">Total Period Income</div>
            <div className="text-3xl font-bold text-black mb-2">$ 22.56</div>
            <div className="border-t border-orange-200 my-2"></div>
            <div className="flex items-center text-xs mt-2">
              <span className="text-orange-600 font-bold mr-1">↑ 2.47%</span>
              <span className="text-orange-400 ml-1">Last month <span className="font-semibold">$24,478</span></span>
            </div>
          </div>
        </div>

        {/* 2. Balance Trends & Monthly Expenses Breakdown */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Balance Trends Card */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-orange-100">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold text-lg text-black">Balance Trends</div>
              <div className="text-xs text-orange-400">Last Month <span className="text-orange-600 font-bold ml-1">↑ 12.25%</span></div>
            </div>
            <div className="text-3xl font-bold text-black mb-2">$221,478</div>
            {/* Fake area chart - orange theme */}
            <div className="w-full h-32 bg-gradient-to-t from-orange-200 to-orange-400 rounded-b-xl relative overflow-hidden flex items-end">
              <div className="absolute left-0 bottom-0 w-full h-full flex items-end">
                <div className="bg-orange-300" style={{height:'30%',width:'10%'}}></div>
                <div className="bg-orange-400" style={{height:'50%',width:'10%'}}></div>
                <div className="bg-orange-300" style={{height:'40%',width:'10%'}}></div>
                <div className="bg-orange-500" style={{height:'80%',width:'10%'}}></div>
                <div className="bg-orange-300" style={{height:'60%',width:'10%'}}></div>
                <div className="bg-orange-400" style={{height:'70%',width:'10%'}}></div>
                <div className="bg-orange-200" style={{height:'35%',width:'10%'}}></div>
                <div className="bg-orange-300" style={{height:'55%',width:'10%'}}></div>
                <div className="bg-orange-400" style={{height:'45%',width:'10%'}}></div>
                <div className="bg-orange-200" style={{height:'25%',width:'10%'}}></div>
              </div>
            </div>
          </div>
          {/* Monthly Expenses Breakdown Card - Donut Chart Style */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-orange-100">
            <div className="font-bold text-lg text-black mb-4">Monthly Expenses Breakdown</div>
            <div className="flex flex-row items-center justify-between">
              {/* Donut Chart */}
              <div className="flex flex-col items-center justify-center w-1/2">
                <svg width="140" height="140" viewBox="0 0 42 42" className="mb-2">
                  <circle r="15.9155" cx="21" cy="21" fill="transparent" stroke="#fb923c" strokeWidth="6" strokeDasharray="30 70" strokeDashoffset="0" />
                  <circle r="15.9155" cx="21" cy="21" fill="transparent" stroke="#fdba74" strokeWidth="6" strokeDasharray="20 80" strokeDashoffset="-30" />
                  <circle r="15.9155" cx="21" cy="21" fill="transparent" stroke="#fbbf24" strokeWidth="6" strokeDasharray="15 85" strokeDashoffset="-50" />
                  <circle r="15.9155" cx="21" cy="21" fill="transparent" stroke="#f59e42" strokeWidth="6" strokeDasharray="20 80" strokeDashoffset="-65" />
                  <circle r="15.9155" cx="21" cy="21" fill="transparent" stroke="#fca5a5" strokeWidth="6" strokeDasharray="15 85" strokeDashoffset="-85" />
                  <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="8" fill="#ea580c" fontWeight="bold">₹1.2L</text>
                </svg>
                <div className="text-xs text-orange-400">Total</div>
              </div>
              {/* Legend */}
              <div className="flex flex-col gap-3 w-1/2 pl-4">
                <div className="flex items-center text-base font-semibold text-black"><span className="w-4 h-4 rounded-full bg-orange-400 mr-3"></span>Salaries</div>
                <div className="flex items-center text-base font-semibold text-black"><span className="w-4 h-4 rounded-full bg-orange-300 mr-3"></span>Software</div>
                <div className="flex items-center text-base font-semibold text-black"><span className="w-4 h-4 rounded-full bg-yellow-400 mr-3"></span>Rent</div>
                <div className="flex items-center text-base font-semibold text-black"><span className="w-4 h-4 rounded-full bg-orange-500 mr-3"></span>Service</div>
                <div className="flex items-center text-base font-semibold text-black"><span className="w-4 h-4 rounded-full bg-orange-200 mr-3"></span>Tools</div>
              </div>
            </div>
          </div>
        </div>


        
        {/* 3. Transactions Activity (Invoices & Payments) Modern Table */}
        <div className="bg-white rounded-xl shadow p-6 mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-orange-500">Transactions activity</h2>
          </div>
          <div className="-mx-4 sm:mx-0 overflow-x-auto">
            <table className="min-w-[700px] w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500">
                  <th className="p-2 text-left font-medium whitespace-nowrap">Account</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Date</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Status</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Recipient</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Category</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Amount</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Example static rows for demo, replace with real data as needed */}
                <tr>
                  <td className="p-2 flex items-center gap-2 whitespace-nowrap"><span className="w-8 h-6 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">VISA</span>•••• 6799</td>
                <td className="p-2">Feb 17, 2025</td>
                <td className="p-2"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">Pending</span></td>
                <td className="p-2 flex items-center gap-2"><img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Adam Barbara" className="w-6 h-6 rounded-full"/> Adam Barbara</td>
                <td className="p-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Transfer</span></td>
                <td className="p-2">USD 1,500</td>
              </tr>
              <tr>
                <td className="p-2 flex items-center gap-2"><span className="w-8 h-6 rounded bg-green-500 flex items-center justify-center text-white text-xs font-bold">MC</span>•••• 7586</td>
                <td className="p-2">Feb 17, 2025</td>
                <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Success</span></td>
                <td className="p-2 flex items-center gap-2"><img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Cameron Will" className="w-6 h-6 rounded-full"/> Cameron Will</td>
                <td className="p-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Transfer</span></td>
                <td className="p-2">USD 1,500</td>
              </tr>
              <tr>
                <td className="p-2 flex items-center gap-2"><span className="w-8 h-6 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">VISA</span>•••• 6799</td>
                <td className="p-2">Feb 16, 2025</td>
                <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Success</span></td>
                <td className="p-2 flex items-center gap-2"><img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Floyd Miles" className="w-6 h-6 rounded-full"/> Floyd Miles</td>
                <td className="p-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Transfer</span></td>
                <td className="p-2">USD 1,500</td>
              </tr>
              <tr>
                <td className="p-2 flex items-center gap-2"><span className="w-8 h-6 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">VISA</span>•••• 6799</td>
                <td className="p-2">Feb 16, 2025</td>
                <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Success</span></td>
                <td className="p-2 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-blue-900 font-bold">A</span> AHS Rentals</td>
                <td className="p-2"><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold">Rent</span></td>
                <td className="p-2">USD 1,000</td>
              </tr>
              <tr>
                <td className="p-2 flex items-center gap-2"><span className="w-8 h-6 rounded bg-green-500 flex items-center justify-center text-white text-xs font-bold">MC</span>•••• 7586</td>
                <td className="p-2">Feb 14, 2025</td>
                <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Success</span></td>
                <td className="p-2 flex items-center gap-2"><img src="https://randomuser.me/api/portraits/women/35.jpg" alt="Jane Cooper" className="w-6 h-6 rounded-full"/> Jane Cooper</td>
                <td className="p-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Transfer</span></td>
                <td className="p-2">USD 1,500</td>
              </tr>
              <tr>
                <td className="p-2 flex items-center gap-2"><span className="w-8 h-6 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">VISA</span>•••• 6799</td>
                <td className="p-2">Feb 13, 2025</td>
                <td className="p-2"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Failed</span></td>
                <td className="p-2 flex items-center gap-2"><img src="https://randomuser.me/api/portraits/women/36.jpg" alt="Courtney Henry" className="w-6 h-6 rounded-full"/> Courtney Henry</td>
                <td className="p-2"><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">Receive</span></td>
                <td className="p-2">USD 1,500</td>
              </tr>
              <tr>
                <td className="p-2 flex items-center gap-2"><span className="w-8 h-6 rounded bg-black flex items-center justify-center text-white text-xs font-bold">AMEX</span>•••• 5560</td>
                <td className="p-2">Feb 10, 2025</td>
                <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Success</span></td>
                <td className="p-2 flex items-center gap-2"><img src="https://randomuser.me/api/portraits/men/37.jpg" alt="Akmal Nasrul" className="w-6 h-6 rounded-full"/> Akmal Nasrul</td>
                <td className="p-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Shopping</span></td>
                <td className="p-2">USD 1,500</td>
              </tr>
              <tr>
                                <td className="p-2 flex items-center gap-2"><span className="w-8 h-6 rounded bg-blue-700 flex items-center justify-center text-white text-xs font-bold">PP</span>•••• 3557</td>
                <td className="p-2">Feb 9, 2025</td>
                <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Success</span></td>
                <td className="p-2 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-blue-900 font-bold">A</span> Amazon</td>
                <td className="p-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Shopping</span></td>
                <td className="p-2">USD 1,500</td>
              </tr>
              <tr>
                <td className="p-2 flex items-center gap-2"><span className="w-8 h-6 rounded bg-blue-700 flex items-center justify-center text-white text-xs font-bold">PP</span>•••• 3557</td>
                <td className="p-2">Feb 5, 2025</td>
                <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Success</span></td>
                <td className="p-2 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-blue-900 font-bold">S</span> Spotify</td>
                <td className="p-2"><span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">Subscription</span></td>
                <td className="p-2">USD 1,500</td>
              </tr>
            </tbody>
          </table>
        </div>


        {/* 4. Expense Management - Modern Table */}
        <div className="bg-white rounded-xl shadow p-6 mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-orange-500">Expense Management</h2>
            <button className="bg-orange-500 text-white px-4 py-2 rounded font-semibold">Export</button>
          </div>
          <div className="-mx-4 sm:mx-0 overflow-x-auto">
            <table className="min-w-[600px] w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500">
                  <th className="p-2 text-left font-medium whitespace-nowrap">Date</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Type</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Vendor</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Amount</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Status</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Example static rows for demo, replace with real data as needed */}
                <tr>
                  <td className="p-2 whitespace-nowrap">2025-08-01</td>
                  <td className="p-2 whitespace-nowrap">Salaries</td>
                  <td className="p-2 whitespace-nowrap">Payroll</td>
                  <td className="p-2 whitespace-nowrap">₹3,00,000</td>
                  <td className="p-2 whitespace-nowrap"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Paid</span></td>
                  <td className="p-2 text-right whitespace-nowrap">...</td>
                </tr>
              <tr>
                <td className="p-2">2025-08-03</td>
                <td className="p-2">Software</td>
                <td className="p-2">SaaSify</td>
                <td className="p-2">₹25,000</td>
                <td className="p-2"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">Pending</span></td>
                <td className="p-2 text-right">...</td>
              </tr>
              <tr>
                <td className="p-2">2025-08-04</td>
                <td className="p-2">Rent</td>
                <td className="p-2">OfficeSpace</td>
                <td className="p-2">₹1,00,000</td>
                <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Paid</span></td>
                <td className="p-2 text-right">...</td>
              </tr>
            </tbody>
          </table>
        </div>


        {/* 5. Client Accounts Overview - Modern Table */}
        <div className="bg-white rounded-xl shadow p-6 mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-orange-500">Client Accounts Overview</h2>
            <button className="bg-orange-500 text-white px-4 py-2 rounded font-semibold">Add Client</button>
          </div>
          <div className="-mx-4 sm:mx-0 overflow-x-auto">
            <table className="min-w-[700px] w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500">
                  <th className="p-2 text-left font-medium whitespace-nowrap">Client</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Contact</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Plan</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Status</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Services</th>
                  <th className="p-2 text-left font-medium whitespace-nowrap">Payment</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Example static rows for demo, replace with real data as needed */}
                <tr>
                  <td className="p-2 flex items-center gap-2 whitespace-nowrap"><img src="https://randomuser.me/api/portraits/men/38.jpg" alt="Acme Corp" className="w-6 h-6 rounded-full"/> Acme Corp</td>
                  <td className="p-2 whitespace-nowrap">acme@email.com</td>
                  <td className="p-2 whitespace-nowrap">Gold</td>
                  <td className="p-2 whitespace-nowrap"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Active</span></td>
                  <td className="p-2 whitespace-nowrap">Accounting, Tax</td>
                  <td className="p-2 whitespace-nowrap"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Paid</span></td>
                  <td className="p-2 text-right whitespace-nowrap">...</td>
                </tr>
              <tr>
                <td className="p-2 flex items-center gap-2"><img src="https://randomuser.me/api/portraits/men/39.jpg" alt="Beta Ltd" className="w-6 h-6 rounded-full"/> Beta Ltd</td>
                <td className="p-2">beta@email.com</td>
                <td className="p-2">Silver</td>
                <td className="p-2"><span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">Inactive</span></td>
                <td className="p-2">Payroll</td>
                <td className="p-2"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">Unpaid</span></td>
                <td className="p-2 text-right">...</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5. Tax & Compliance Alerts */}
       

        {/* 6. Reports & Insights */}
        

      </div>
    </div>
  </div>
  </div>
  </div>
  );
}

export default AdminDashboard;
