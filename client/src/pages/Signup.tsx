import React, { ChangeEvent, FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"

interface User {
    name: string,
    email: string
    password: string
}

const Signup: React.FC = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        password: "",

    })
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("user 👤 details : ", user)
        setUser({
            name: "",
            email: "",
            password: ""
        })
        navigate("/login")
    }
    return (
        <Card className="w-[350px]">
            <form onSubmit={handleSubmit}>

                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" className="rounded-lg " id="name" name="name" placeholder="Enter Name" value={user.name} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" className="rounded-lg " id="email" name="email" placeholder="abc@example.com" value={user.email} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input name="password" type="password" id="password" placeholder="Enter Password" value={user.password} onChange={handleChange} />
                        </div>


                    </div>

                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type="submit" variant="default" className="w-full border-none rounded-xl">Sign Up</Button>
                </CardFooter>
                <p className="text-center text-sm -mt-4 mb-4">Already have an account ? <Link to="/login" className="text-blue-600">Login</Link></p>

            </form>
        </Card>
    )
}


export default Signup