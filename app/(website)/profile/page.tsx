import Link from "next/link"
import profiledb from "./db"

async function getAllProfile () {
    return profiledb
    
}

export default async function ProfilePage(){

    const new_list = await getAllProfile()

    return (
        <>
            <div>
                แสดงข้อมูลส่วนตัว
            </div>  

            <div>
                <ul>
                    {new_list.map(item => ( 
                        <li key={item.id}>
                            <Link href={`/profile/${item.id}`}>
                            {item.title}
                            </Link>
                            </li> 
                    ))}
                </ul>
            </div>
        </>
    )
}