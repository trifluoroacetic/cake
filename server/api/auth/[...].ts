import { NuxtAuthHandler } from '#auth'
import KeycloakProvider from "next-auth/providers/keycloak";
export default NuxtAuthHandler({
    secret: "lol",
    // @ts-ignore
    origin: "http://localhost:3000",
    providers: [
        // @ts-ignore
        KeycloakProvider.default({
            clientId: "lol",
            issuer: "http://localhost:8080/realms/master",
            clientSecret: "Pk51dKzyaa0mj2Vv5x3wIaoGabmIasO4"
        })
    ]
})