import User from '../domain/user';
import UserRepository from '../domain/user.repository';

export default class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handler(user: User) {
    if (typeof user.age !== 'number') {
      user.age = Number(user.age)
    }

    if (!user.email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
      throw new Error('El correo es invalido')
    }

    const userSaved = await this.userRepository.save(user)
    return userSaved
  }
}