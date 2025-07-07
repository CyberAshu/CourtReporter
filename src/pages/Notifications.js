import React, { useState } from 'react';
import { Bell, Check, Trash2, Filter, MoreHorizontal, Clock, AlertCircle, CheckCircle, Info } from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New job assigned',
      message: 'Family Court Hearing scheduled for tomorrow at 10:00 AM in Courtroom 101',
      type: 'job',
      time: '2 minutes ago',
      unread: true,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Payment received',
      message: 'Invoice #INV-001 has been paid. Amount: $750.00',
      type: 'payment',
      time: '1 hour ago',
      unread: true,
      priority: 'medium'
    },
    {
      id: 3,
      title: 'File uploaded successfully',
      message: 'Transcript for case #5678 has been uploaded to the system',
      type: 'file',
      time: '3 hours ago',
      unread: false,
      priority: 'low'
    },
    {
      id: 4,
      title: 'Reminder: Upcoming deadline',
      message: 'Invoice #INV-002 is due in 2 days. Please ensure timely submission.',
      type: 'reminder',
      time: '5 hours ago',
      unread: false,
      priority: 'high'
    },
    {
      id: 5,
      title: 'Feedback received',
      message: 'Client has provided feedback for your recent work on case #1234',
      type: 'feedback',
      time: '1 day ago',
      unread: false,
      priority: 'low'
    }
  ]);

  const [filter, setFilter] = useState('all'); // all, unread, read

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, unread: false } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, unread: false })));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const clearAllRead = () => {
    setNotifications(prev => prev.filter(notif => notif.unread));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'job': return <AlertCircle className="h-5 w-5 text-blue-600" />;
      case 'payment': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'file': return <Info className="h-5 w-5 text-purple-600" />;
      case 'reminder': return <Clock className="h-5 w-5 text-orange-600" />;
      case 'feedback': return <Bell className="h-5 w-5 text-indigo-600" />;
      default: return <Bell className="h-5 w-5 text-gray-600" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return notif.unread;
    if (filter === 'read') return !notif.unread;
    return true;
  });

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">Stay updated with job alerts, payments, reminders, and feedback</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-600">{unreadCount} unread</span>
          <button
            onClick={markAllAsRead}
            className="px-3 py-1 text-sm text-primary-600 hover:text-primary-700"
          >
            Mark all as read
          </button>
          <button
            onClick={clearAllRead}
            className="px-3 py-1 text-sm text-red-600 hover:text-red-700"
          >
            Clear all read
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {[
              { key: 'all', label: 'All', count: notifications.length },
              { key: 'unread', label: 'Unread', count: unreadCount },
              { key: 'read', label: 'Read', count: notifications.length - unreadCount }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`${
                  filter === tab.key
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                {tab.label}
                <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                  filter === tab.key ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-900'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Notifications List */}
        <div className="divide-y divide-gray-200">
          {filteredNotifications.length === 0 ? (
            <div className="p-8 text-center">
              <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-500">
                {filter === 'unread' ? 'All caught up! No unread notifications.' : 'No notifications to show.'}
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-6 hover:bg-gray-50 transition-colors border-l-4 ${getPriorityColor(notification.priority)} ${
                  notification.unread ? 'bg-blue-50' : 'bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      {getIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm font-medium ${notification.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                          {notification.title}
                          {notification.unread && (
                            <span className="ml-2 w-2 h-2 bg-primary-600 rounded-full inline-block"></span>
                          )}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{notification.time}</span>
                          <div className="flex items-center space-x-1">
                            {notification.unread && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="p-1 text-gray-400 hover:text-gray-600"
                                title="Mark as read"
                              >
                                <Check className="h-4 w-4" />
                              </button>
                            )}
                            <button
                              onClick={() => deleteNotification(notification.id)}
                              className="p-1 text-gray-400 hover:text-red-600"
                              title="Delete notification"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <p className={`mt-1 text-sm ${notification.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                        {notification.message}
                      </p>
                      
                      <div className="mt-2 flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          notification.priority === 'high' 
                            ? 'bg-red-100 text-red-800' 
                            : notification.priority === 'medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {notification.priority} priority
                        </span>
                        
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          notification.type === 'job'
                            ? 'bg-blue-100 text-blue-800'
                            : notification.type === 'payment'
                            ? 'bg-green-100 text-green-800'
                            : notification.type === 'file'
                            ? 'bg-purple-100 text-purple-800'
                            : notification.type === 'reminder'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-indigo-100 text-indigo-800'
                        }`}>
                          {notification.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
