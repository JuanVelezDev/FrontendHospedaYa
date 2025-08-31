import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                login: 'login.html',
                register: 'register.html',
                dashboard: 'pages/owner-dashboard/owner_dashboard.html',
                publish: 'pages/publish-property/index.html',
                search: 'pages/students-serch/student.html',
                booking: 'pages/student-booking/student_booking.html',
                property: 'pages/property-description/property_description.html',
                users: 'pages/users/index.html'
            }
        }
    }
   
})
