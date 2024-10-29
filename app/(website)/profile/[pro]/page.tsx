export default async function DisplayProfileByIdPage ({
    params
} :{
    params: {id: number}

}) {
    const {id} = await params;
    return (
        <>
            <div>
              แสดงข้อมูลส่วนที่ {id}
            </div>
        </>
    )
}