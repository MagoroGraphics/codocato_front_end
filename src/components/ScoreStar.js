import { motion } from "framer-motion"
import React from "react"
import star from "../assets/star1.svg"
import styled from "styled-components"

const StyledStart = styled.div`
    height: 100%;
    width:100%;
    cursor: pointer;
`

const ScoreStar = ({ setAppState, nextState }) => {

    const handleClick = () => {
        setAppState(nextState)
    }

    return (
        <>
            <motion.div
                className="splash"
                initial={{ y: 1000 }}
                transition={{ duration: 1 }}
                animate={{ y: 0 }}
            >
                <StyledStart>
                    <motion.img
                        src={star}
                        onClick={handleClick}
                        animate={{
                            rotate: [0, 0, 10, -10, 0],
                        }}
                        transition={{ repeat: Infinity, duration: 1.2, delay: 1 }} />
                </StyledStart>
            </motion.div>
        </>
    )

}

export default ScoreStar