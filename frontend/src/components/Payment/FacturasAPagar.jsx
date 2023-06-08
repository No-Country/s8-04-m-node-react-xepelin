import { useSelector } from 'react-redux'

const FacturasAPagar = () => {
  //const currentCompany = useSelector((state) => state.company.company)
  const currentInvoices = useSelector((state) => state.invoices.invoice)

  return (
    <div className="bg-white w-full rounded-xl p-8">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-3xl">Facturas por pagar</h1>
          <button className="font-bold text-Violeta-xe hover:text-violet-500">
            VER TODO
          </button>
        </div>
        <div className="mb-5 mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 border-collapse separate border-spacing-20">
            <thead className="text-xs text-gray-700 bg-Neutral-50">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox_all"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="checkbox_all" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Proveedor
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Monto
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Vencimiento
                </th>
              </tr>
            </thead>
            {/* Inicio Informacion Tabla Facturas a pagar */}
            {currentInvoices != null &&
                    currentInvoices.map((invoice, i) => {
                      return(
                        <tbody key={i}>
                        <tr className="bg-white border-b hover:bg-gray-400">
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox_all1"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="checkbox_all1" className="sr-only">
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4">{invoice.supplier}</td>
                          <td className="px-6 py-4">{invoice.status}</td>
                          <td className="px-6 py-4">${invoice.amount}</td>
                          <td className="px-6 py-4">{invoice.dueDate}</td>
                        </tr>
                      </tbody>
                      )
                    }
                  )}
            {/* Final Informacion Tabla Facturas a pagar */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default FacturasAPagar;
