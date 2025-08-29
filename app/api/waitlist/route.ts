export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Google Sheets integration would go here
    // For now, we'll just log it
    console.log("New waitlist signup:", email)

    // You can integrate with Google Sheets API here
    // Example using Google Sheets API:
    /*
    const sheets = google.sheets({ version: 'v4', auth: googleAuth })
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, new Date().toISOString(), 'waitlist']]
      }
    })
    */

    return Response.json({ success: true })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
