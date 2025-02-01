import axios from 'axios';

const API_BASE_URL = 'http://localhost:9090/api/users';

const createUser = async (userInfo: any) => {
    try {
        const response = await axios.post(API_BASE_URL, userInfo);
        return response.data;
    } catch (error) {
        console.error("Error creating user: ", error);
        throw error;
    }
}

export default createUser;