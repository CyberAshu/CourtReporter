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

  const [showModal, setShowModal] = useState(false);
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
    setShowModal(false);
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
        <button
          className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 flex items-center"
          onClick={() => setShowModal(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Job
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex-1">Add New Job</h3>
                <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-gray-900">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddNewJob();
                }}
              >
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Title"
                  value={newJob.title}
                  onChange={(e) =>
                    setNewJob({ ...newJob, title: e.target.value })
                  }
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Date"
                  type="date"
                  value={newJob.date}
                  onChange={(e) =>
                    setNewJob({ ...newJob, date: e.target.value })
                  }
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Time"
                  value={newJob.time}
                  onChange={(e) =>
                    setNewJob({ ...newJob, time: e.target.value })
                  }
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Location"
                  value={newJob.location}
                  onChange={(e) =>
                    setNewJob({ ...newJob, location: e.target.value })
                  }
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Client"
                  value={newJob.client}
                  onChange={(e) =>
                    setNewJob({ ...newJob, client: e.target.value })
                  }
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Judge"
                  value={newJob.judge}
                  onChange={(e) =>
                    setNewJob({ ...newJob, judge: e.target.value })
                  }
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Type"
                  value={newJob.type}
                  onChange={(e) =>
                    setNewJob({ ...newJob, type: e.target.value })
                  }
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Duration"
                  value={newJob.duration}
                  onChange={(e) =>
                    setNewJob({ ...newJob, duration: e.target.value })
                  }
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Rate"
                  value={newJob.rate}
                  onChange={(e) =>
                    setNewJob({ ...newJob, rate: e.target.value })
                  }
                />
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                  >
                    Add Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

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

