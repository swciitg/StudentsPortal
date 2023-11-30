// import React from 'react';
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import HomePage from './Pages/HomePage';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import OptionSelector from './Pages/OptionSelector';
import StudentLogin1 from './Pages/StudentLogin1';
import Admin1 from './Pages/Admin1';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OptionSelector />} />
        <Route path="/studentlogin1" element={<StudentLogin1 />} />
        <Route path="/Admin1" element={<Admin1 />} />
      </Routes>
    </Router>
    
  );
};

export default App;
