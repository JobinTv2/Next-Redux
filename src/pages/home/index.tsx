/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { useState, ChangeEvent } from 'react';
import styles from '@/styles/Home.module.css';
import { Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addToDo } from '@/reducers/todoSlice';

interface Todo {
  id: number;
  content: string;
}
export default function Home(): JSX.Element | null {
  const dispatch = useDispatch();
  const { todos } = useSelector(
    (state: {
      todos: {
        todos: Todo[];
      };
    }) => state
  );

  const [state, setState] = useState<string>();

  const handleChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setState(e.target.value);
  };

  const handleSubmit: () => void = () => {
    const id = Math.floor(new Date().valueOf() * Math.random());
    dispatch(addToDo({ content: state, id }));
    setState('');
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <Input onChange={handleChange} value={state} />
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
        <div className={styles.listContainer}>
          {todos?.todos.map((todo) => {
            return <li key={todo.id}>{todo.content}</li>;
          })}
        </div>
      </div>
    </div>
  );
}
