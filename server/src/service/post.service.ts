import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose"
import Post, {PostDocument} from "../model/post.model"


export function createPost(input: PostDocument){
    return Post.create(input)
}


export function findPost(
    query: FilterQuery<PostDocument>,
    options: QueryOptions = {lean: true}
){
    return Post.findOne(query, {}, options)
}

export function findAndUpdatePost(
     query: FilterQuery<PostDocument>,
update: UpdateQuery<PostDocument>,
     options: QueryOptions

    ){
    return Post.findOne(query, update, options)
}

export function deletePost(
     query: FilterQuery<PostDocument>
){return Post.deleteOne(query)
}