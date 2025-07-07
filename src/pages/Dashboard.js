import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Upload, 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  FileText, 
  ChevronDown, 
  MoreHorizontal,
  ShoppingCart,
  BarChart3
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [dateRange, setDateRange] = useState('2016-10-10,2016-10-20');
  
  // Mock data
  const todaysJobs = [
    {
      id: 1,
      title: 'Family Court Hearing',
      time: '09:00 AM',
      location: 'Courtroom 101',
      judge: 'Judge Smith',
      status: 'upcoming',
      type: 'family'
    },
    {
      id: 2,
      title: 'Criminal Case Deposition',
      time: '02:00 PM',
      location: 'Conference Room A',
      judge: 'Judge Johnson',
      status: 'in-progress',
      type: 'criminal'
    },
    {
      id: 3,
      title: 'Civil Litigation',
      time: '04:30 PM',
      location: 'Courtroom 205',
      judge: 'Judge Williams',
      status: 'upcoming',
      type: 'civil'
    }
  ];

  const upcomingJobs = [
    { id: 1, title: 'Divorce Proceeding', date: 'Tomorrow', time: '10:00 AM' },
    { id: 2, title: 'Traffic Court', date: 'Dec 15', time: '11:30 AM' },
    { id: 3, title: 'Property Dispute', date: 'Dec 16', time: '02:00 PM' },
    { id: 4, title: 'Contract Review', date: 'Dec 18', time: '09:15 AM' },
    { id: 5, title: 'Criminal Appeal', date: 'Dec 20', time: '03:45 PM' }
  ];

  const statsData = [
    {
      title: 'Total Jobs',
      value: '854',
      change: '+2.56%',
      trend: 'up',
      icon: FileText,
      color: 'bg-primary-500'
    },
    {
      title: 'Total Revenue',
      value: '$34,241',
      change: '+7.66%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-secondary-500'
    },
    {
      title: 'Active Cases',
      value: '31,876',
      change: '+0.34%',
      trend: 'up',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Completed Tasks',
      value: '1,76,586',
      change: '-0.74%',
      trend: 'down',
      icon: BarChart3,
      color: 'bg-orange-500'
    }
  ];

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 },
  ];

  const orderData = [
    { name: 'Total Orders', value: 3736, change: '+0.57%', color: '#8B5CF6' }
  ];

  const categoryData = [
    { name: 'Overall Cases', value: 1253875, change: '+2.74%', color: '#3B82F6' },
    { name: 'Family Law', value: 31245, gross: '25% Gross', change: '+0.45%', color: '#10B981' },
  ];

  const pieData = [
    { name: 'Family Law', value: 30, color: '#3B82F6' },
    { name: 'Criminal', value: 25, color: '#8B5CF6' },
    { name: 'Civil', value: 20, color: '#EC4899' },
    { name: 'Traffic', value: 15, color: '#F59E0B' },
    { name: 'Corporate', value: 10, color: '#10B981' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'family': return 'bg-purple-100 text-purple-800';
      case 'criminal': return 'bg-red-100 text-red-800';
      case 'civil': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Court Reporter Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{dateRange}</span>
          </div>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700">
            Filter
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    Increased By {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Jobs */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Today's Jobs</h2>
              <button className="text-sm text-primary-600 hover:text-primary-500">View All</button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {todaysJobs.map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{job.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.time} • {job.location}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Judge: {job.judge}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                        {job.status.replace('-', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upgrade Card */}
        <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Upgrade to get more</h3>
            <p className="text-pink-100 text-sm mb-4">
              Maximize court reporting insights. Optimize performance. Achieve success with pro.
            </p>
            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Upgrade To Pro →
            </button>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-20">
            <div className="w-32 h-32 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Overview Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Cases Overview</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort By</span>
                <button className="flex items-center text-sm text-gray-700">
                  Month <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Statistics and Top Categories */}
        <div className="space-y-6">
          {/* Order Statistics */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Case Statistics</h2>
                <MoreHorizontal className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="p-6">
              {orderData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">{item.name}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-2xl font-bold text-gray-900">{item.value.toLocaleString()}</span>
                      <TrendingUp className="h-4 w-4 text-green-500 ml-2" />
                      <span className="text-sm text-green-600 ml-1">{item.change}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Selling Categories */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Top Case Categories</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Sort By</span>
                  <button className="flex items-center text-sm text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-2 bg-gray-200 rounded-full flex-1 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="space-y-4">
                {categoryData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3`} style={{backgroundColor: item.color}}></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        {item.gross && (
                          <p className="text-xs text-gray-500">{item.gross}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{item.value.toLocaleString()}</p>
                      <div className="flex items-center">
                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                        <span className="text-xs text-green-600">{item.change}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Jobs and Counters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Upcoming Jobs */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Jobs</h2>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {upcomingJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{job.title}</p>
                    <p className="text-xs text-gray-500">{job.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary-600">{job.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Counters */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">12</h3>
            <p className="text-sm text-gray-600">Pending Uploads</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">7</h3>
            <p className="text-sm text-gray-600">Pending Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
