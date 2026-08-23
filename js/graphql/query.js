export const query = `
{
  user {
    login
    firstName
    lastName
    gender: attrs(path: "gender")
    cin: attrs(path: "cin")
    city: attrs(path: "city")
    avatar: attrs(path: "avatarUrl")

    auditRatio
    totalUp
    totalDown
    totalUpBonus

    skills: transactions(
      where: {type: {_like: "skill%"}}
      distinct_on: type
      order_by: [{type: asc}, {amount: desc}]
    ) {
      type
      amount
    }
      
    level: transactions(
      where: {eventId: {_eq: 41}, type: {_eq: "level"}}
      distinct_on: type
      order_by: [{type: asc}, {amount: desc}]
    ) {
      type
      amount
    }

    xp: transactions_aggregate(where:{
      type:{_eq:"xp"} 
      eventId:{_eq:41}
    }){
      aggregate {
        sum {
          amount
        }
      }
    }
  }
}
`
