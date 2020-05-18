module.exports = {
    async connect() {
        return null;
    },
    async getClient() {
        // const dbClient = await this.connect();
        return {
            username: 'username',
            password: 'password',
            admin: false,
            profile: {
                something: 'something',
                somethingElse: 'something else',
            },
        };
    },
    async getClientByToken() {
        // const dbClient = await this.connect();
        return {
            username: 'username',
            password: 'password',
            admin: false,
            profile: {
                something: 'something',
                somethingElse: 'something else',
            },
        };
    },
};
