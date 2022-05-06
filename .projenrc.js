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
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The 'name' in package.json. */
});

project.synth();
