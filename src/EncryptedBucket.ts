import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface EncryptedBucketProps {
  /**
   * Use S3 Versioning for bucket
   *
   * @default false
   */
  readonly versioned?: boolean;
}

/**
 * A CDK construct for encrypted S3 Buckets
 */
export class EncryptedBucket extends Construct {
  public bucket: s3.IBucket;
  public key: kms.IKey;

  constructor(scope: Construct, id: string, props?: EncryptedBucketProps) {
    super(scope, id);

    this.key = new kms.Key(this, 'Key');

    this.bucket = new s3.Bucket(this, 'Bucket', {
      accessControl: s3.BucketAccessControl.PRIVATE,
      bucketKeyEnabled: true,
      encryption: s3.BucketEncryption.KMS,
      encryptionKey: this.key,
      versioned: !!props?.versioned,
    });
  }
}