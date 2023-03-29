import RegisterUserUseCase from "../../../src/modules/user/application/register-user.usecase"
import User from "../../../src/modules/user/domain/user";
import UserMemoryRepository from '../../../src/modules/user/infrastructure/user-memory.repository';

jest.mock('../../../src/modules/user/infrastructure/user-memory.repository')

describe('Register Use Case', () => {
  test('Registrar un usuario sasfactoriamente', async () => {
    const user: User = {
      age: 10,
      email: 'tes@gmail.comm',
      lastname: 'Medina',
      name: 'Josue'
    }
  
    const userMemoryRepository = new UserMemoryRepository()
  
    const spy = jest.spyOn(userMemoryRepository, 'save')
    spy.mockResolvedValue(user)
  
    const registerUser = new RegisterUserUseCase(userMemoryRepository)
  
    const userSaved = await registerUser.handler(user)
  
    expect(userSaved.name).toBe(user.name)
  })
  
  test('Registro falla si la edad contiene letras', async () => {
    const user: User = {
      // @ts-ignore
      age: '10',
      email: 'tes@gmail.comm',
      lastname: 'Medina',
      name: 'Josue'
    }
  
    const userMemoryRepository = new UserMemoryRepository()
  
    const spy = jest.spyOn(userMemoryRepository, 'save')
    spy.mockResolvedValue(user)
  
    const registerUser = new RegisterUserUseCase(userMemoryRepository)
  
    const userSaved = await registerUser.handler(user)
  
    expect(userSaved.age).toEqual(10)
  })
  
  // test('Registro falla si el campo email no es un email', () => {
  //   const user: User = {
  //     // @ts-ignore
  //     age: '10',
  //     email: 'tesgasdmis9d0w',
  //     lastname: 'Medina',
  //     name: 'Josue'
  //   }
  
  //   const userMemoryRepository = new UserMemoryRepository()
  
  //   const spy = jest.spyOn(userMemoryRepository, 'save')
  //   spy.mockResolvedValue(user)
  
  //   const registerUser = new RegisterUserUseCase(userMemoryRepository)
  
  //   expect(registerUser.handler(user)).rejects.toThrow('El correo es invalido')
  // })
})