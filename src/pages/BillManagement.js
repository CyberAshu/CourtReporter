import React, { useState } from 'react';
import { Calendar, DollarSign, Download, Eye, Filter, Search } from 'lucide-react';

const BillManagement = () => {
  const [paymentMode, setPaymentMode] = useState('billed'); // 'billed' or 'paid'
  const [bills] = useState([
    {
      id: 'INV-001',
      date: '2024-01-15',
      dueDate: '2024-02-15',
      amount: 750.00,
      status: 'paid',
      jobTitle: 'Family Court Hearing',
      client: 'Smith vs Johnson'
    },
    {
      id: 'INV-002',
      date: '2024-01-20',
      dueDate: '2024-02-20',
      amount: 450.00,
      status: 'unpaid',
      jobTitle: 'Criminal Case Deposition',
      client: 'State vs Brown'
    },
    {
      id: 'INV-003',
      date: '2024-01-10',
      dueDate: '2024-01-25',
      amount: 320.00,
      status: 'overdue',
      jobTitle: 'Civil Litigation',
      client: 'ABC Corp vs XYZ Inc'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'unpaid': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bill Management</h1>
          <p className="text-gray-600">Track and process payment rules for your invoices</p>
        </div>
      </div>

      {/* Payment Mode Selection */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Mode</h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMode"
              value="billed"
              checked={paymentMode === 'billed'}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
            />
            <span className="ml-3">
              <span className="text-sm font-medium text-gray-900">Pay When Billed</span>
              <span className="block text-xs text-gray-500">Payment due upon invoice creation</span>
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMode"
              value="paid"
              checked={paymentMode === 'paid'}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
            />
            <span className="ml-3">
              <span className="text-sm font-medium text-gray-900">Pay When Paid</span>
              <span className="block text-xs text-gray-500">Payment due when client pays</span>
            </span>
          </label>
        </div>
      </div>

      {/* Bills List */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Recent Invoices</h3>
            <div className="flex space-x-2">
              <button className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </button>
              <button className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                <Search className="h-4 w-4 mr-1" />
                Search
              </button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bill Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bills.map((bill) => (
                <tr key={bill.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{bill.id}</div>
                    <div className="text-sm text-gray-500">{bill.client}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{bill.jobTitle}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      {formatDate(bill.date)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formatDate(bill.dueDate)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm font-medium text-gray-900">
                      <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
                      {formatCurrency(bill.amount)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(bill.status)}`}>
                      {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Paid</p>
              <p className="text-lg font-semibold text-gray-900">$750.00</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-lg font-semibold text-gray-900">$450.00</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Overdue</p>
              <p className="text-lg font-semibold text-gray-900">$320.00</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total</p>
              <p className="text-lg font-semibold text-gray-900">$1,520.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillManagement;
