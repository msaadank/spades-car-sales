import { Car } from "@/model/Car";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SidebarType {
    text: string;
    active?: boolean;
    alert?: boolean;
}

export interface ApiResponse {
    success: boolean,
    message: string,
    cars?: Array<Car>
}