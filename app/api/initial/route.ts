import { MongoClient } from "mongodb";
import { initialFormSchema } from "@/lib/formSchema";

const url = process.env.MONGODB_URL;

if (!url) {
  throw new Error("Please define the MONGODB_URL environment variable inside .env");
}

const client = new MongoClient(url);

export async function POST(request: Request) {
  try {
    const parsedFormData = await request.json();
    const result = initialFormSchema.safeParse(parsedFormData);
    if (!result.success) {
      console.error("Validation errors:", result.error.flatten());
      return new Response(
        JSON.stringify({ errors: result.error.flatten().fieldErrors }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await client.connect();
    const db = client.db("applications");
    const collection = db.collection("initial");

    const insertResult = await collection.insertOne({
      form_name: `initial_application_${result.data.position}`,
      first_name: result.data.firstName,
      last_name: result.data.lastName,
      email_address: result.data.email,
      contact_number: result.data.whatsapp,
      resume_google_drive_link: result.data.resumeLink,
      city_philippines: result.data.city,
      linkedin_profile_link: result.data.linkedin,
      position_applied: result.data.position,
      speedtest_url: result.data.speedUrl,
      download_speed: result.data.downloadSpeed,
      upload_speed: result.data.uploadSpeed,
      about_you: result.data.aboutYou,
      past_experience: result.data.pastExperience,
      submitted_at: new Date(),
    });

    console.log("Insert result:", insertResult);

    return new Response(
      JSON.stringify({ message: "Application submitted successfully!" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
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

