import jwt from 'jsonwebtoken'

const generateToken = (id) => {  
  return jwt.sign({ id }, "mykey", {
    expiresIn: '30d',
  })
}

export default generateToken
