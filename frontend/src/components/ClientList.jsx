import react from 'react'
import {Modal} from 'antd'
import {deleteClientById} from '../api/Api'

function ClientList ({data}) {
    const handlDelete = async (id) => {
        try {
            const response = await deleteClientById (id)
            if(error.response.status === 204){
                Modal.confirm({
                    title: 'Confirm',
                    icon: <ExclamationCircleOutlined />,
                    content: 'The Delete Was Successfully',
                    
                  });
                }
        } catch (error) {

            console.error(error)
            
        }

    }
     return(
        <div className='bg-slate-500 rounded-md mt-4 p-4'>
        <h2 className='text-sm font-bold'>id: {data.id}</h2>
        <h2 className='text-xs font-bold'>Type Id: {data.TypeID}</h2>
        <h2  className='text-xs font-bold'>Number Id: {data.NumId}</h2>
        <h2 className='text-xs font-bold'>Name Client: {data.name}</h2>
        <h2 className='text-xs font-bold'>City: {data.city}</h2>
        <h2 className='text-xs font-bold'>Adress: {data.adress}</h2>
        <h2 className='text-xs font-bold'>Cell: {data.cell}</h2>
        <button className="bg-purple-900  mt-3 w-full p-3 uppercase font-bold rounded hover:cursor-pointer hover:bg-gray-800 transition-colors" onClick={() => handlDelete(data.id)}>
            Delete
        </button>
    </div>
    )
}

export default ClientList;