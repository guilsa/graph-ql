const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

const roll = () => Math.floor(6 * Math.random()) + 1;

const queryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world',
    },
    diceRoll: {
      type: new GraphQLList(GraphQLInt),
      args: {
        count: { type: GraphQLInt }
      },
      resolve: (_, args) => {
        let rolls = [];
        for (var i = 0; i < args.count; i++) {
          rolls.push(roll());
        }
        return rolls;
      }
    }
  }
});

const mySchema = new GraphQLSchema({
  query: queryType
});

module.exports = mySchema;
