export const typeDefs = `#graphql 
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!,
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!,
    }
    type Author {
        id: ID!,
        name: String!,
        verifyed: Boolean!,
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
`;

// 基本類型
// INT
// FLOAT
// STRING
// BOOLEAN
// ID

// 結尾加上 ! 值不能是 null
