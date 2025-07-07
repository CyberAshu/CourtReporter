# Court Reporter Dashboard

A comprehensive React-based dashboard application for court reporters to manage their daily tasks, jobs, payments, files, and schedules.

![Dashboard Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Court+Reporter+Dashboard)

## 🚀 Features

### ✅ **Dashboard (Home Overview)**
- **Today's Jobs**: Job list cards showing current day's assignments
- **Upcoming Jobs**: Mini cards sorted by nearest dates  
- **Pending Uploads**: Counter for jobs awaiting file upload
- **Pending Payments**: Counter for unpaid jobs
- **Notifications**: Badge icon with unread count
- **Real-time data updates** on screen load
- **Interactive Charts**: Case overview and statistics

### ✅ **Profile Management**
- **Profile Photo**: Optional image upload with preview
- **Personal Information**: Full name, email, phone, role
- **Address**: Editable text area
- **Certifications**: File upload and management
- **Quick Stats**: Cases, ratings, experience overview
- **Bio Section**: Personal description

### ✅ **Settings & Preferences**
- **Language Selection**: Multi-language support (EN, ES, FR, DE, IT)
- **Notifications**: Toggle for Email, push, SMS notifications
- **Calendar Sync**: OAuth integration with Google/Apple Calendar
- **Security**: Password change, 2FA, session management
- **Account Management**: Safe account deletion with confirmation

### ✅ **Authentication**
- **Secure Login**: Email and password with validation
- **Password Reset**: Forgot password functionality
- **Session Management**: Automatic logout and session persistence
- **Demo Credentials**: Built-in demo account for testing
- **Form Validation**: Real-time field validation

### ✅ **Bill Management**
- **Payment Modes**: "Pay When Billed" vs "Pay When Paid" options
- **Invoice Tracking**: Bill date, due date, amount, status
- **Status Management**: Paid, Unpaid, Overdue tracking
- **Invoice Download**: Generate and download invoices
- **Payment Analytics**: Summary statistics and totals

### ✅ **Search Bills**
- **Advanced Search**: Filter by Job ID, date range, payment status
- **Invoice Finder**: Comprehensive search functionality
- **Results Table**: Detailed bill information with actions
- **Export Options**: Download and view capabilities

### ✅ **Notifications Center**
- **Alert Types**: Job alerts, payment confirmations, reminders, feedback
- **Priority Levels**: High, medium, low priority classification
- **Mark as Read**: Individual and bulk read management
- **Real-time Updates**: Live notification feed
- **Filtering**: View all, unread, or read notifications

### ✅ **Files Directory**
- **Document Management**: Upload, view, download, delete files
- **File Types**: Support for PDF, DOCX, MP4, JPG, and more
- **Job Association**: Link files to specific court cases
- **Search & Filter**: Find files by name, type, or job
- **File Statistics**: Track total files, sizes, and uploads

### ✅ **Holiday Planner**
- **Time Off Requests**: Submit vacation and leave requests
- **Date Selection**: Start and end date picker with validation
- **Approval Status**: Pending, approved, rejected tracking
- **Calendar Blocking**: Automatic availability calendar updates
- **Request Management**: Edit and delete pending requests

## 🛠 Technology Stack

- **Frontend**: React 19.1.0 with functional components and hooks
- **Styling**: Tailwind CSS 3.4.17 for responsive design
- **Icons**: Lucide React for consistent iconography
- **Charts**: Recharts 3.0.2 for data visualization
- **Routing**: React Router DOM 7.6.3 for navigation
- **Components**: Headless UI for accessible components
- **Testing**: React Testing Library for component testing

## 🎨 Design Features

- **Modern UI**: Clean, professional interface matching the provided theme
- **Responsive Design**: Fully responsive for all device sizes (mobile, tablet, desktop)
- **Dark Sidebar**: Modern dark sidebar with blue accent colors
- **Interactive Charts**: Dynamic data visualization with hover effects
- **Smooth Animations**: Fade-in and slide-in transitions
- **Professional Cards**: Shadow effects and hover states
- **Color-coded Status**: Visual status indicators throughout
- **Accessible Design**: WCAG-compliant interface elements

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd court-reporter-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🔐 Demo Credentials

For testing purposes, use these demo credentials:
- **Email**: demo@court.com
- **Password**: demo123

*Or enter any email and password combination to access the demo*

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Navigation sidebar with responsive design
│   └── Header.js           # Top header with search and user menu
├── pages/
│   ├── Dashboard.js        # Main dashboard with overview
│   ├── Login.js           # Authentication page
│   ├── Profile.js         # User profile management
│   ├── Settings.js        # Application preferences
│   ├── BillManagement.js  # Invoice and payment tracking
│   ├── SearchBills.js     # Bill search functionality
│   ├── Notifications.js   # Notification center
│   ├── FilesDirectory.js  # Document management
│   └── HolidayPlanner.js  # Time off management
├── App.js                 # Main application component
├── App.css               # Global styles and Tailwind imports
└── index.js              # Application entry point
```

## 📱 Responsive Design

### Mobile (320px - 768px)
- Collapsible sidebar with overlay
- Stacked cards and components
- Touch-friendly buttons and interactions
- Optimized typography and spacing

### Tablet (768px - 1024px)
- Adaptive grid layouts
- Balanced sidebar and content
- Optimized for touch and mouse interaction

### Desktop (1024px+)
- Full sidebar navigation
- Multi-column layouts
- Hover effects and tooltips
- Enhanced data visualization

## 🔧 Key Features Implementation

### State Management
- React hooks for local component state
- Context for global user state
- LocalStorage for session persistence
- Form validation and error handling

### Data Visualization
- Interactive charts using Recharts
- Real-time data updates
- Color-coded metrics and KPIs
- Progress indicators and statistics

### User Experience
- Intuitive navigation with active state indicators
- Loading states and feedback messages
- Confirmation dialogs for destructive actions
- Smooth transitions and animations
- Comprehensive form validation

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)  
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Responsive image handling
- **Efficient Rendering**: React.memo and useMemo optimizations
- **Bundle Optimization**: Webpack optimizations for production

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Tests include:
- Component rendering tests
- User interaction tests
- Form validation tests
- Navigation tests

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Various Platforms
- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Import your project for instant deployments
- **GitHub Pages**: Use `gh-pages` package for GitHub hosting
- **AWS S3**: Upload build files to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔗 Links

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/)

---

**Built with ❤️ for Court Reporters**
