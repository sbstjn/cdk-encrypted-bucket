import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { EncryptedBucket } from '../src';

describe('EncryptedBucket', () => {
  describe('Default', () => {
    const app = new App();
    const stack = new Stack(app, 'ExampleStack');

    new EncryptedBucket(stack, 'EncryptedBucket');

    const template = Template.fromStack(stack);

    it('creates key', () => {
      template.resourceCountIs('AWS::KMS::Key', 1);
    });

    it('creates bucket', () => {
      template.resourceCountIs('AWS::S3::Bucket', 1);
    });

    it('creates bucket without versioning', () => {
      const bucket = template.findResources('AWS::S3::Bucket');
      const bucketTemplate = JSON.stringify(bucket);

      expect(bucketTemplate).not.toContain('VersioningConfiguration');
    });
  });

  describe('Versioning', () => {
    const app = new App();
    const stack = new Stack(app, 'ExampleStack');

    new EncryptedBucket(stack, 'EncryptedBucket', {
      versioned: true,
    });

    const template = Template.fromStack(stack);

    it('creates bucket with versioning', () => {
      template.hasResourceProperties('AWS::S3::Bucket', {
        VersioningConfiguration: {
          Status: 'Enabled',
        },
      });
    });
  });
});
