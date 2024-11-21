class Users {
    id: String;

    name: String;

    email: String;

    cpf: String;

    created_at: Date;

    updated_at?: Date;

    constructor({
        id,
        name,
        email,
        cpf,
    }: Omit <Users, 'created_at' | 'updated_at'>){
        this.id = id;
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.created_at = new Date;
        this.updated_at = new Date;
    }
}

export default Users;