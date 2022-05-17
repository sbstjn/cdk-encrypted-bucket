const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'sbstjn',
  authorName: 'Sebastian Müller',
  authorAddress: 'mail@sbstjn.com',
  cdkVersion: '2.1.0',
  name: 'encrypted-bucket',
  repositoryUrl: 'https://github.com/sbstjn/cdk-encrypted-bucket.git',
  description: 'A CDK construct for encrypted S3 Buckets',
  defaultReleaseBranch: 'main',
  release: true,
  license: 'MIT',

  releaseToNpm: true,

  publishToPypi: {
    distName: 'encrypted-bucket',
    module: 'encrypted_bucket',
  },

  publishToNuget: {
    dotNetNamespace: 'SBSTJN.AWS',
    packageId: 'CDK.EncryptedBucket',
  },
});

project.synth();
