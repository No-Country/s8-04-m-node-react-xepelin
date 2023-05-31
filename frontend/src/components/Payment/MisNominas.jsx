/* eslint-disable react/no-unescaped-entities */
import { Dropdown, Table } from "flowbite-react";

// eslint-disable-next-line react/prop-types
const FacturasPagadas =({title, key})=>{

  return(

    <div key={key}>
      <h2 className="px-3 py-3 font-bold">
        {title}
      </h2>
      <Table>
      <Table.Head>
        <Table.HeadCell>
          Facturas
        </Table.HeadCell>
        <Table.HeadCell>
          Provedores
        </Table.HeadCell>
        <Table.HeadCell>
          Monto
        </Table.HeadCell>
        <Table.HeadCell>
          Fecha de pago
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            238
          </Table.Cell>
          <Table.Cell>
            32
          </Table.Cell>
          <Table.Cell>
            $145.655.444
          </Table.Cell>
          <Table.Cell>
            7 octubre 2021
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            238
          </Table.Cell>
          <Table.Cell>
            32
          </Table.Cell>
          <Table.Cell>
            $145.655.444
          </Table.Cell>
          <Table.Cell>
            7 octubre 2021
          </Table.Cell>
          
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            238
          </Table.Cell>
          <Table.Cell>
            32
          </Table.Cell>
          <Table.Cell>
            $145.655.444
          </Table.Cell>
          <Table.Cell>
            7 octubre 2021
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </div>
  )
}


const MisNominas = () => {

  const totalFacturas = ["facturas 7 octubre 2021"]
  return <div className="bg-white w-full rounded-xl p-4">
    <div className="flex items-center justify-between px-3 py-2 mb-3">
      <h2>Mis nominas</h2>
      <div>
      <Dropdown
        label="En proceso de revisión"
        className="bg-white"
      >
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
        </Dropdown.Item>
        <Dropdown.Item>
          Sign out
        </Dropdown.Item>
      </Dropdown>
      </div>
    </div>

    <div className="snap-y flex-1">
    {
      totalFacturas.map((factura, key) =>{

        return(
          <FacturasPagadas title={factura} key={key}/>
        )
      })
    }
    </div>
    

  </div>;
};

export default MisNominas;
