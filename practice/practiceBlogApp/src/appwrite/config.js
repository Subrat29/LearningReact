import conf from '../conf/conf'
import { Client, Databases, ID, Query } from "appwrite";

export class ConfigService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async createPost({ title, slug, content, image, userId, status }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    userId,
                    status
                }
            )
        } catch (error) {
            console.log("appwrite/config/ConfigService/createPost : ", error)
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite/config/ConfigService/getPost : ", error)
            return false
        }
    }

    async getPosts() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal("status", "active")]
            )
        } catch (error) {
            console.log("appwrite/config/ConfigService/getPosts : ", error)
            return false
        }
    }

    async updatePost(slug, { title, content, image, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status
                }
            )
        } catch (error) {
            console.log("appwrite/config/ConfigService/updatePost : ", error)
            return false;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("appwrite/config/ConfigService/deletePost : ", error)
            return false;
        }
    }
}

const configservice = new ConfigService()
export default configservice