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
import { Link } from "react-router-dom"


interface User {
    email: string
    password: string
}
const Login: React.FC = () => {

    const [user, setUser] = useState<User>({
        email: "",
        password: ""
    })
    const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("user", user)
        setUser({
            email: "",
            password: ""
        })
    }
    return (
        <Card className="w-[350px]">
            <form onSubmit={handleSubmit}>

                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" className="rounded-lg " id="email" name="email" placeholder="abc@example.com" value={user.email} onChange={changeHandle} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input name="password" type="password" id="password" placeholder="Enter Password" value={user.password} onChange={changeHandle} />
                        </div>


                    </div>

                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type="submit" variant="default" className="w-full border-none rounded-xl">Login</Button>
                </CardFooter>
                <p className="text-center text-sm -mt-4 mb-4">Don't have an account ? <Link to="/signup" className="text-blue-600">Sign Up</Link></p>

            </form>
        </Card>
    )
}


export default Login