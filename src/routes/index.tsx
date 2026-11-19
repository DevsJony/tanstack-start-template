import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
    return (
        <div>
            <h1 className="text-2xl">Hello World!</h1>
        </div>
    );
}
