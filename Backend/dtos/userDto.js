module.exports = class UserDto {
    id;
    number;
    isActivated;
    role;

    constructor(model) {
        this.id = model.id
        this.number = model.number
        this.isActivated = model.isActivated
        this.role = model.role
    }
}