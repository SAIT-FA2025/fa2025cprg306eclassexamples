
export async function GET(request, { params }) {
    const { dogid } = await params;
    const idNum = Number(dogid);
    // retrieve dog number idNum from the database
    // SELECT * FROM dogs WHERE id = ${idNum}
    const dogs = [
        { id: 1, name: "Luna", age: 2 },
        { id: 2, name: "Max", age: 4 },
        { id: 3, name: "Rover", age: 3 },
    ];
    const thisDog = dogs.find((dog) => dog.id === idNum);
    if (!thisDog) {
        return new Response("This dog does not exist.", { status: 404 });
    }
    return new Response(JSON.stringify(thisDog), { status: 200 });
}

export async function PUT(request, { params }) {
    const { dogid } = await params;
    const idNum = Number(dogid);
    const updatedDog = await request.json();
    // Validation - zod
    // update the new data in the database
    return new Response(null, { status: 204 });
}

export async function PATCH(request, { params }) {
    const { dogid } = await params;
    const idNum = Number(dogid);
    const updatedDog = await request.json();
    try {
        if (updatedDog.name) {
            // Validation
            // update dog name in the database for dog number [idNum]
        }
        if (updatedDog.age) {
            // Validation
            // update dog age in the database for dog number [idNum]
        }
    } catch (error) {
        // return response about what went wrong
    }
    return new Response(null, { status: 204 });

}

export async function DELETE(request, { params }) {
    const { dogid } = await params;
    const idNum = Number(dogid);
    // remove the dog from the database
    let responseText = `Dog number ${idNum} was deleted.`;
    return new Response(responseText, {status:200});
}