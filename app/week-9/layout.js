import { AuthContextProvider } from "./_utils/auth-context";

export default function AuthLayout({children}){
    return <AuthContextProvider>{children}</AuthContextProvider>
}