
export const typeDefs = `#graphql
    type Game{
        id: ID!
        title: String! # this is required,
        country: String # this is not required 
        platform:[String!]!
        reviews:[Review!]
    }
    type Review{
        id: ID!
        rating: Int!
        content:String!
        game:Game!
        author:Author!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
        reviews:[Review!]
    }
    type Query{
        reviews:[Review] # to see all reviews in array
        review(id:ID!): Review # to see single review
        games:[Game]
        game(id:ID!):Game
        authors:[Author]
        author(id:ID!):Author
    }
    type Mutation{
        deleteGame(id:ID!):[Game]
        addNewGame(game:AddNewGameInput):Game
        editGame(id:ID!,game:EditGameInput!): Game 
    }
    input AddNewGameInput{ # to add new game
        title: String!
        platform:[String!]!
    }
    input EditGameInput{
        title: String
        platform: [String]
    }
`

// Datatypes: int, float, string, boolean, ID