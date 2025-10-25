import { MongoClient } from "mongodb"
import { devopsFormSchema } from "@/lib/formSchema"

const url = process.env.MONGODB_URL

if (!url) {
  throw new Error("Please define the MONGODB_URL environment variable inside .env")
}

const client = new MongoClient(url)

export async function POST(request: Request) {
  try {
    const parsedFormData = await request.json()
    const result = devopsFormSchema.safeParse(parsedFormData)
    if (!result.success) {
      console.error("Validation errors:", result.error.flatten())
      return new Response(
        JSON.stringify({ errors: result.error.flatten().fieldErrors }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    await client.connect()
    const db = client.db("applications")
    const collection = db.collection("final_devops")

    const insertResult = await collection.insertOne({
      form_name: `final_application_devops`,
      first_name: result.data.firstName,
      last_name: result.data.lastName,
      email_address: result.data.email,
      contact_number: result.data.whatsapp,
      time_availability: result.data.time,
      submission_data: {
            working_hours: result.data.time,
            general_skills: {
              linux_bash_experience: result.data.Q1,
              docker_deployment_experience: result.data.Q2,
              dependency_update_experience: result.data.Q3,
              vps_management_experience: result.data.Q4,
              ssh_management_experience: result.data.Q5,
              certbot_ssl_experience: result.data.Q6,
              vps_optimization_experience: result.data.Q7,
              ubuntu_experience: result.data.Q8,
              fail2ban_experience: result.data.Q9,
              cockpit_management_experience: result.data.Q10,
              python_automation_experience: result.data.Q11,
              directus_cms_experience: result.data.Q12,
              n8n_experience: result.data.Q13,
              additional_experience: result.data.Q14,
              usual_roles_devops: result.data.Q15,
            },
            specific_skills: {
              linux_bash_rating: result.data.R1,
              docker_deployment_rating: result.data.R2,
              vps_management_rating: result.data.R3,
              ssh_rating: result.data.R4,
              certbot_ssl_rating: result.data.R5,
              vps_optimization_rating: result.data.R6,
              ubuntu_rating: result.data.R7,
              fail2ban_rating: result.data.R8,
              cockpit_rating: result.data.R9,
              python_automation_rating: result.data.R10,
              n8n_rating: result.data.R11,
              directus_deployment_rating: result.data.R12,
              final_comments: result.data.R13,
            },
          },
      submitted_at: new Date(),
    })

    console.log("Insert result:", insertResult)

    return new Response(
      JSON.stringify({ message: "DevOps application submitted successfully!" }),
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
