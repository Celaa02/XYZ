import axios from "axios";

const API = "http://localhost:4000/client";

export const getClient = async () => 
  await axios.get(API);
  

export const getClientById = async (clientId) => {
    const res = await axios(`${API}/${clientId}`);
    return await res.json();
  };
  
export const createClient = async (newClient) => 
   await axios.post(API, newClient);


export const deleteClientById = async (id) => 
     await axios.delete(`${API}/${id}`);


export const updateClientById = async (clientId, newClient) => {
    const res = await axios(`${API}/${clientId}`, {
        method: "PUT",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(newClient),
      });
      return res;
}