
import TaskList from "./components/Tasks/TaskList";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useInit } from "./hooks/useInit";
import TaskForm from "./components/Tasks/TaskForm";
import { Header } from "./components/Header";
import { UserList } from "./components/Users/UserList";
import {UserForm} from "./components/Users/UserForm";
function App() {

  useInit()
  return (
    <main >
      <BrowserRouter>
      <Header>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={ <TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/add" element={<UserForm />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Header>
      </BrowserRouter>
    </main>
  )

}

export default App
