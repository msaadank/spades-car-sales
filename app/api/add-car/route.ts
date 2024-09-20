import CarModel from "@/model/Car"
import { NextResponse } from "next/server"

export async function POST(request: Request){

    const data = request.json()

    try {
        const newCar = new CarModel(data)
        newCar.save()

        return NextResponse.json({
            success: true,
            message: "New car added successfully"
        }, {status: 201})
    } catch (error) {
        console.error(error)

        return NextResponse.json({
            success: false,
            message: "Error while adding the new Car"
        }, {status: 500})
    }
}