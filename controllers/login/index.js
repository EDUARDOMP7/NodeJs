const Joi = require('@hapi/joi');

exports.signin = async (req, res, next) => {
  let { body } = req;
  console.log(body);
  let email = "imiimai@mio.com"
  let password = "123456"

  try {
    if (!Object.keys(body).length) {
      return res.status(500).send({
        data: {
          success: false,
          message: 'No se recibieron datos :C',
          code: 500,
        },
      });
    }

    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    await schema.validateAsync(body);

    if (email !== body.email || password !== body.password) {
      return res.status(401).send({
        data: {
          success: false,
          message: 'Credenciales incorrectas',
          code: 401,
        },
      });
    }

    let token = "token123"
    
    return res.status(200).send({
      data: {
        success: true,
        message: 'Inicio de sesión exitoso',
        token,
        code: 200,
      },
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      data: {
        success: false,
        message: error.message,
        code: 500,
      },
    });
  }
}
