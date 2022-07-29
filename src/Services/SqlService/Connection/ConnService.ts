import sql from 'mssql'

const settings =
{
    user: "asdsadasd",
    password: "sqlserveragustin",
    server: "localhost",
    database: "CVM_GPA_GES_01",
    options: {
        trustServerCertificate: true,
    }
};

class Connection {
    async GetConnection() {
        return await sql.connect(settings);
    }
}

const conn = new Connection().GetConnection();
export default conn;

/* import sql from 'mssql'

const settings =
{
    user: "agustin2",
    password: "sqlserveragustin",
    server: "localhost",
    database: "CVM_GPA_GES_01",
    options: {
        trustServerCertificate: true,
    }
};

async function getConnection() {
    const pool = await sql.connect(settings);
    const result = await pool.request().query('SELECT 1');
    console.log(result)
}

getConnection(); */