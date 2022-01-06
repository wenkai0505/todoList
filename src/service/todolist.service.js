import axios from 'axios'
let API_URL = "https://todolistserver-app.herokuapp.com/api/todolist"

class TodoListService {
    post(name) {
        return axios.post(API_URL, {
            name
        })
    }
    get() {
        return axios.get(API_URL)
    }
    delete(_id) {
        return axios.delete(API_URL + "/" + _id)
    }
    patch(_id, { done }) {
        return axios.patch(API_URL + "/" + _id, {
            done
        })
    }
}

export default new TodoListService()