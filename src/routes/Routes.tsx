import AuthorizedRoutes from './AuthorizedRoutes';
import NonAuthorizedRoutes from './NonAuthorizedRoutes';

const Routes = () => {
  return (
    <>
      <NonAuthorizedRoutes />
      <AuthorizedRoutes isAuthenticated />
    </>
  );
};

export default Routes;
