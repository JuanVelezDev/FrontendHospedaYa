# HospedaYa 🏠 - Frontend

## 📖 Overview

HospedaYa is a comprehensive student housing rental platform designed to connect property owners with students seeking accommodation. The platform addresses the common challenges faced by students when looking for housing near universities and provides property owners with an efficient way to manage their rentals.

In many university cities, students struggle to find reliable, affordable housing close to their campuses. Property owners often face difficulties in managing multiple properties, handling bookings, and maintaining communication with tenants. Traditional rental processes are often fragmented, leading to inefficiencies, lack of transparency, and poor user experiences.

With HospedaYa, both students and property owners can benefit from a unified platform that offers:
- Streamlined apartment listings with detailed information and photos
- Secure booking system with approval workflow
- Real-time availability tracking
- Integrated payment management
- Role-based access for different user types

The system also includes modern features such as:
- Cloud-based image storage for apartment photos
- RESTful API architecture for scalability
- Secure authentication system
- Real-time booking status updates

## 🎯 Target Audience

- **Students** looking for affordable, reliable housing near universities
- **Property Owners** seeking to rent their properties to students
- **University Administrators** who want to provide housing resources to their students
- **Real Estate Agents** specializing in student housing

## 🚀 MVP Features

### 👤 Students
- Register and create profiles
- Browse available apartments with filters
- View detailed apartment information and photos
- Submit booking requests
- Track booking status
- Manage personal information

### 🏢 Property Owners
- Register and verify property ownership
- List multiple apartments with detailed descriptions
- Upload apartment photos
- Manage booking requests (approve/reject)
- View booking history and analytics
- Update apartment availability

### 🔐 Authentication & Security
- Secure user registration and login
- Role-based access control
- Password protection
- Session management

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic and accessible structure
- **CSS3** - Modern and responsive styles
- **JavaScript (ES6+)** - Interactive client-side functionality
- **Vite** - Fast build tool and development server

### Libraries and Frameworks
- **Font Awesome** - Iconography and visual elements
- **SweetAlert2** - Elegant alerts and modals
- **ES6 Modules** - Modern module system

### External Services
- **Cloudinary** - Cloud storage and image management
- **Unsplash** - Stock images for sample properties

### Development Tools
- **Vite** - Development server and bundling
- **PostCSS** - CSS processing
- **ESBuild** - Fast JavaScript bundler

## 📂 Project Structure

```
FrontendHospedaYa/
├── 📁 js/
│   ├── 📄 auth.js                    # Authentication management
│   ├── 📄 landing.js                 # Main page functionality
│   ├── 📄 login.js                   # Login logic
│   └── 📄 register.js                # Registration logic
├── 📁 pages/
│   ├── 📁 images/                    # Project images
│   │   ├── 📁 property_description/  # Property description images
│   │   └── 📁 student_booking/       # Student booking images
│   ├── 📁 owner-dashboard/
│   │   ├── 📄 owner_dashboard.css    # Owner dashboard styles
│   │   ├── 📄 owner_dashboard.html   # Owner dashboard
│   │   └── 📄 owner_dashboard.js     # Dashboard logic
│   ├── 📁 property-description/
│   │   ├── 📄 property_description.css
│   │   ├── 📄 property_description.html
│   │   └── 📄 property_description.js
│   ├── 📁 publish-property/
│   │   ├── 📄 index.html             # Publication form
│   │   ├── 📄 publish.css            # Form styles
│   │   └── 📄 publish.js             # Publication logic
│   ├── 📁 student-booking/
│   │   ├── 📄 student_booking.css
│   │   ├── 📄 student_booking.html
│   │   └── 📄 student_booking.js
│   ├── 📁 students-serch/
│   │   ├── 📄 student.html           # Room search
│   │   ├── 📄 student.js             # Search logic
│   │   └── 📄 styles.css             # Search styles
│   └── 📁 users/
│       ├── 📄 index.html             # User management
│       └── 📄 users.css              # User styles
├── 📁 styles/
│   ├── 📄 dashboard.css              # Main dashboard styles
│   └── 📄 global.css                 # Global styles
├── 📄 index.html                     # Main page
├── 📄 login.html                     # Login page
├── 📄 register.html                  # Registration page
├── 📄 package.json                   # Dependencies and scripts
├── 📄 vite.config.js                 # Vite configuration
├── 📄 vercel.json                    # Deployment configuration
└── 📄 _redirects                     # Redirect rules
```

