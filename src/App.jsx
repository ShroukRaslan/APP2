import { RouterProvider, createBrowserRouter } from 'react-router'
import MasterLayout from './Home/MasterLayout';
import Cars from './Cars/Cars';
import HowWork from './HowWork/HowWork';
import WhyChoose from './WhyChoose/WhyChoose';
import Testimonals from './Testimonals/Testimonals';
import RentCarApp from './RentCarApp/RentCarApp';

import AllCars from './AllCars/AllCars'; 
import CarDetail from './CarDetail/CarDetail';

function App() {
  const routes = createBrowserRouter ([
    {
      path: "/" ,element: <MasterLayout/> ,
           errorElement: <NotFound/> ,
     children : [ 
     {index : true  , element:(<>
     <Cars />,
            <HowWork />,
            <WhyChoose/>,
            <Testimonals/>,
            <RentCarApp />,
           
            
            
     </>
    )
     },
  {path: "/details" , element:<AllCars/>},
  {path: "/showallcars" , element:<CarDetail/>},

     ]
     
     }
     
     
  ]);

  return (
    <>
  <RouterProvider router={routes}></RouterProvider> 

 
    {/*
    <Router>
      <Navbar />
      <Cars />
      <HowWork />
      <WhyChoose />
      <Testimonals />
      <RentCarApp />
      <Contacts />

      <Routes>
      
        <Route path="/AllCars" element={<AllCars />} />
        <Route path="/carDetail/:id" element={<CarDetail />} />
      </Routes>
    </Router> 
  */}
  </>

  );
}

export default App;
