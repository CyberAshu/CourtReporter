import React, { useState } from 'react';
import { 
  Globe, 
  Bell, 
  Calendar, 
  Trash2, 
  Save, 
  Shield, 
  Smartphone, 
  Mail, 
  MessageSquare,
  Link,
  AlertTriangle,
  Check
} from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    language: 'en',
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    calendarSync: false,
    calendarProvider: 'google'
  });
  
  const [isCalendarConnected, setIsCalendarConnected] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' }
  ];

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleCalendarConnect = async (provider) => {
    // Simulate OAuth connection
    setIsSaving(true);
    setTimeout(() => {
      setIsCalendarConnected(true);
      setSettings(prev => ({
        ...prev,
        calendarSync: true,
        calendarProvider: provider
      }));
      setIsSaving(false);
      alert(`Connected to ${provider === 'google' ? 'Google' : 'Apple'} Calendar successfully!`);
    }, 2000);
  };

  const handleCalendarDisconnect = () => {
    setIsCalendarConnected(false);
    setSettings(prev => ({
      ...prev,
      calendarSync: false
    }));
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  const handleDeleteAccount = () => {
    // This would typically show a more complex flow
    alert('Account deletion process initiated. You will receive an email with further instructions.');
    setShowDeleteModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your preferences and account settings</p>
        </div>
        
        <button
          onClick={handleSaveSettings}
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Language Settings */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Language</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">Choose your preferred language</p>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {languages.map((lang) => (
                <label key={lang.code} className="flex items-center">
                  <input
                    type="radio"
                    name="language"
                    value={lang.code}
                    checked={settings.language === lang.code}
                    onChange={(e) => handleSettingChange('language', e.target.value)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span className="ml-3 flex items-center">
                    <span className="text-lg mr-2">{lang.flag}</span>
                    <span className="text-sm font-medium text-gray-900">{lang.name}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <Bell className="h-5 w-5 text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">Configure how you receive notifications</p>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {/* Email Notifications */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                    <p className="text-xs text-gray-500">Receive job updates via email</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailNotifications}
                    onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>

              {/* Push Notifications */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Smartphone className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Push Notifications</p>
                    <p className="text-xs text-gray-500">Browser and mobile push notifications</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.pushNotifications}
                    onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>

              {/* SMS Notifications */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">SMS Notifications</p>
                    <p className="text-xs text-gray-500">Text messages for urgent updates</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.smsNotifications}
                    onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Sync */}
        <div className="bg-white rounded-xl shadow-sm border lg:col-span-2">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Calendar Sync</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">Connect your calendar to sync court dates and appointments</p>
          </div>
          <div className="p-6">
            {isCalendarConnected ? (
              <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg mr-3">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-900">
                      Connected to {settings.calendarProvider === 'google' ? 'Google' : 'Apple'} Calendar
                    </p>
                    <p className="text-xs text-green-700">Your calendar is synchronized</p>
                  </div>
                </div>
                <button
                  onClick={handleCalendarDisconnect}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Connect your calendar to automatically sync your court appointments and deadlines.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleCalendarConnect('google')}
                    disabled={isSaving}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <Link className="h-4 w-4 mr-2" />
                    Connect Google Calendar
                  </button>
                  <button
                    onClick={() => handleCalendarConnect('apple')}
                    disabled={isSaving}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <Link className="h-4 w-4 mr-2" />
                    Connect Apple Calendar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-xl shadow-sm border lg:col-span-2">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Security</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">Manage your account security and privacy</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Change Password</p>
                  <p className="text-xs text-gray-500">Update your account password</p>
                </div>
                <button className="px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700">
                  Change
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                  <p className="text-xs text-gray-500">Add an extra layer of security</p>
                </div>
                <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">
                  Enable
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Login Sessions</p>
                  <p className="text-xs text-gray-500">Manage active sessions on other devices</p>
                </div>
                <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-xl shadow-sm border border-red-200 lg:col-span-2">
          <div className="p-6 border-b border-red-200">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-900">Danger Zone</h3>
            </div>
            <p className="text-sm text-red-600 mt-1">These actions are irreversible. Please be careful.</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
              <div>
                <p className="text-sm font-medium text-red-900">Delete Account</p>
                <p className="text-xs text-red-700">Permanently delete your account and all associated data</p>
              </div>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="flex items-center px-3 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Delete Account</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
