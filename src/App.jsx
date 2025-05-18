import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MasterLayout from './Home/MasterLayout';
import Cars from './Cars/Cars';
import HowWork from './HowWork/HowWork';
import WhyChoose from './WhyChoose/WhyChoose';
import Testimonals from './Testimonals/Testimonals';
import RentCarApp from './RentCarApp/RentCarApp';
import NotFound from './NotFound/NotFound';
import AllCars from './AllCars/AllCars'; 
import CarDetail from './CarDetail/CarDetail';
import Contacts from './Contacts/Contacts';
import Navbar from './Navbar/Navbar';



  const routes = createBrowserRouter ([
    {
      path: "/" ,element: <MasterLayout/> ,
      errorElement:<NotFound/>,
         
     children:[ 
     {index : true  , element:(<>
      <Navbar/>
     <Cars />
            <HowWork />
            <WhyChoose/>
            <Testimonals/>
            <RentCarApp />
            <Contacts />
            
            
     </>
    ),
     },
  {path: "/AllCars" , element:<AllCars/>},
  {path: "/CarDetail/:id" , element:<CarDetail/>},

     ],
     
     },
     
     
  ]);
  function App() {
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
