import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { EncryptedBucket } from '../src';

describe('EncryptedBucket', () => {
  const app = new App();
  const stack = new Stack(app, 'ExampleStack');

  new EncryptedBucket(stack, 'EncryptedBucket');

  const template = Template.fromStack(stack);

  it('creates bucket', () => {
    template.resourceCountIs('AWS::S3::Bucket', 1);
  });

  it('creates key', () => {
    template.resourceCountIs('AWS::KMS::Key', 1);
  });
});
