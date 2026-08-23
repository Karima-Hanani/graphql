export const query = `
{
  user {
    login
    firstName
    lastName
    gender: attrs(path: "gender")
    cin: attrs(path: "cin")
    city: attrs(path: "city")
    tel: attrs(path: "tel")
    avatar: attrs(path: "avatarUrl")

    auditRatio
    totalUp
    totalDown

    skills: transactions(
      where: {type: {_like: "skill%"}}
      distinct_on: type
      order_by: [{type: asc}, {amount: desc}]
    ) {
      type
      amount
    }
      
     level: transactions(
      where:{
        type:{_eq:"level"}, 
        eventId:{_eq:41}
      } 
      limit:1 
      order_by:[
        {amount:desc}
        {createdAt:desc}
      ]
    ){
      amount
    }

    xp: transactions_aggregate(
      where:{
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
