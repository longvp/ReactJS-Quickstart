import { Route, Routes } from 'react-router-dom';

import LoginPage from 'pages/non-auth/Login';

const NonAuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default NonAuthorizedRoutes;
