module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "LWY Serverless test",
          input: event,
        },
        null,
        2
      ),
    };
  };
  