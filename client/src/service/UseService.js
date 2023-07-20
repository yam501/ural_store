import { $host } from "../http";

export default class UseService {
    fetchUsers() {
        return new Promise(() => $host.get('/users'))//ИЛЮХА ДОЛЖЕН БУДЕТ СКАЗАТЬ ПУТЬ СУКА
    }
}
 