const Payments = () => {
  return (
    <div className="bg-white w-full rounded-xl p-8">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl mt-4 mb-4">Payment</h1>
        <h3 className="text-2xl mt-3 mb-5">Linea de credito</h3>
        <div className="flex flex-row justify-between mt-4 mb-10">
          <h1 className="text-Violeta-xe text-3xl sm:text-5xl font-bold">$150.000.000</h1>
          <button className="px-8 py-2 bg-Primary-100 rounded-lg text-Blanco text-xl hover:bg-Primary-50">
            Incrementar Linea
          </button>
        </div>
        <div className="flex flex-col p-8 border border-zinc-300 rounded-lg mt-4">
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-col">
              <h3 className="text-lg mb-2">consumido</h3>
              <h2 className="font-bold text-xl">$150.00.000</h2>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg mb-2">Disponible</h3>
              <h2 className="font-bold text-xl">$0</h2>
            </div>
          </div>
          <div className="mt-4 mb-9 w-full py-2 bg-Violeta-xe rounded-xl"></div>
          
        </div>
        <div className="flex flex-row justify-between p-8 mt-7 mb-6">
          <h3 className="text-lg">Proxima deuda a pagar</h3>
          <h3 className="text-lg">07 de octubre de 2023</h3>
        </div>
      </div>
    </div>
  );
};

export default Payments;
