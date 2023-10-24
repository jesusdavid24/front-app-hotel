import { Outlet, useNavigation } from 'react-router-dom';
import { Loader } from "../components/Loader";

export const Root = () => {

  const navigation = useNavigation();

  return (
    <div className="wrapper">
      <main>
        {navigation.state === 'loading' ? <Loader /> : <Outlet />}
      </main>
    </div>
  );
};

