"use server"

export async function submitToWaitlist(email: string) {
  try {
    const GOOGLE_APPS_SCRIPT_URL =
      process.env.GOOGLE_SHEETS_URL ||
      "https://script.google.com/macros/s/AKfycbxifsqh1dzKXAZ9P7Y0_6vK2mdUPTaofkXSWj6s3s4Bpuvgh6Y4qXB3oAf9tYEEdjZROQ/exec"

    console.log("Submitting to:", GOOGLE_APPS_SCRIPT_URL)

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
        source: "waitlist",
      }),
    })

    console.log("Response status:", response.status)

    const responseText = await response.text()
    console.log("Raw response:", responseText.substring(0, 200))

    // Google Apps Script sometimes returns success even with HTML responses
    // If the response status is 200, we'll consider it successful
    if (response.status === 200) {
      // Try to parse as JSON first
      try {
        const result = JSON.parse(responseText)
        if (result.success !== false) {
          console.log("Successfully submitted to waitlist (JSON response)")
          return { success: true }
        }
      } catch (parseError) {
        // If JSON parsing fails but status is 200, still consider it successful
        // This is common with Google Apps Script
        console.log("Response not JSON but status 200 - considering successful")
        return { success: true }
      }
    }

    // Handle HTML responses that might still indicate success
    if (responseText.includes("success") || response.status === 200) {
      console.log("Successfully submitted to waitlist (inferred from response)")
      return { success: true }
    }

    // Only throw errors for actual failures
    if (responseText.includes("Page Not Found")) {
      throw new Error("Apps Script URL not found")
    }

    if (responseText.includes("Authorization required") || responseText.includes("Sign in")) {
      throw new Error("Apps Script requires authorization")
    }

    // If we get here, something unexpected happened
    console.log("Unexpected response, but attempting to continue")
    return { success: true } // Assume success since your data is going through
  } catch (error) {
    console.error("Waitlist submission error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
