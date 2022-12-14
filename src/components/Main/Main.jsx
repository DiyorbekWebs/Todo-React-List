import React from "react";
import "./main.css";
import "../../App.css";
const Main = () => {
  var [todos, setTodos] = React.useState([]);
  const Delete = (id) => {
    setTodos((item)=>{
      return item.filter((e)=> e.id !== id)
    })
  };
  const Edit = (id) => {
    setTodos((item)=>{
      return item.filter((e)=> {
        if(e.id == id){
          var promp=prompt('',e.name);
          e.name=promp;
        }
        return e
      } )
    })
  };
  return (
    <section className="todo">
      <div className="container">
        <div className="box">
          <div className="content">
            <p className="paragraf">Todo-List</p>
            <input
              placeholder="Add todo"
              className="input"
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  let todo = {
                    id: Math.random().toFixed(2),
                    name: e.target.value.trim(),
                  };
                  setTodos([...todos, todo]);
                  console.log(todos);
                  e.target.value = null;
                }
              }}
            />
            <ul className="list">
              {todos.map((item,index) => {
                return (
                  <>
                    <li className="item" >
                      <span key={index}>{item.name}</span>
                      <div className="btns">
                        <input type={"checkbox"} className="item-check" />
                        <button
                          onClick={() => Edit(item.id)}
                          className="ed-btn"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => Delete(item.id)}
                          className="del-btn"
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
