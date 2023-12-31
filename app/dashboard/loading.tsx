import { Card } from "@/components/ui/card";
import { Loader } from "lucide-react";


export default function Loading() {
    return (
        <Card className="flex max-w-3xl mx-auto items-center justify-center">
            <Loader className="animate-spin my-40" />
        </Card>
    )
}