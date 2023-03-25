const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: 'my-table',
    Key: { id: 'my-id' }
  };
  const data = await dynamodb.get(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(data.Item)
  };
};
