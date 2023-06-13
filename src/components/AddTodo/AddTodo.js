import React, {useState} from "react";
import {v4} from "uuid";
import {Button, Col, FormControl, Row} from "react-bootstrap";
import s from "./AddTodo.module.css"


function AddTodo ({todo, setTodo}) {

    const [value, setValue] = useState('')
    function saveTodo(){
        if (value) {
            setTodo(
                [...todo, {
                    id: v4(),
                    title: value,
                    status: true
                }]
            )
            setValue('')
        }
    }

    return(
        <Row>
            <Col className={s.addTodoForm}>
                <FormControl placeholder={'Введіть завдання'} value={value} onChange={ (e)=>setValue(e.target.value)}/>
                <Button onClick={saveTodo} className={s.btn} >Зберегти</Button>
            </Col>
        </Row>
    )
}

export default AddTodo