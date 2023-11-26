import React from "react";
import css from './Main.module.css'


const data = [
    {
        val: "AC",
      },
      {
        val: "/",
      },
      {
        val: "*",
      },
      {
        val: "￩",
      },
      {
        val: "7",
      },
      {
        val: "8",
      },
      {
        val: "9",
      },
      {
        val: "-",
      },
      {
        val: "4",
      },
      {
        val: "5",
      },
      {
        val: "6",
      },
      {
        val: "+",
      },
      {
        val: "1",
      },
      {
        val: "2",
      },
      {
        val: "3",
      },
      {
        val: ".",
      },
      {
        val: "(",
      },
      {
        val: "0",
      },
      {
        val: ")",
      },
      {
        val: "=",
        color: "red"
      },   
]

export class Main extends React.Component{
    constructor(){
        super()

        this.state ={
            inputValue: 0,
        }
    }

ClickOn=(event)=>{
let btns = event.target.innerHTML;
}
    render(){
        return(
            <div className={css.container}>
                <div className={css.result}>{this.state.inputValue}</div>
                <div className={css.wrapper}>
                {
                    data.map((el,id)=>{
                        return <button onClick={this.ClickOn} style={{backgroundColor:el.color}} className={css.btn}>{el.val}</button>
                    })
                }
                </div>
            </div>
        )
    }
}