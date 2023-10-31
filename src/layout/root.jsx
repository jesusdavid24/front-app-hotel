import { Outlet, useNavigation } from 'react-router-dom';
import { Loader } from "../components/Loader";
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Root = () => {

  const navigation = useNavigation();

  return (
    <div className="wrapper">
      <Navbar />
      <main>
        {navigation.state === 'loading' ? <Loader /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

