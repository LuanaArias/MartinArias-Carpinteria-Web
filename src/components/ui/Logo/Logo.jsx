import logoCompleto from '../../../assets/LogoCompleto.png'
import './Logo.css'

export function Logo(){
    return(
        <>
            <div className="logo-container">
                <img src={logoCompleto} alt="Logo"  className='imagen-logo'/>
            </div>
        </>
    )
}