import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import CustomizePage from './pages/Dashboard/CustomizePage';
import ContactsPage from './pages/Dashboard/ContactsPage';
import SettingsPage from './pages/Dashboard/SettingsPage';
import Layout from './components/layout/Layout';
import { UserProvider } from './contexts/UserContext';

import Login from './pages/Login';
import ProfilePage from './pages/ReadPages/ProfilePage';

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    {/* ProfilePage ve Login Layout kullanmadan */}
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/login" element={<Login />} />

                    {/* Layout içeren rotalar */}
                    <Route element={<Layout />}>
                    <Route path="/" element={<Navigate to="/customize" />} />
                    <Route path="/customize" element={
                        
                            <CustomizePage />
                    } />
                        <Route path="/contacts" element={
                            
                                <ContactsPage />

                        } />
                        <Route path="/settings" element={
                            
                                <SettingsPage />

                        } />
                    </Route>
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
