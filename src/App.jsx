
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import TaskForm from "./components/TaskForm";
function App() {


  return (
    <main className="container mx-auto p-8">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={ <TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
