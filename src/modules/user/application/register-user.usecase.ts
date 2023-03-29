import User from '../domain/user';
import UserRepository from '../domain/user.repository';

export default class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handler(user: User) {
    const userSaved = await this.userRepository.save(user)
    return userSaved
  }
}