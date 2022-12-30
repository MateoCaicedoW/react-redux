
import TaskList from "./components/Tasks/TaskList";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useInit } from "./hooks/useInit";
import TaskForm from "./components/Tasks/TaskForm";
import { UserList } from "./components/Users/UserList";
import {UserForm} from "./components/Users/UserForm";
import { Login } from "./components/Auth/Login";
function App() {

  useInit()
  return (
    <main >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/add" element={ <TaskForm />} />
          <Route path="/tasks/edit/:id" element={<TaskForm />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/add" element={<UserForm />} />
          <Route path="/users/edit/:id" element={<UserForm />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  )

}

export default App
