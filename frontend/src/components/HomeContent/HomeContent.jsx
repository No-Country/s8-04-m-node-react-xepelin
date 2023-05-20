import React from 'react'

const HomeContent = () => {
  return (
    <main className='w-full h-auto p-4'>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <section className="col-span-1">
                <h1>
                    Plataforma de soluciones financieras para toda empresa
                </h1>
                <p>
                    Paga tus cuentas, adelanta el pago de tus facturas y soluciona tus problemas de liquidez - en una sola plataforma 100% digital.
                </p>
                <div className='grid gap-3 grid-cols-1 md:grid-cols-2'>
                    <div className='col-span-1'>
                        <button type="button" className=" w-full text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Purple</button>
                    </div>
                    <div className='col-span-1'>
                        <button type="button" className="w-full text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Purple</button>
                    </div>
                </div>
            </section>
            <section className="col-span-1">Columna 2</section>
        </div>
    </main>
  )
}

export default HomeContent;