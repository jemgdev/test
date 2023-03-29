import UserRepository from "../domain/user.repository";
import User from '../domain/user';

export default class UserMemoryRepository implements UserRepository {

  users: User[] = [
    {
      age: 10,
      email: 'test@gmail.com',
      lastname: 'Mundo',
      name: 'Hola'
    }
  ]

  async save (user: User) {
    this.users.push(user)
    return user
  }

  async getAllUsers(): Promise<User[]> {
    return this.users
  }
}