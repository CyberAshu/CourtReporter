import React, { useState } from 'react';
import { FileText, Download, Trash2, Eye, Upload, Search, Filter, File, FileVideo, FileImage, Link } from 'lucide-react';

const FilesDirectory = () => {
  const [files] = useState([
    {
      id: 1,
      name: 'family_court_transcript_001.pdf',
      type: 'PDF',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      associatedJob: 'JOB-2024-001',
      jobTitle: 'Family Court Hearing',
      icon: FileText
    },
    {
      id: 2,
      name: 'criminal_case_audio.mp4',
      type: 'MP4',
      size: '45.2 MB',
      uploadDate: '2024-01-20',
      associatedJob: 'JOB-2024-002',
      jobTitle: 'Criminal Case Deposition',
      icon: FileVideo
    },
    {
      id: 3,
      name: 'civil_litigation_notes.docx',
      type: 'DOCX',
      size: '1.1 MB',
      uploadDate: '2024-01-10',
      associatedJob: 'JOB-2024-003',
      jobTitle: 'Civil Litigation',
      icon: FileText
    },
    {
      id: 4,
      name: 'contract_review_evidence.jpg',
      type: 'JPG',
      size: '3.7 MB',
      uploadDate: '2024-01-18',
      associatedJob: 'JOB-2024-004',
      jobTitle: 'Contract Review',
      icon: FileImage
    },
    {
      id: 5,
      name: 'appeal_documents.pdf',
      type: 'PDF',
      size: '5.8 MB',
      uploadDate: '2024-01-22',
      associatedJob: 'JOB-2024-005',
      jobTitle: 'Criminal Appeal',
      icon: FileText
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const getTypeColor = (type) => {
    switch (type) {
      case 'PDF': return 'bg-red-100 text-red-800';
      case 'DOCX': return 'bg-blue-100 text-blue-800';
      case 'MP4': return 'bg-purple-100 text-purple-800';
      case 'JPG': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || file.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    console.log('Files to upload:', uploadedFiles);
    setShowUploadModal(false);
    // In a real app, you would handle the file upload here
    alert(`${uploadedFiles.length} file(s) uploaded successfully!`);
  };

  const handleDownload = (file) => {
    // Simulate file download
    console.log('Downloading:', file.name);
    alert(`Downloading ${file.name}...`);
  };

  const handleDelete = (file) => {
    if (window.confirm(`Are you sure you want to delete ${file.name}?`)) {
      console.log('Deleting:', file.name);
      alert(`${file.name} deleted successfully!`);
    }
  };

  const handleViewJob = (jobId) => {
    console.log('Opening job:', jobId);
    alert(`Opening job details for ${jobId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Files Directory</h1>
          <p className="text-gray-600">Manage all uploaded documents and files</p>
        </div>
        
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search files by name or job title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          
          <div className="sm:w-48">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Types</option>
              <option value="PDF">PDF</option>
              <option value="DOCX">DOCX</option>
              <option value="MP4">MP4</option>
              <option value="JPG">JPG</option>
            </select>
          </div>
        </div>
      </div>

      {/* Files Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFiles.map((file) => (
          <div key={file.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <file.icon className="h-6 w-6 text-gray-600" />
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(file.type)}`}>
                  {file.type}
                </span>
              </div>
              
              <h3 className="text-sm font-medium text-gray-900 mb-2 truncate" title={file.name}>
                {file.name}
              </h3>
              
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span className="font-medium">{file.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>Uploaded:</span>
                  <span className="font-medium">{new Date(file.uploadDate).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleViewJob(file.associatedJob)}
                  className="flex items-center text-xs text-primary-600 hover:text-primary-700 mb-2"
                >
                  <Link className="h-3 w-3 mr-1" />
                  {file.associatedJob}
                </button>
                <p className="text-xs text-gray-600 truncate" title={file.jobTitle}>
                  {file.jobTitle}
                </p>
              </div>
              
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleDownload(file)}
                  className="flex-1 flex items-center justify-center px-3 py-2 text-xs bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </button>
                <button
                  className="flex items-center justify-center px-3 py-2 text-xs border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  <Eye className="h-3 w-3" />
                </button>
                <button
                  onClick={() => handleDelete(file)}
                  className="flex items-center justify-center px-3 py-2 text-xs border border-red-300 text-red-700 rounded-lg hover:bg-red-50"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFiles.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
          <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No files found</h3>
          <p className="text-gray-500">
            {searchTerm || filterType !== 'all' 
              ? 'No files match your search criteria.' 
              : 'Upload your first document to get started.'}
          </p>
        </div>
      )}

      {/* File Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Files</p>
              <p className="text-lg font-semibold text-gray-900">{files.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Upload className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-lg font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <FileVideo className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Size</p>
              <p className="text-lg font-semibold text-gray-900">58.2 MB</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <File className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">File Types</p>
              <p className="text-lg font-semibold text-gray-900">4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Files</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-4">
                Click to upload or drag and drop files here
              </p>
              <label className="cursor-pointer">
                <span className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700">
                  Choose Files
                </span>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.png,.mp4,.mov"
                  onChange={handleUpload}
                  className="hidden"
                />
              </label>
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilesDirectory;
