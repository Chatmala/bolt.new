// Serverless functions entry point
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from the serverless function!' })
  };
};