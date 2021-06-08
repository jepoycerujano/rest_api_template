const logger = require('../../lib/Logger');

module.exports.handler = async (event) => {
  const { pathParameters } = event;
  logger.info(pathParameters);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        pathParameters,
        input: event,
      },
      null,
      2,
    ),
  };
};
