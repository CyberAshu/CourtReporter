import React, { useState } from 'react';
import { Search, Calendar, Filter, Download, Eye, ChevronDown } from 'lucide-react';

const SearchBills = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    jobId: '',
    dateFrom: '',
    dateTo: '',
    paymentStatus: 'all'
  });

  const [searchResults] = useState([
    { id: 'INV-001', jobId: 'JOB-2024-001', amount: 750.00, status: 'paid', date: '2024-01-15', jobTitle: 'Family Court Hearing' },
    { id: 'INV-002', jobId: 'JOB-2024-002', amount: 450.00, status: 'unpaid', date: '2024-01-20', jobTitle: 'Criminal Case Deposition' },
    { id: 'INV-003', jobId: 'JOB-2024-003', amount: 320.00, status: 'overdue', date: '2024-01-10', jobTitle: 'Civil Litigation' }
  ]);

  const handleSearch = () => {
    // Implement search logic
    console.log('Searching with criteria:', searchCriteria);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'unpaid': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Search Bills</h1>
        <p className="text-gray-600">Find invoices using job ID, date range, or payment status</p>
      </div>

      {/* Search Form */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Criteria</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job ID</label>
            <input
              type="text"
              value={searchCriteria.jobId}
              onChange={(e) => setSearchCriteria(prev => ({ ...prev, jobId: e.target.value }))}
              placeholder="Enter Job ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
            <input
              type="date"
              value={searchCriteria.dateFrom}
              onChange={(e) => setSearchCriteria(prev => ({ ...prev, dateFrom: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
            <input
              type="date"
              value={searchCriteria.dateTo}
              onChange={(e) => setSearchCriteria(prev => ({ ...prev, dateTo: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Status</label>
            <select
              value={searchCriteria.paymentStatus}
              onChange={(e) => setSearchCriteria(prev => ({ ...prev, paymentStatus: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSearch}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <Search className="h-4 w-4 mr-2" />
            Search Bills
          </button>
        </div>
      </div>

      {/* Search Results */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Search Results ({searchResults.length})</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {searchResults.map((bill) => (
                <tr key={bill.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bill.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bill.jobId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bill.jobTitle}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${bill.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(bill.status)}`}>
                      {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(bill.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-900"><Eye className="h-4 w-4" /></button>
                      <button className="text-green-600 hover:text-green-900"><Download className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchBills;
