import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

const UserList: React.FC = () => {
    const[users, setUsers] = useState<User[]>([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data: User[]) => setUsers(data));
    }, []);

    return(
        <div>
            <h2>Daftar Pengguna</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;


/*
    penjelasa

    interface user          => menetukam struktur data dari api
    useState<User[]>        => state bertipe array dari user

*/