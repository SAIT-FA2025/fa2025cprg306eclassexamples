import z from "zod";

export async function GET() {
    // fetch all dogs form the database
    // SELECT * FROM dogs
    const dogs = [
        {id: 1, name: "Luna", age: 2},
        {id: 2, name: "Max", age: 4},
        {id: 3, name: "Rover", age: 3},
    ];

    return new Response( JSON.stringify(dogs), {status:200} );
}

export async function POST(request) {
    let newDog = await request.json();

    const newDogSchema = z.object( {
        name: z.string(),
        age: z.number().min(1).max(30)
    } );
    try {
        newDog = newDogSchema.parse(newDog);
    } catch (error) {
        return new Response("Data does not match valid schema.", {status:406});
    }
    // add the new dog to the database
    // { name: "Sparky", age: 5 }
    newDog.id = 4;
    // INSERT statement

    return new Response( JSON.stringify(newDog) , {status:201});
}