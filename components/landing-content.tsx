"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
    {
        name:"Subodh",
        avatar:"S",
        title:"CRS Western Railways",
        description:"This app has changed my life, cannot imagine working without it!!"
    },
    {
        name:"Akash",
        avatar:"A",
        title:"SDE-1",
        description:"This is something beyond human understanding. The best of all creation!"
    },
    {
        name:"Anupama",
        avatar:"A",
        title:"Mother",
        description:"The best in class, definitely worth the premium subscription!!"
    },
    {
        name:"Akshansh",
        avatar:"A",
        title:"SDE-1",
        description:"This app always helps me with my wrong code and make it correct. Thanks to IntelliWeb for making life easy!"
    },
]
export const LandingContent = () =>{
    return(
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item)=>(
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text=lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}