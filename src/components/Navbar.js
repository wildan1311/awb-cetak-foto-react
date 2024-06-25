import logoAwb from '../assets/images/logo-awb.png'

function Navbar(){
    return (
        <nav className="bg-white fixed h-14 px-3 py-2 flex content-center items-center w-100">
                <img className='object-cover h-100 inline' src={logoAwb} alt='Logo Awb'/>
                <h1 className='font-bold text-2xl text-[#71c9ce] ms-2'>
                    AWB
                </h1>
        </nav>
    );
}

export default Navbar;