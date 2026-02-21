import { NavBar } from "../NavBar/NavBar"
import { Logo } from "../ui/Logo/Logo"
import './Header.css'
 
export function Header(){
    return(
        <>
        <header>
            <div className="header-container">
                <div className="header-superior">
                    <Logo />
                </div>
                <div className="header-inferior">
                    <NavBar />
                </div>
            </div>
        </header>
        </>
    )
}