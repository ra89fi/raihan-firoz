export async function POST(req: Request, context: any) {
    try {
        const data = await req.json();
        const response = await fetch(`${process.env.URL_SUB}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: data.email }),
        });
        console.log("Sent to server!");
        const json = await response.json();
        return new Response(JSON.stringify(json), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        console.log(error.message);
        return new Response(
            JSON.stringify({ success: false, message: error.message }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            },
        );
    }
}
