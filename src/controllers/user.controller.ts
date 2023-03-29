import { Request, Response, NextFunction } from 'express'
import RegisterUserUseCase from '../modules/user/application/register-user.usecase'
import UserMemoryRepository from '../modules/user/infrastructure/user-memory.repository';
import GetAllUsersUseCase from '../modules/user/application/get-all-users.usecase';

const userRepository = new UserMemoryRepository()
const saveUser = new RegisterUserUseCase(userRepository)
const getAllUsers = new GetAllUsersUseCase(userRepository)

export const registerUserHanlder = async (request: Request, response: Response, next: NextFunction) => {
  const { 
    name,
    lastname,
    age,
    email 
  } = request.body

  const userSaved = await saveUser.handler({ age, email, lastname, name })

  response.status(201).json({
    statusCode: 201,
    message: 'User saved correctly',
    data: userSaved
  }).end()
}

export const getAllUsersHandler = async (request: Request, response: Response, next: NextFunction) => {
  const users = await getAllUsers.handler()

  response.status(200).json({
    statusCode: 200,
    message: 'Users found successfully',
    data: users
  }).end()
}