import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function handler() {
  const deliveries = await sql`
    SELECT id, address, status
    FROM deliveries
    ORDER BY id
  `;
  return {
    statusCode: 200,
    body: JSON.stringify(deliveries)
  };
}
