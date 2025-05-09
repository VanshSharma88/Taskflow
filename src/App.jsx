// import { useState } from 'react';
// import Header from './components/Header/Header';
// import KanbanBoard from './components/KanbanBoard/KanbanBoard';
// import { initialData } from './data/initialData';
// import './App.css';

// function App() {
//   const [data, setData] = useState(initialData);

//   const handleTaskMove = (taskId, newStatus) => {
//     const updatedData = {...data};
    
//     Object.keys(updatedData.columns).forEach(columnId => {
//       updatedData.columns[columnId].taskIds = updatedData.columns[columnId].taskIds.filter(id => id !== taskId);
//     });
    
//     updatedData.columns[newStatus].taskIds.push(taskId);
    
//     setData(updatedData);
//   };

//   return (
//     <div className="app">
//       <Header />
//       <main className="main-content">
//         <KanbanBoard data={data} onTaskMove={handleTaskMove} />
//       </main>
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { initialData } from './data/initialData';
import Header from './components/Header/Header';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import { SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import './App.css';

function App() {
  const [data, setData] = useState(initialData);

  const handleTaskMove = (taskId, newStatus) => {
    const updatedData = { ...data };

    Object.keys(updatedData.columns).forEach(columnId => {
      updatedData.columns[columnId].taskIds = updatedData.columns[columnId].taskIds.filter(id => id !== taskId);
    });

    updatedData.columns[newStatus].taskIds.push(taskId);
    setData(updatedData);
  };

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
      <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />

      {/* Protected route */}
      
      <Route
        path="/"
        element={
          <>
            <SignedIn>
              <div className="app">
                <Header />
                <main className="main-content">
                  <KanbanBoard data={data} onTaskMove={handleTaskMove} />
                </main>
              </div>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
}

export default App;
