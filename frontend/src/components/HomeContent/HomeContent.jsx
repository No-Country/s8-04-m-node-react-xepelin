// eslint-disable-next-line no-unused-vars
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import videoPrincipal from "../../assets/video/dashboard-xepelin.mp4";
import { cmp, flesan, izquierdo, mega, sacyr, wom } from '../../assets/images';
import Button from "../button/Button.jsx";

const HomeContent = () => {
  return (
    <main className='w-full h-auto p-7 bg-Neutral-50'>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 py-5 my-[5rem] ">
            <section className="col-span-1">
                <h1 className='text-[2.5rem] lg:text-[3.5rem] font-bold'>
                    Plataforma de <span className="text-Naraja-xe">
                    soluciones financieras
                    </span> para toda empresa
                    
                </h1>
                <p className='mt-[1.5rem] text-[1.125rem] leading-7'>
                    <span className='font-bold'> Paga</span> tus cuentas, <span className='font-bold'> adelanta</span>  el pago de tus facturas y soluciona tus problemas de liquidez - en una sola plataforma <span className='font-bold'> 100% digital.</span> 
                </p>
                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 pt-6'>
                    <div className='col-span-1'>
                        <button type="button" className=" w-full  text-white border border-purple-700 bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Comenzar Ahora</button>
                    </div>
                    <div className='col-span-1'>
                        <button type="button" className="w-full text-purple-700  border border-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Contactanos</button>
                    </div>
                </div>
            </section>
            <section className="col-span-1 flex justify-center items-center">
                <video src={videoPrincipal} autoPlay={true} loop className='shadow-slate-800'>
                </video>
            </section>
        </div>

        <div>
            <h2 className='text-center text-[#8d96b8] font-bold text-[1.25rem]'>
                Más de 20,000 empresas confían en el financiamiento de Xepelin
            </h2>

            

            <div className="my-8 py-8 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                <div className="col-span-1 flex items-center justify-center">
                    <img src={wom} alt='wom' />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                <img src={cmp} alt='cmp' />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                <img src={flesan} alt='flesan'/>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                <img src={sacyr} alt='sacyr' />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                <img src={izquierdo} alt='izquierdo' />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                <img src={mega} alt='mega' />
                </div>
            </div>
            
            <div className='w-full px-10 mx-auto'>
                <div className='flex flex-col md:flex-row justify-center items-center bg-white py-6 px-2 rounded-xl'>
                    <h2 className='my-2 mx-2'>
                    Explora nuestro producto:
                    </h2>
                    <p className='my-2 mx-2 font-bold'>Payments</p>

                    <Button>
                        <div className='flex items-center justify-center'>
                        <span className='mx-2'>Conoce mas.</span>
                        <AiOutlineArrowRight/>
                        </div>
                    </Button>   
                </div>
            </div>

        </div>
    </main>
    )
}


export default HomeContent;