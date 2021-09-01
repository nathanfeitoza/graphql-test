import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        user: String
        age: Int
        emails: [Email]!
        contacts: [Contact]
    }

    type Alien {
        id: ID
        firstName: String
        lastName: String
        planet: String
    }

    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Email {
        email: String
    }

    type Query {
        getOneFriend(id: ID): Friend
        getAliens: [Alien]
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        user: String
        age: Int
        emails: [EmailInput]!
        contacts: [ContactInput]
    }

    input EmailInput {
        email: String
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
