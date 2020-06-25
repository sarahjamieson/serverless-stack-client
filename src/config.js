export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51GxpsSJCKUstOsoGJM4sancCZz0PHFKwajaOK7519XynWydIGXif6GQ2ikeUJU8pmiPbDGowa9hH1GFFvhQq2riu00EgaHVmfC",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes-app-uploads-65"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://5q1nquaqka.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_F1kJDb2zT",
    APP_CLIENT_ID: "14asvj5qej0klmuf7p53la2h9n",
    IDENTITY_POOL_ID: "eu-west-2:3a84cf74-7ef9-4516-86f3-72812abee719"
  }
};