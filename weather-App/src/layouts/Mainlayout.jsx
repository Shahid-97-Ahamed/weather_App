
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
       <div className='min-h-screen flex justify-center items-center'>
        <Outlet ></Outlet>
       </div>
    );
};

export default Mainlayout;