import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async signUp({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount)
                console.log("Succesfully signUp!")
            else
                return userAccount
        } catch (error) {
            console.log("Appwrite/Auth/AuthService/signUp: ", error);
        }
    }

    async logIn({ email, password }) {
        try {
            const user = await this.account.createEmailSession(email, password);
            if (user)
                console.log("Succesfully logIn!")
            else
                return user
        } catch (error) {
            console.log("Appwrite/Auth/AuthService/logIn: ", error);
        }

    }

    async getCurrentUser() {
        try {
            const currentUser = await this.account.get();
            if (currentUser)
                console.log("Succesfully Get Current User!")
            else
                return currentUser
        } catch (error) {
            console.log("Appwrite/Auth/AuthService/getCurrentUser: ", error);
        }
    }

    async logOut() {
        try {
            const currentUser = await this.account.deleteSessions();
            if (currentUser)
                console.log("Succesfully logOut!")
            else
                return currentUsers
        } catch (error) {
            console.log("Appwrite/Auth/AuthService/logOut: ", error);
        }
    }
}

const authservice = new AuthService()
export default authservice