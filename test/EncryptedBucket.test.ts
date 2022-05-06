import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { EncryptedBucket } from '../src';

describe('EncryptedBucket', () => {
  it('creates bucket', () => {
    const app = new App();
    const stack = new Stack(app, 'ExampleStack');

    new EncryptedBucket(stack, 'EncryptedBucket');

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::S3::Bucket', {
      VersioningConfiguration: {
        Status: 'Enabled',
      },
    });

    template.resourceCountIs('AWS::S3::Bucket', 1);
  });
});
