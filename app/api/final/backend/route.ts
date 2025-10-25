import { MongoClient } from "mongodb"
import { backendFormSchema } from "@/lib/formSchema"

const url = process.env.MONGODB_URL

if (!url) {
  throw new Error("Please define the MONGODB_URL environment variable inside .env")
}

const client = new MongoClient(url)

export async function POST(request: Request) {
  try {
    const parsedFormData = await request.json()
    const result = backendFormSchema.safeParse(parsedFormData)
    if (!result.success) {
      console.error("Validation errors:", result.error.flatten())
      return new Response(
        JSON.stringify({ errors: result.error.flatten().fieldErrors }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    await client.connect()
    const db = client.db("applications")
    const collection = db.collection("final_backend")

    const insertResult = await collection.insertOne({
      form_name: "final_application_backend",
      first_name: result.data.firstName,
      last_name: result.data.lastName,
      email_address: result.data.email,
      contact_number: result.data.whatsapp,
      time_availability: result.data.time,
      submission_data: {
        general_skills: {
          strapi_experience: result.data.Q1,
          api_integrations_experience: result.data.Q2,
          graphql_experience: result.data.Q3,
          ghl_experience: result.data.Q4,
          aws_ec2_experience: result.data.Q5,
          postgresql_experience: result.data.Q6,
          nodejs_experience: result.data.Q7,
          middleware_experience: result.data.Q8,
          linux_terminal_experience: result.data.Q9,
          multi_tenancy_experience: result.data.Q10,
          additional_experience: result.data.Q11,
          usual_backend_role: result.data.Q12,
        },
        specific_skills: {
          strapi_rating: result.data.R1,
          api_integrations_rating: result.data.R2,
          graphql_rating: result.data.R3,
          ghl_rating: result.data.R4,
          aws_ec2_rating: result.data.R5,
          postgresql_rating: result.data.R6,
          nodejs_rating: result.data.R7,
          middleware_rating: result.data.R8,
          linux_terminal_rating: result.data.R9,
          multi_tenancy_rating: result.data.R10,
          final_comments: result.data.R11,
        },
      },
      submitted_at: new Date(),
    })

    console.log("Insert result:", insertResult)

    return new Response(
      JSON.stringify({ message: "Backend application submitted successfully!" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    )
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
