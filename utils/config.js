import 'dotenv/config'

export const config  = {
    MONGOURL: process.env.DATABASE_URL,
    PORT: process.env.PORT
}

