import React from "react";
import illustration from "../imgs/undraw_drone_surveillance_kjjg.svg";
import Form from "./contact.form";

export default () => (
    <header className="bg-teal-200">

        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-6xl text-red-600">¡Hola! Soy Joan</h1>
                    <p className="text-xl font-light">Ingeniero Mecatrónico de la Universidad EIA</p>  
                </div>
                <img src={illustration} alt="Drone de vigilancia" style={{height: "300px"}}></img>
            </div>
            
            <div>
                <Form/>
            </div>
            
        </div>
    </header>
)