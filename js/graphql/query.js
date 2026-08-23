export const query = `
    {
        user {
            login
            firstName
            lastName
            gender: attrs(path: "gender")
            cin: attrs(path: "cin")
            city: attrs(path: "city")
            avatar: attrs(path:"avatarUrl")

            auditRatio
            totalUp
            totalDown

            transactions(
            where: {
                type: { _like: "skill%" }
            }
            distinct_on: type
            order_by: [
                { type: asc }
                { amount: desc }
            ]
            ) {
            type
            amount
            }
        }
    }
`