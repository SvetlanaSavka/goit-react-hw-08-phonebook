import { Container } from 'components/Container/Container.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './common/AppBar';

const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
