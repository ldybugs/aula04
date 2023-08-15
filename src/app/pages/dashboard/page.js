import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
    const lista = getUsers()
   
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
               {lista.map((user) =>
                <h1>{user.name}</h1>
               )}
            </div>
        </div>
    );
};