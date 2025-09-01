import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                login: 'login.html',
                register: 'register.html',
                adminDashboard: 'pages/admin-dashboard/admin_dashboard.html',
                studentDashboard: 'pages/student-dashboard/student_dashboard.html',
                ownerDashboard: 'pages/owner-dashboard/owner_dashboard.html',
                propertyDescription: 'pages/property-description/property_description.html',
                publishProperty: 'pages/publish-property/index.html',
                studentBooking: 'pages/student-booking/student_booking.html',
                studentsSerch: 'pages/students-serch/student.html',
                users: 'pages/users/index.html'
            }
        }
    }
});