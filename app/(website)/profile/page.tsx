import Link from "next/link"
import newsdb from "./db"

async function getAllNews () {
    return newsdb
    
}

export default async function NewsPage(){

    const new_list = await getAllNews()

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