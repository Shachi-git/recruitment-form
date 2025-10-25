import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const url = process.env.MONGODB_URL as string

export async function POST(req: Request) {
  try {
    const client = new MongoClient(url)
    await client.connect()
    const db = client.db('applications')
    const collection = db.collection('loomvideo')

    const body = await req.json()
    const result = await collection.insertOne({
      ...body,
      createdAt: new Date(),
    })

    await client.close()

    return NextResponse.json({ success: true, insertedId: result.insertedId })
  } catch (error) {
        const message =
            error instanceof Error ? error.message : "Something went wrong."
        console.error("Server error:", message)
        return new Response(
            JSON.stringify({ error: message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        )
    }
}
