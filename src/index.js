import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const users = [
    {username: 'Jerry', age: 21, gender: 'male'},
    {username: 'Tome', age: 22, gender: 'male'},
    {username: 'Lily', age: 19, gender: 'male'},
    {username: 'Lucy', age: 20, gender: 'male'}
]


class Index extends  Component
{
    render()
    {
        const usersElements = []
        for(let user of users)
        {
            usersElements.push(
                <div>
                    <div>姓名: {user.username}</div>
                    <div>年龄: {user.age}</div>
                    <div>性别: {user.gender}</div>
                    <hr/>
                </div>
            )
        }
        return(
           <div>{usersElements}</div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);




