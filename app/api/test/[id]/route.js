export async function GET(request, { params }) {
    console.log('test');
    return Response.json({
        name: 'Jukkapan',
        id: parseInt(params.id)

    })
}


 