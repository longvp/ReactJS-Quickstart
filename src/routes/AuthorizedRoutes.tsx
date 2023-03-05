import { Navigate, Route, Routes } from 'react-router-dom';

import Home from 'pages/home/Home';

interface IProps {
  isAuthenticated: boolean;
}

const AuthorizedRoutes = ({ isAuthenticated = true }: IProps) => {
  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AuthorizedRoutes;
