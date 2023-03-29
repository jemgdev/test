import UserRepository from "../domain/user.repository";

export default class GetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handler() {
    const users = await this.userRepository.getAllUsers()
    return users
  }
}