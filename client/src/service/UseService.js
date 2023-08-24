import { $authHost } from "../http";

const  UseService = {
   async fetchUsers() {
        return new Promise((resolve) => resolve($authHost.post('api/user/getAll')))
        // return new Promise(() => $authHost.get('api/user/getAll'))
    }
}

export default UseService
 