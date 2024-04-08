#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoList = await inquirer.prompt([
        {
            name: "todoName",
            message: "What would like to add in your todos?",
            type: "input"
        },
        {
            name: "asking",
            type: "confirm",
            message: "Would you like to add more in your todos?",
            default: "true"
        }
    ]);
    todos.push(todoList.todoName);
    console.log(todos);
    condition = todoList.asking;
}
let todoList = await inquirer.prompt({
    name: "asking",
    type: "confirm",
    message: "Would like to update any todo?",
    default: "true"
});
if (todoList.asking) {
    let todoList = await inquirer.prompt([
        {
            name: "todoUpdate1",
            message: "Please write index no of todo you like to update:",
            type: "input"
        },
        {
            name: "todoUpdate2",
            message: "Please write new todo name:",
            type: "input"
        }
    ]);
    todos.splice(todoList.todoUpdate1 - 1, 1, todoList.todoUpdate2);
    console.log("Your todo has been updated");
    console.log(todos);
}
