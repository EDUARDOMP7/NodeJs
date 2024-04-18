const Joi = require("@hapi/joi");

exports.suma = async (req, res, next) => {
  let { body } = req;
  console.log(body);

  try {
    if (!Object.keys(body).length) {
      return res.status(500).send({
        data: {
          success: false,
          message: "No se recibieron datos :C",
          code: 500,
        },
      });
    }

    const schema = Joi.object({
      num1: Joi.number().required(),
      num2: Joi.number().required(),
    });

    await schema.validateAsync(body);
    const { num1, num2 } = body;
    const result = Number(num1) + Number(num2);
    req.total = result;
    next();
    // return res.status(200).send({
    //   data: {
    //     success: true,
    //     message: 'Suma realizada con éxito',
    //     code: 200,
    //     result,
    //   },
    // });
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
};

exports.saveOperation = async (req, res, next) => {
  let { body } = req;
  console.log(body);

  return res.status(200).send({
    data: {
      success: true,
      message: "Suma realizada con éxito",
      code: 200,
      result: req.total,
    },
  });
};

exports.resta = async (req, res, next) => {
  let { body } = req;
  console.log(body);

  try {
    if (!Object.keys(body).length) {
      return res.status(500).send({
        data: {
          success: false,
          message: "No se recibieron datos :C",
          code: 500,
        },
      });
    }

    const schema = Joi.object({
      num1: Joi.number().required(),
      num2: Joi.number().required(),
    });

    await schema.validateAsync(body);
    const { num1, num2 } = body;
    const result = Number(num1) - Number(num2);
    return res.status(200).send({
      data: {
        success: true,
        message: "Resta realizada con éxito",
        code: 200,
        result,
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
};

exports.division = async (req, res, next) => {
  let { body } = req;
  console.log(body);

  try {
    if (!Object.keys(body).length) {
      return res.status(500).send({
        data: {
          success: false,
          message: "No se recibieron datos :C",
          code: 500,
        },
      });
    }

    const schema = Joi.object({
      num1: Joi.number().required(),
      num2: Joi.number().required(),
    });

    await schema.validateAsync(body);
    const { num1, num2 } = body;
    const result = Number(num1) / Number(num2);
    return res.status(200).send({
      data: {
        success: true,
        message: "División realizada con éxito",
        code: 200,
        result,
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
};

exports.multiplicacion = async (req, res, next) => {
  let { body } = req;
  console.log(body);

  try {
    if (!Object.keys(body).length) {
      return res.status(500).send({
        data: {
          success: false,
          message: "No se recibieron datos :C",
        },
      });
    }

    const schema = Joi.object({
      num1: Joi.number().required(),
      num2: Joi.number().required(),
    });

    await schema.validateAsync(body);
    const { num1, num2 } = body;
    const result = Number(num1) * Number(num2);
    return res.status(200).send({
      data: {
        success: true,
        message: "Multiplicación realizada con éxito",
        code: 200,
        result,
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
};
