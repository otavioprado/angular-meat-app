import { Request, Response } from 'express';
import { users, User } from './users';

import * as jwt from 'jsonwebtoken';

export const handleAuthentication = (req: Request, resp: Response) => {
  const user: User = req.body;

  if(isValid(user)) {
    const dbUser: User = users[user.email];
    const token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, 'meat-api-password');
    resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
    resp.status(200).json({ message: 'Login efetuado com sucesso' });
  } else {
    const dbUser: User = users[user.email];
    resp.status(403).json({ message: 'Dados inválidos' });
  }
}

function isValid(user: User): boolean {
  if(!user) {
    return false;
  }

  const dbUser = users[user.email];
  return dbUser !== undefined && dbUser.matches(user);
}
