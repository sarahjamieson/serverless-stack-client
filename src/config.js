const dev = {
  STRIPE_KEY: "pk_test_51GxpsSJCKUstOsoGJM4sancCZz0PHFKwajaOK7519XynWydIGXif6GQ2ikeUJU8pmiPbDGowa9hH1GFFvhQq2riu00EgaHVmfC",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1c0gs5wtsobmk"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://wgnp46lnnf.execute-api.eu-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_22h2xsfQH",
    APP_CLIENT_ID: "3p2b6inndjldokushs3dc3m5re",
    IDENTITY_POOL_ID: "eu-west-2:f674244e-9bd1-474c-9fe0-a3758a7eeb26"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51GxpsSJCKUstOsoGJM4sancCZz0PHFKwajaOK7519XynWydIGXif6GQ2ikeUJU8pmiPbDGowa9hH1GFFvhQq2riu00EgaHVmfC",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-jgxl2ajkr576"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://oenr61palf.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_tYlOn80pN",
    APP_CLIENT_ID: "2hto7q1ne76orqtq2p8a90fpb0",
    IDENTITY_POOL_ID: "eu-west-2:8d67051c-19d0-4659-b90f-7b45b7b560ce"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};