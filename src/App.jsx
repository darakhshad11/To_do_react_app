import App_name from "./App_name";
import App_todo from "./App_todo";
import Todo_iteam1 from "./Todo_iteam1";
import Todo_iteam2 from "./Todo_iteam2";
import "./App.css";
function App() {
  return (
    <center class="todo-container ">
      <App_name />
      <App_todo />
      <div class="items-container">
        <Todo_iteam1 />
      <Todo_iteam2/></div>
      
      

    </center>
  );
}

export default App;
