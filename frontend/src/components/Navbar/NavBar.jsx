import React from 'react'
import { grupo, zepelin } from '../../assets/images'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { onLogout } from '../../Redux/auth/authSlice'
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const currentStatus = useSelector((state)=> state.user.status);
  const currerntUser = useSelector((state)=> state.user.user)
  console.log(currentStatus, currerntUser)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logOut =()=>{
    dispatch(onLogout());
    navigate("/")
  }

  return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center">
          <img src={zepelin} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zepellin</span>
        </Link>
        

        {
          currentStatus !== "authenticated"  && (
            <div className="flex md:order-2" id='buttons-login-register'>
              <Link to={"/register"}>
                <button type="button" className="text-black mx-2  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sing Up</button>
              </Link>
              <Link to={"/login"}>
                <button type="button" className="text-white bg-Primary-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sing In</button>
              </Link>
              
            </div>
          )
        }

        {
          currentStatus === "authenticated" && (
            <div className="flex items-center">
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    <img src={grupo} alt='grupo' className='w-[2rem]' />
                   <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                          <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">{currerntUser.firstName}</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{currerntUser.email}</span>
                          </div>
                        <li>
                            <Link to={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              Dashboard
                            </Link>
                        </li>
                        <li>
                          <Link to={"/profile"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              Profile
                          </Link>
                        </li>
                        </ul>
                    <div className="py-1">
                      <button onClick={()=>logOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white" id='logout'>
                        Sign out
                      </button>
                    </div>
                    </div>
            </div>
          )
        }
        </div>
      </nav>

  )
}
export default NavBar