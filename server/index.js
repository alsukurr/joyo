const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const xss = require('xss')

const users = [{
  email: 'your@email.com',
  password: '$2b$10$ahs7h0hNgovO3AVzn1izNFHn.su9gcJnUWUzb2Rcb2WH8ffAVg6Pw' // secret
}]

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))

const getToken = email => {
  const SECRET_KEY = 'i3moi32merio23rij23r'
  return jwt.sign({
    email: email
  }, SECRET_KEY)
}

app.post('/register', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body

  if (!email) {
    res.status(401).send({
      success: false,
      message: `Please enter an email`,
    })
    return
  }
  if (!password) {
    res.status(401).send({
      success: false,
      message: `Please enter a password`,
    })
    return
  }
  if (password.length < 8) {
    res.status(401).send({
      success: false,
      message: `Please enter a password with at least 8 characters`,
    })
    return
  }
  if (password !== passwordConfirmation) {
    res.status(401).send({
      success: false,
      message: `Please enter the same value in both the password fields`,
    })
    return
  }

  const hash = await bcrypt.hash(password, 10)

  users.push({
    email: email,
    password: hash
  })

  console.log(users)

  res.send({
    success: true,
    token: getToken(email)
  })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body

  const theUser = users.find(user => user.email === email)

  if (!theUser) {
    res.status(404).send({
      success: false,
      message: `Could not find account: ${email}`,
    })
    return
  }

  const match = bcrypt.compare(password, theUser.password)

  if (!match) {
    res.status(401).send({
      success: false,
      message: 'Incorrect credentials',
    })
    return
  }

  res.send({
    success: true,
    token: getToken(theUser.email)
  })
})

app.listen(3001, () =>
  console.log('Server listening on port 3001')
)