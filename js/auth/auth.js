const authUrl = "https://learn.zone01oujda.ma/api/auth/signin";

export async function loginUser(identifier, password) {
    const credentials = btoa(`${identifier}:${password}`);

    const response = await fetch(authUrl, {
        method: "POST",
        headers: {
            Authorization: `Basic ${credentials}`,
        },
    });

    if (!response.ok) {
        throw new Error("Invalid credentials");
    }

    console.log("response: ",response);
    

    return response;

}