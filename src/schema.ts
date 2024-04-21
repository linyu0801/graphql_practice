export const typeDefs = `#graphql 

    # ! 表示不能回傳 null
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!,
        reviews: [Review!]
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!,
        game: Game!,
        author: Author!
    }
    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review!]
    }
    # 列出 client 端可以存取到的類型
    type Query {
        reviews: [Review],
        review (id: ID!): Review,
        games: [Game],
        game(id: ID!): Game,
        authors: [Author],
        author(id: ID!): Author
    }
    # 列出 client 端可以執行的動作
    type Mutation {
        deleteGame(id: ID!): [Game]
        addGame(game: AddGameInput!): Game
        updateGame(id: ID!, editGame: UpdateGameInput!): Game
    }
    # 列出 client 端可以傳遞的輸入，並非實際的類型
    input AddGameInput {
        title: String!,
        platform: [String!]!
    }
    input UpdateGameInput {
        title: String,
        platform: [String!]
    }
`;


