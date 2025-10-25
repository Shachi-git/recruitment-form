import { MongoClient } from "mongodb"
import { frontendFormSchema } from "@/lib/formSchema"

const url = process.env.MONGODB_URL

if (!url) {
  throw new Error("Please define the MONGODB_URL environment variable inside .env")
}

interface GlobalWithMongo {
  _mongoClientPromise?: Promise<MongoClient>
}

const globalWithMongo = global as typeof globalThis & GlobalWithMongo

if (!globalWithMongo._mongoClientPromise) {
  const client = new MongoClient(url)
  globalWithMongo._mongoClientPromise = client.connect()
}

const clientPromise = globalWithMongo._mongoClientPromise

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json()
    const parsed = frontendFormSchema.safeParse(body)

    if (!parsed.success) {
      console.error("Validation errors:", parsed.error.flatten())
      return new Response(
        JSON.stringify({ errors: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    const client = await clientPromise
    const db = client.db("applications")
    const collection = db.collection("final_frontend")

    const insertResult = await collection.insertOne({
      form_name: "final_application_frontend",
      first_name: parsed.data.firstName,
      last_name: parsed.data.lastName,
      email_address: parsed.data.email,
      contact_number: parsed.data.whatsapp,
      submission_data: {
        working_hours: parsed.data.time,
        questions: {
          wordpress_experience: parsed.data.Q1,
          high_converting_lp: parsed.data.Q2,
          responsive_lp: parsed.data.Q3,
          fluentForms_gravityForms: parsed.data.Q4,
          mailchimp_activeCampaign: parsed.data.Q5,
          cro_experience: parsed.data.Q6,
          seo_experience: parsed.data.Q7,
          ab_testing_lp: parsed.data.Q8,
          photoshop_experience: parsed.data.Q9,
          illustrator_experience: parsed.data.Q10,
          designing_experience: parsed.data.Q11,
          custom_css_experience: parsed.data.Q12,
          google_tag_manager_experience: parsed.data.Q13,
          custom_widgets_experience: parsed.data.Q14,
          additional_experience: parsed.data.Q15,
          usual_roles_frontend: parsed.data.Q16,
        },
        ratings: {
          wordpress_elementor: parsed.data.R1,
          high_converting_lp: parsed.data.R2,
          responsive_lp: parsed.data.R3,
          fluentforms_gravityforms: parsed.data.R4,
          mailchimp_activecampaign: parsed.data.R5,
          cro: parsed.data.R6,
          seo: parsed.data.R7,
          ab_testing_lp: parsed.data.R8,
          photoshop: parsed.data.R9,
          illustrator: parsed.data.R10,
          lp_designing: parsed.data.R11,
          custom_css: parsed.data.R12,
          google_tag_manager: parsed.data.R13,
          custom_widgets: parsed.data.R14,
          final_comment: parsed.data.R15,
        },
      },
      created_at: new Date(),
    })

    console.log("Inserted document:", insertResult.insertedId)

    return new Response(
      JSON.stringify({
        message: "Frontend final application submitted successfully!",
      }),
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
