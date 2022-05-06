# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EncryptedBucket <a name="EncryptedBucket" id="encrypted-bucket.EncryptedBucket"></a>

A CDK construct for encrypted S3 Buckets.

#### Initializers <a name="Initializers" id="encrypted-bucket.EncryptedBucket.Initializer"></a>

```typescript
import { EncryptedBucket } from 'encrypted-bucket'

new EncryptedBucket(scope: Construct, id: string, props?: EncryptedBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#encrypted-bucket.EncryptedBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#encrypted-bucket.EncryptedBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#encrypted-bucket.EncryptedBucket.Initializer.parameter.props">props</a></code> | <code><a href="#encrypted-bucket.EncryptedBucketProps">EncryptedBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="encrypted-bucket.EncryptedBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="encrypted-bucket.EncryptedBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="encrypted-bucket.EncryptedBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#encrypted-bucket.EncryptedBucketProps">EncryptedBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#encrypted-bucket.EncryptedBucket.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="encrypted-bucket.EncryptedBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#encrypted-bucket.EncryptedBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="encrypted-bucket.EncryptedBucket.isConstruct"></a>

```typescript
import { EncryptedBucket } from 'encrypted-bucket'

EncryptedBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="encrypted-bucket.EncryptedBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#encrypted-bucket.EncryptedBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#encrypted-bucket.EncryptedBucket.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#encrypted-bucket.EncryptedBucket.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="encrypted-bucket.EncryptedBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="encrypted-bucket.EncryptedBucket.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `key`<sup>Required</sup> <a name="key" id="encrypted-bucket.EncryptedBucket.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---


## Structs <a name="Structs" id="Structs"></a>

### EncryptedBucketProps <a name="EncryptedBucketProps" id="encrypted-bucket.EncryptedBucketProps"></a>

#### Initializer <a name="Initializer" id="encrypted-bucket.EncryptedBucketProps.Initializer"></a>

```typescript
import { EncryptedBucketProps } from 'encrypted-bucket'

const encryptedBucketProps: EncryptedBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#encrypted-bucket.EncryptedBucketProps.property.versioned">versioned</a></code> | <code>boolean</code> | Use S3 Versioning. |

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="encrypted-bucket.EncryptedBucketProps.property.versioned"></a>

```typescript
public readonly versioned: boolean;
```

- *Type:* boolean
- *Default:* false

Use S3 Versioning.

---



