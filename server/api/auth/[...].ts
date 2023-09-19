import { NuxtAuthHandler } from '#auth'
import KeycloakProvider from "next-auth/providers/keycloak";
export default NuxtAuthHandler({
    secret: "lol",
    // @ts-ignore
    origin: "http://localhost:3000",
    providers: [
        // @ts-ignore
        KeycloakProvider.default({
            clientId: "dev",
            issuer: "http://localhost:8080/realms/dev",
            clientSecret: "dev"
        })
    ]
})