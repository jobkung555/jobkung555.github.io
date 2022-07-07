import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyleHeader = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(50px);
`
const HeaderCon = styled.div`
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto
`
const Menu = styled.ul`
    display: flex;
    & > li{
        list-style-type: none;
        margin: 0 10px;
        & > a{
            color: #FFF;
            text-decoration: none;
            &:hover{
                color: red;
            }
        }
    }
`
const LogoHeader = styled.div`
    width: 100%;
    & > a{
        color: #FFF;
        font-size: 2em;
        text-decoration: none;
    }
`

export const Header = () => {

    const [click, setClick] = useState(false)
    const [user, setUser] = useState([])
    const handleClick = () => setClick(!click)

    useEffect(() => {
        // getuser()
    }, [])

    async function getuser() {
        try {
            const data = await (await fetch("http://localhost:5000/api/users")).json()
            setUser(data)
            console.log(data)
        } catch (err) {
            setUser(null)
            console.log(err)
        }
    }

    return (
        <StyleHeader>
            <div className="container">
                <HeaderCon>
                    <LogoHeader onClick={handleClick}>
                        <a href="#" className={click ? "active" : ""}>Job Nep</a>
                    </LogoHeader>
                    <Menu>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </Menu>
                    <div className="mobile-menu">

                    </div>
                </HeaderCon>
            </div>
        </StyleHeader>
    )
}