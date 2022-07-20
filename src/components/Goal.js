import React from "react"
import styled from "styled-components"
import box_boolean from "../assets/box-boolean-a.svg"
import box_float from "../assets/box-float-a.svg"
import box_integer from "../assets/box-integer-a.svg"
import box_string from "../assets/box-string-a.svg"
import {motion} from "framer-motion"

const GoalObj = styled.div`
    font-family:'Fresh-Steak';
    min-height: 10vh;
`


const Goal = ({ prompt, setSelectedGoal, completed }) => {


    const handleClick = () => {
        setSelectedGoal(prompt.name)
    }

    const checkBoxName = () => {
        if(prompt.name === "boolean"){
            return box_boolean
        }else if(prompt.name === "float"){
            return box_float
        } else if(prompt.name === "integer"){
            return box_integer
        } else if(prompt.name === "string"){
            return box_string
        }
    }

    return (
        <>
            <GoalObj onClick={handleClick}>
                <motion.img
                    src={checkBoxName()}
                    height="50"
                    whileHover={{
                        rotate: [0, 0, 10, -10, 0],
                        scale: 1.05
                    }}
                    style={{ height: "20vh" }}
                />
                {completed.includes(prompt.name) ? <p>Correct!</p> : null}
            </GoalObj>

        </>
    )
}

export default Goal