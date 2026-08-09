import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
//  Types
import { typeDefs } from './schema.js';
// db
import _db from './_db.js';

const resolvers = {
    Query:{
        reviews(){
            return _db.reviews
        },
        review(parent,args){
            return _db.reviews.find(review=> review.id === args.id)
        },
        authors(){
            return _db.authors
        },
        author(parent,args){
            return _db.authors.find(author=> author.id == args.id)
        },
        games(){
            return _db.games;
        },
        game(parent,args){
            return _db.games.find(game=> game.id == args.id)
        }
    },
    Game:{
        reviews(parent){ // here parent is the Game schema
            return _db.reviews.filter(r=> r.game_id === parent.id);
        }
        /*
        query Game($id:ID!){ this query is for the above resolver function
            game(id: $id) {
                id,title
                reviews {
                    id,content
                }
            }
            }
        */
    },
    Author:{
        reviews(parent){
            return _db.reviews.filter(review=> review.author_id === parent.id);
        }
    },
    Review:{
        author(parent){
            return _db.authors.find(a=> a.id === parent.author_id);
        },
        game(parent){
            return _db.games.find(g=> g.id === parent.game_id)
        }
    }
        /* This query for the review resolver
        query Review($id:ID!){
            review(id:$id){
                id,content
                author {
                name
                },
                game {
                title,id
                }
            }
            } 
        */
    ,
    Mutation:{
        deleteGame(parent,args){
            _db.games = _db.games.filter(g=> g.id !== args.id);
            return _db.games;
        }
        /*
            this mutation is for above resolver
            mutation DeleteGame($id:ID!){
                deleteGame(id:$id){
                    id,title
                }
            }
        
        */
       ,addNewGame(parent,args){
            const game = {...args.game,id:Math.floor(Math.random() * 10000).toString()}// generate random number b/w o-1000
            _db.games.push(game);
            return game
       }
       /* this mutation for adding new game
        mutation AddGameMutation($game: AddNewGameInput!){
            addNewGame(game: $game) {
                id,title,platform 
            }
        }
       */
      ,
      editGame(parent,args){
        let existingGame = _db.games.find(item=> item.id === args.id);
        if(!existingGame){
            throw new Error("Invalid game")
        }
        existingGame = {...existingGame,...args.game};
        const index = _db.games.findIndex(item=> item.id === args.id);
        _db.games[index] = existingGame;
        return existingGame;
      }
      /*This mutation for above resolver
        mutation UpdateGameMutation($id:ID!, $game:EditGameInput!){
            editGame(id:$id,game:$game){
                id,title
            }
        }
      
      */
    }
}

// server setup
const server = new ApolloServer({
    // typeDefs => which type of schema (definition of type of data like author have name,age ..etc)
    typeDefs,
    // resolvers
    resolvers 
});

const port = 4000;
const {url} = await startStandaloneServer(server,{
    listen:{
        port
    }
})
console.log("Server running at port : ",port)
console.log("url: ",url);