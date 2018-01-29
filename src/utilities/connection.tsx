import axios from 'axios';

export interface CreateConnection {
    baseUrl: string;
    handleAs: string;
    params?: object;
    
}