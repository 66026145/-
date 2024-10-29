export default async function DisplayNewsByIdPage ({
    params
} :{
    params: {id: number}

}) {
    const {id} = await params;
    return (
        <>
            <div>
                หน้าแสดงรายการข่าวที่ {id}
            </div>
        </>
    )
}