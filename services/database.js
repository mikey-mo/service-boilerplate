module.exports = {
    async connect() {
        return null;
    },
    async getClient() {
        // const dbClient = await this.connect();
        return {
            username: 'username',
            password: 'password',
        };
    },
    async getClientByToken() {
        // const dbClient = await this.connect();
        return {
            username: 'username',
            password: 'password',
        };
    },
};
