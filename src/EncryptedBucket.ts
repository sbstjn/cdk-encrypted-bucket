import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

/**
 * A CDK construct to create Lambda functions.
 */
export class EncryptedBucket extends Construct {
  public bucket: s3.IBucket;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, 'Bucket', {
      versioned: true,
    });
  }
}