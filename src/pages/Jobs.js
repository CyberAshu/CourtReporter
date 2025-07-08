import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Eye,
  Edit,
  Trash2,
  Plus,
  Filter,
  Search,
  X,
} from 'lucide-react';

const Jobs = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [formVisible, setFormVisible] = useState(false);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Family Court Hearing',
      status: 'New',
      date: '2024-01-15',
      time: '09:00 AM',
      location: 'Courtroom 101',
      client: 'Smith vs Johnson',
      judge: 'Judge Smith',
      type: 'Family Law',
      duration: '2 hours',
      rate: '$75/hour',
    },
    {
      id: 2,
      title: 'Criminal Case Deposition',
      status: 'Active',
      date: '2024-01-16',
      time: '02:00 PM',
      location: 'Conference Room A',
      client: 'State vs Brown',
      judge: 'Judge Johnson',
      type: 'Criminal',
      duration: '3 hours',
      rate: '$85/hour',
    },
    {
      id: 3,
      title: 'Civil Litigation',
      status: 'Completed',
      date: '2024-01-10',
      time: '10:30 AM',
      location: 'Courtroom 205',
      client: 'ABC Corp vs XYZ Inc',
      judge: 'Judge Williams',
      type: 'Civil',
      duration: '4 hours',
      rate: '$90/hour',
    },
    {
      id: 4,
      title: 'Traffic Court Session',
      status: 'Cancelled',
      date: '2024-01-12',
      time: '11:00 AM',
      location: 'Courtroom 102',
      client: 'City vs Multiple',
      judge: 'Judge Davis',
      type: 'Traffic',
      duration: '1 hour',
      rate: '$65/hour',
    },
    {
      id: 5,
      title: 'Contract Review Meeting',
      status: 'Rejected',
      date: '2024-01-18',
      time: '03:30 PM',
      location: 'Law Office Building',
      client: 'Corporate Client',
      judge: 'N/A',
      type: 'Corporate',
      duration: '2 hours',
      rate: '$100/hour',
    },
    {
      id: 6,
      title: 'Divorce Proceeding',
      status: 'New',
      date: '2024-01-20',
      time: '01:00 PM',
      location: 'Courtroom 301',
      client: 'Wilson vs Wilson',
      judge: 'Judge Martinez',
      type: 'Family Law',
      duration: '3 hours',
      rate: '$75/hour',
    },
  ]);

  const filterOptions = [
    'All',
    'New',
    'Active',
    'Completed',
    'Cancelled',
    'Rejected',
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800';
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      case 'Cancelled':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Family Law':
        return 'bg-purple-100 text-purple-800';
      case 'Criminal':
        return 'bg-red-100 text-red-800';
      case 'Civil':
        return 'bg-indigo-100 text-indigo-800';
      case 'Traffic':
        return 'bg-orange-100 text-orange-800';
      case 'Corporate':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const filteredJobs = jobs.filter(
    (job) => activeFilter === 'All' || job.status === activeFilter
  );

  const getStatusCounts = () => {
    const counts = { All: jobs.length };
    filterOptions.slice(1).forEach((status) => {
      counts[status] = jobs.filter((job) => job.status === status).length;
    });
    return counts;
  };

  const statusCounts = getStatusCounts();

  const [newJob, setNewJob] = useState({
    title: '',
    status: 'New',
    date: '',
    time: '',
    location: '',
    client: '',
    judge: '',
    type: '',
    duration: '',
    rate: '',
  });

  const handleAddNewJob = () => {
    setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
    setNewJob({
      title: '',
      status: 'New',
      date: '',
      time: '',
      location: '',
      client: '',
      judge: '',
      type: '',
      duration: '',
      rate: '',
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Jobs Management</h1>
          <p className="text-gray-600">
            Manage and track all your court reporting assignments
          </p>
        </div>
      </div>

      {/* Add New Job Button */}
      <button
        className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 flex items-center mb-4"
        onClick={() => setFormVisible(!formVisible)}
      >
        <Plus className="h-4 w-4 mr-2" />
        {formVisible ? 'Cancel' : 'Add New Job'}
      </button>

      {/* Add New Job Form */}
      {formVisible && (
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Job</h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddNewJob();
            setFormVisible(false);
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <input
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter job title"
              value={newJob.title}
              onChange={(e) =>
                setNewJob({ ...newJob, title: e.target.value })
              }
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              type="date"
              value={newJob.date}
              onChange={(e) =>
                setNewJob({ ...newJob, date: e.target.value })
              }
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="09:00 AM"
              value={newJob.time}
              onChange={(e) =>
                setNewJob({ ...newJob, time: e.target.value })
              }
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Courtroom or location"
              value={newJob.location}
              onChange={(e) =>
                setNewJob({ ...newJob, location: e.target.value })
              }
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
            <input
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Client name"
              value={newJob.client}
              onChange={(e) =>
                setNewJob({ ...newJob, client: e.target.value })
              }
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Judge</label>
            <input
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Judge name"
              value={newJob.judge}
              onChange={(e) =>
                setNewJob({ ...newJob, judge: e.target.value })
              }
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Case Type</label>
            <select
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={newJob.type}
              onChange={(e) =>
                setNewJob({ ...newJob, type: e.target.value })
              }
              required
            >
              <option value="">Select case type</option>
              <option value="Family Law">Family Law</option>
              <option value="Criminal">Criminal</option>
              <option value="Civil">Civil</option>
              <option value="Traffic">Traffic</option>
              <option value="Corporate">Corporate</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <input
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="2 hours"
              value={newJob.duration}
              onChange={(e) =>
                setNewJob({ ...newJob, duration: e.target.value })
              }
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rate</label>
            <input
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="$75/hour"
              value={newJob.rate}
              onChange={(e) =>
                setNewJob({ ...newJob, rate: e.target.value })
              }
              required
            />
          </div>
          
          <div className="md:col-span-2 lg:col-span-3 flex justify-end space-x-3 mt-4">
            <button
              type="button"
              onClick={() => {
                setNewJob({
                  title: '',
                  status: 'New',
                  date: '',
                  time: '',
                  location: '',
                  client: '',
                  judge: '',
                  type: '',
                  duration: '',
                  rate: '',
                });
              }}
              className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Clear Form
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Job
            </button>
          </div>
        </form>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Job Filters</h3>
            <div className="flex space-x-2">
              <button className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-1" /> Advanced Filter
              </button>
              <button className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                <Search className="h-4 w-4 mr-1" /> Search
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-white/20">
                  {statusCounts[filter]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {activeFilter === 'All' ? 'All Jobs' : `${activeFilter} Jobs`}
            <span className="ml-2 text-sm text-gray-500">
              ({filteredJobs.length}{' '}
              {filteredJobs.length === 1 ? 'job' : 'jobs'})
            </span>
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
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
              {filteredJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {job.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        <User className="h-3 w-3 inline mr-1" />
                        {job.judge}
                      </div>
                      <div className="text-sm text-gray-500">
                        {job.duration} • {job.rate}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      {formatDate(job.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {job.time}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {job.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{job.client}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(
                        job.type
                      )}`}
                    >
                      {job.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        job.status
                      )}`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {filterOptions.slice(1).map((status) => (
          <div
            key={status}
            className="bg-white rounded-xl shadow-sm border p-6"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {statusCounts[status]}
              </div>
              <div className="text-sm text-gray-600">{status} Jobs</div>
              <div
                className={`mt-2 inline-block px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                  status
                )}`}
              >
                {status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

