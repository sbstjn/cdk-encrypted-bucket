const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'sbstjn',
  authorName: 'Sebastian Müller',
  authorAddress: 'mail@sbstjn.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'encrypted-bucket',
  repositoryUrl: 'https://github.com/sbstjn/cdk-encrypted-bucket.git',
  description: 'A CDK construct for encrypted S3 Buckets',
  defaultReleaseBranch: 'main',
  release: true,
  releaseToNpm: false,
});

project.synth();
