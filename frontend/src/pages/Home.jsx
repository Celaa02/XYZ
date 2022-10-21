import {useEffect, useState} from 'react'
import {Form, Formik} from 'formik'
import {createClient, getClient} from '../api/Api'
import ClientList from '../components/ClientList'

const Home = () => {

    const [client, setClient] = useState([])
 
    useEffect(()=>{
        async function loadClient(){
            const response = await getClient()
            setClient(response.data)
        }

        loadClient()
    },[])

    return (
        <>
                <div>
                    <Formik
                      initialValues={
                        {
                            TypeID: "",
                            NumId: "",
                            name: "",
                            city: "",
                            adress: "",
                            cell: ""
                        }
                      }
                      onSubmit={async (values, actions) => {
                        console.log(values)
                        try {
                            const response = await createClient(values)
                            console.log(response)
                            actions.resetForm()
                        } catch (error) {
                            console.error(error)
                            
                        }
                      }}
                    >
                      {({handleChange, handleSubmit, values, isSubmitting}) => (
                            <>
                            
                             <h1 className="text-purple-900  text-3xl capitalize text-center ">
                             XYZ - Crea y Organiza tus Clientes
                             </h1>

                            <Form className="my-10 bg-black shadow rounded-lg p-10 "onSubmit={handleSubmit}>
                            <label className="uppercase text-gray-600 block text-xl font-bold">Type ID</label>
                            <input 
                                type='text' 
                                name='TypeID' 
                                placeholder = "Enter TypeID"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                onChange={handleChange}
                                value={values.TypeID}
                            ></input>

                            <label className="uppercase text-gray-600 block text-xl font-bold">Number ID</label>
                            <input 
                                type='text' 
                                name='NumId' 
                                placeholder = "Enter Number ID"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                onChange={handleChange}
                                value={values.NumId}
                            ></input>

                            <label className="uppercase text-gray-600 block text-xl font-bold">Name</label>
                            <input 
                                type='text' 
                                name='name' 
                                placeholder = "Enter name"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                onChange={handleChange}
                                value={values.name}
                            ></input>

                            <label className="uppercase text-gray-600 block text-xl font-bold">City</label>
                            <input 
                                type='text' 
                                name='city' 
                                placeholder = "Enter City"
                                onChange={handleChange}
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                value={values.city}
                            ></input>

                            <label className="uppercase text-gray-600 block text-xl font-bold">Adress</label>
                            <input 
                                type='text' 
                                name='adress' 
                                placeholder = "Enter Adress"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                onChange={handleChange}
                                value={values.adress}
                            ></input>

                            <label className="uppercase text-gray-600 block text-xl font-bold">Cell</label>
                            <input 
                                type='text' 
                                name='cell' 
                                placeholder = "Enter Cell"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                onChange={handleChange}
                                value={values.cell}
                            ></input>

                            <div>
                            <button className="bg-purple-900  mt-10 w-full p-3 uppercase font-bold rounded hover:cursor-pointer hover:bg-gray-800 transition-colors"  type = 'onSubmit' disabled={isSubmitting}>Save</button>
                                {isSubmitting ? "Saving..." : "Save"}
                            </div>
                            </Form>
                           </> 
                      )} 
                        
                    </Formik>
                </div>
                <div>
                    <h1 className='text-5xl text-wite font-bold text-center p-4'>
                        Clients
                    </h1>
                    <div className='grid grid-cols-2 gap-3'>
                    {
                        client.map(data =>(
                           <ClientList data={data} key={data.id}/>
                        ))
                    }
                    </div>
                </div>
                

                </>
    )
}

export default Home;