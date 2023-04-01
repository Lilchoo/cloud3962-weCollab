

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
exports.handler = async (event) => {
// exports.handler = event => {
  // console.log(`EVENT: ${JSON.stringify(event)}`);
  // for (const record of event.Records) {
  //   console.log(record.eventID);
  //   console.log(record.eventName);
  //   console.log('DynamoDB Record: %j', record.dynamodb);
  // }
  // return Promise.resolve('Successfully processed DynamoDB record');

  const last_purchase = JSON.stringify(event);
  console.log("THIS IS MINE: " + JSON.stringify(event.Records));
  //console.log("USERNAME: " + JSON.stringify(event.Records.at(-1).dynamodb.Keys.username.S));
  console.log("EMAIL: " + JSON.stringify(event.Records.at(-1).dynamodb.Keys.email.S))
  console.log("Testing Order: " + JSON.stringify(event.Records.at(-1).dynamodb.NewImage));
  console.log("ALL ORDERS: " + JSON.stringify(event.Records.at(-1).dynamodb.NewImage.purchases.L));
  console.log("LATEST ORDER: " + JSON.stringify(event.Records.at(-1).dynamodb.NewImage.purchases.L.at(-1).M ));
};
