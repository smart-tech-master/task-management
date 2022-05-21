import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './style.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {
          (provided, snapshot) => (
            <div className={`todo ${snapshot.isDraggingOver?"dragactive":""}`} ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">
                Active Tasks
              </span>
              {
                todos.map((todo, index) => (
                  <SingleTodo index={index} todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
                ))
              }
              { provided.placeholder }
            </div>
          )
        }
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {
          (provided, snapshot) => (
            <div className={`todo ${snapshot.isDraggingOver?"dragremove":""}`} ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">
                Completed Tasks
              </span>
              {
                completedTodos.map((todo, index) => (
                  <SingleTodo index={index} todo={todo} todos={completedTodos} key={todo.id} setTodos={setCompletedTodos} />
                ))
              }
              { provided.placeholder }
            </div>
          )
        }
      </Droppable>
    </div>
  )
}

export default TodoList;