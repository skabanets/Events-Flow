import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const EventsBoard = lazy(() => import('../pages/EventsBoard/EventsBoard'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Participants = lazy(() => import('../pages/Participants/Participants'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events-board" element={<EventsBoard />} />
        <Route path="registration/:eventId" element={<Registration />} />
        <Route path="participants/:eventId" element={<Participants />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
