import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define the path to our local JSON database
const dataFilePath = path.join(process.cwd(), "src", "data", "pricing.json");

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const pricingData = JSON.parse(fileContents);
    return NextResponse.json(pricingData);
  } catch (error) {
    console.error("Failed to read pricing data:", error);
    return NextResponse.json({ error: "Failed to read pricing data" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newPricingData = await request.json();
    
    // Validate we're writing an object
    if (typeof newPricingData !== "object" || newPricingData === null) {
      return NextResponse.json({ error: "Invalid pricing data format" }, { status: 400 });
    }

    // Write back to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(newPricingData, null, 2), "utf8");
    
    return NextResponse.json({ success: true, message: "Pricing updated successfully" });
  } catch (error) {
    console.error("Failed to write pricing data:", error);
    return NextResponse.json({ error: "Failed to save pricing data" }, { status: 500 });
  }
}
