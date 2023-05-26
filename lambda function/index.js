

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();
const { Parser } = require('json2csv');

const tableName = 'serverlesssApp';
const bucketName = 'my-serverless-web-app2';
exports.handler = async (event) => {
  try {
    // Retrieve data from DynamoDB table
    const scanParams = {
      TableName: tableName,
    };
    const result = await dynamodb.scan(scanParams).promise();
    const items = result.Items;

    // Convert data to CSV string
    const fields = Object.keys(items[0]); // Assuming all items have the same structure
    const json2csvParser = new Parser({ fields });
    const csvData = json2csvParser.parse(items);

    // Store data in S3 bucket
    const putObjectParams = {
      Bucket: bucketName,
      Key: 'data.csv', // Set the desired file name
      Body: csvData,
      ContentType: 'text/csv', // Set the content type of the file
    };
    await s3.putObject(putObjectParams).promise();

    return {
      statusCode: 200,
      body: 'Data stored in S3 successfully',
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: 'Error storing data in S3',
    };
  }
};
