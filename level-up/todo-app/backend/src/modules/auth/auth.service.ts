import { AuthRepository } from "./auth.repository.js";
export class AuthService{
    private repo = new AuthRepository();

    async signup(email:string,password: string){
        const isUserExists = await this.repo.findUserByEmail(email);
        if(isUserExists){
            throw new Error("User already exists");
        }
        return this.repo.createUser({email,password});
    }
}
