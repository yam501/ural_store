import { IUser } from "../IUser"

export const AuthResponse = {
    accessToken: '',
    refreshToken: '',
    user: Object.assign({}, IUser)
} 