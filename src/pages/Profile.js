import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Upload, Save, Camera, FileText, Award } from 'lucide-react';

const Profile = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    fullName: user.name || '',
    email: user.email || '',
    phoneNumber: user.phone || '+1 (555) 123-4567',
    role: user.role || 'Court Reporter',
    address: user.address || '123 Main Street, Anytown, ST 12345',
    bio: user.bio || 'Experienced court reporter with over 10 years in the field.'
  });
  
  const [profileImage, setProfileImage] = useState(user.avatar || null);
  const [certifications, setCertifications] = useState([
    { id: 1, name: 'Certified Realtime Reporter (CRR)', issuer: 'NCRA', date: '2020', file: 'crr-cert.pdf' },
    { id: 2, name: 'Registered Professional Reporter (RPR)', issuer: 'NCRA', date: '2018', file: 'rpr-cert.pdf' }
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCertificationUpload = (e) => {
    const files = Array.from(e.target.files);
    const newCertifications = files.map((file, index) => ({
      id: certifications.length + index + 1,
      name: file.name.replace(/\.[^/.]+$/, ""),
      issuer: 'Custom Upload',
      date: new Date().getFullYear().toString(),
      file: file.name
    }));
    setCertifications(prev => [...prev, ...newCertifications]);
  };

  const removeCertification = (id) => {
    setCertifications(prev => prev.filter(cert => cert.id !== id));
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setUser(prev => ({
        ...prev,
        name: formData.fullName,
        phone: formData.phoneNumber,
        address: formData.address,
        bio: formData.bio,
        avatar: profileImage
      }));
      setIsEditing(false);
      setIsSaving(false);
      alert('Profile updated successfully!');
    }, 1000);
  };

  const handleCancel = () => {
    setFormData({
      fullName: user.name || '',
      email: user.email || '',
      phoneNumber: user.phone || '+1 (555) 123-4567',
      role: user.role || 'Court Reporter',
      address: user.address || '123 Main Street, Anytown, ST 12345',
      bio: user.bio || 'Experienced court reporter with over 10 years in the field.'
    });
    setProfileImage(user.avatar || null);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600">Manage your personal information and preferences</p>
        </div>
        
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 disabled:opacity-50 flex items-center"
              >
                {isSaving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture and Basic Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="h-16 w-16 text-primary-600" />
                  )}
                </div>
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-primary-600 rounded-full p-2 cursor-pointer hover:bg-primary-700">
                    <Camera className="h-4 w-4 text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900">{formData.fullName}</h2>
              <p className="text-gray-600">{formData.role}</p>
              <p className="text-sm text-gray-500 mt-1">{formData.email}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {isEditing ? (
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="text-center bg-transparent border-none resize-none text-sm"
                      rows="2"
                    />
                  ) : (
                    <span>{formData.address}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Cases</span>
                <span className="font-semibold">127</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">This Month</span>
                <span className="font-semibold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Rating</span>
                <span className="font-semibold">4.9/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Experience</span>
                <span className="font-semibold">10+ years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  ) : (
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{formData.fullName}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{formData.email}</span>
                    <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Read-only</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  ) : (
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{formData.phoneNumber}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-600">{formData.role}</span>
                    <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Read-only</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about yourself..."
                  />
                ) : (
                  <p className="text-gray-600">{formData.bio}</p>
                )}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
                {isEditing && (
                  <label className="bg-primary-600 text-white px-3 py-1 rounded-lg text-sm cursor-pointer hover:bg-primary-700">
                    <Upload className="h-4 w-4 mr-1 inline" />
                    Upload
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      onChange={handleCertificationUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="p-2 bg-primary-100 rounded-lg mr-3">
                        <Award className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{cert.name}</h4>
                        <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{cert.file}</span>
                      {isEditing && (
                        <button
                          onClick={() => removeCertification(cert.id)}
                          className="text-red-600 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                
                {certifications.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Award className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                    <p>No certifications uploaded yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