## 🖥️ Frontend Setup

### ✅ Requirements
- Node.js 14.0+
- npm or yarn
- Git
- Modern web browser

### ⚙️ Installation

#### 1. Clone the repository
```bash
git clone https://github.com/your-username/FrontendHospedaYa.git
cd FrontendHospedaYa
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Configure environment variables
Create a `.env` file in the root directory with your configuration:

```env
# API Configuration
VITE_API_URL=https://backendhospedaya.onrender.com

# Cloudinary Configuration (if needed)
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
VITE_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
```

#### 4. Run the development server
```bash
# Development mode
npm run dev
```

The server will start on `http://localhost:5173`

#### 5. Build for production
```bash
# Build for production
npm run build
```

## 🎨 Interface Features

### Responsive Design
- Adaptive design for mobile, tablet, and desktop devices
- Intuitive and accessible navigation
- Modern interface with smooth animations

### User Experience
- Optimized registration and login forms
- Advanced property search with filters
- Booking system with visual confirmations
- Personalized dashboard for each user type

### Main Components
- **Header/Navigation**: Main navigation with authentication
- **Hero Section**: Main section with call-to-action
- **Property Cards**: Property cards with detailed information
- **Search Interface**: Search interface with filters
- **Booking System**: Integrated booking system
- **User Dashboard**: Personalized control panel

## 🔌 Backend Integration

### Used Endpoints
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /apartment` - Get apartment listings
- `POST /apartment` - Create new apartment
- `POST /booking` - Create booking request
- `PUT /booking/:requestId/approve` - Approve booking
- `PUT /booking/:requestId/reject` - Reject booking

### State Management
- Local storage for user sessions
- Authentication state management
- Property data caching

## 🧪 Usage Examples

### User Registration
```javascript
// User registration example
const userData = {
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    password: "password123",
    role: "student",
    phone: "3001234567"
};

fetch('/auth/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
});
```

### Property Search
```javascript
// Property search example
const searchFilters = {
    city: "Medellin",
    maxPrice: 800000,
    amenities: ["wifi", "parking"]
};

fetch('/apartment?' + new URLSearchParams(searchFilters))
    .then(response => response.json())
    .then(properties => displayProperties(properties));
```

## 🔧 Environment Variables

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `VITE_API_URL` | Backend API URL | `https://backendhospedaya.onrender.com` |
| `VITE_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `dgwl78wtf` |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | Cloudinary upload preset | Configured in backend |

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on each push

### Netlify
1. Connect repository to Netlify
2. Configure build command: `npm run build`
3. Configure output directory: `dist`

### GitHub Pages
1. Run `npm run build`
2. Upload `dist/` content to `gh-pages` branch

## 📊 Features by Page

### Main Page (`index.html`)
- Landing page with project information
- Featured properties
- Call-to-action for registration
- Main navigation

### Room Search (`pages/students-serch/`)
- Advanced search filters
- Grid of available properties
- Detailed information for each property
- Booking system

### Property Publication (`pages/publish-property/`)
- Complete publication form
- Multiple image upload
- Amenity selection
- Form validation

### Owner Dashboard (`pages/owner-dashboard/`)
- Management of published properties
- Pending booking requests
- Rental statistics
- Account settings

## 🚀 Live Demo

- **Frontend**: [https://frontendhospedaya.vercel.app](https://frontendhospedaya.vercel.app)
- **Backend API**: [https://backendhospedaya.onrender.com](https://backendhospedaya.onrender.com)

## 👨‍💻 Team Credits

### Project Management
- **Juan Esteban Velez Jimenez** – Scrum Master & Project Coordination

### Product & Strategy
- **Andres Covaleda** – Product Owner & Requirements Management

### Development Team
- **Mariana Carmona Zapata** – Frontend Developer & API Implementation
- **Julian Morales** – Frontend Developer & Database Design
- **Dawinzon Polo** – Backend Developer & Authentication System

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

## 🔮 Upcoming Features

- [ ] Real-time messaging system
- [ ] Map integration for property location
- [ ] Integrated payment system
- [ ] Native mobile application
- [ ] Review and rating system
- [ ] Push notifications

---

**HospedaYa** - Connecting students with their perfect home away from home! 🏠✨
