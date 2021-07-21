import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { ListZellerCustomers } from "./graphql/queries/queries";
import { ZellerForm } from "./components/ZellerForm";
import { UserList } from "./components/UserList";
import { UserType, User } from './types/types'; 

function App() {
  const [listZellerCustomers, setListZellerCustomers] = useState<User[] | undefined>(undefined);
	const [filterByType, setFilterByType] = useState<UserType>("Admin");


 	type ListZellerCustomers ={
		listZellerCustomers: {
			items: User[],
  }
}

	useEffect(() => {
    getZellerCustomerList();
  }, [filterByType]);

	const getZellerCustomerList = async () =>{
			 try {
				const response = await API.graphql(graphqlOperation(ListZellerCustomers)) as {
					data: ListZellerCustomers
				}
				console.log("res",response)
				setListZellerCustomers(filterByInput(response))
      } catch (error) {
        console.log(error);
      }
    };


	const filterByInput = (response:  {data: ListZellerCustomers}) =>{
		const filteredList = response.data.listZellerCustomers.items.filter((user : User) => filterByType === user.role);
		// console.log(filteredList)
		return filteredList;
	}

  return (
    <div className="App">
      <ZellerForm setFilterByType={setFilterByType} initialState={filterByType} />
			<UserList filterByType={filterByType} users={listZellerCustomers}/>
    </div>
  );
}

export default App;
