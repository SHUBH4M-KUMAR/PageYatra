import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


const Frm1 = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md p-4 md:p-8 rounded-lg shadow-md bg-white">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-2">User Form</CardTitle>
                <CardDescription className="text-gray-600">Please fill in the details below</CardDescription>
            </CardHeader>
            <CardContent>
                    <div className="grid gap-4">
                        <div className="flex flex-col">
                            <Label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">
                                Name
                            </Label>
                            <Input type="text" id="name" placeholder="Enter your name"
                                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
                                Email
                            </Label>
                            <Input type="email" id="email" placeholder="Enter your email"
                                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                         <div className="flex flex-col">
                            <Label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-700">
                                Phone
                            </Label>
                            <Input type="tel" id="phone" placeholder="Enter your phone"
                                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
            </CardContent>
            <CardFooter className="flex justify-end">
            <Button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Submit
                    </Button>
            </CardFooter>
        </Card>
    </div>
    );
};

export default Frm1;