import db from "../db"

async function getProfileById(id : number) {
    // find x where x.id == id
    // x in db
    // select * from db where db.id == id
    return db.find(x => x.id == id)
    // return mysql.query('select * from profile where profile.id = ?',id)
}

export default async function DisplayNewsByIdPage ({
    params
} :{
    params: {id: number}

}) {
    params = await params;

    const profile = await getProfileById(params.id)
    // console.log('profile',profile);

    return (
        <>
            <div>
                แสดงข้อมูลส่วนตัว ได้แก่ {profile?.title} {profile?.body}
            </div>
        </>
    )
}