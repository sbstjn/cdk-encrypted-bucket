# CDK Construct: Encrypted S3 Buckets

[![MIT License](https://badgen.now.sh/badge/License/MIT/blue)](https://github.com/sbstjn/cdk-encrypted-bucket/blob/master/LICENSE.md)
[![superluminar.io](https://badgen.now.sh/badge/by/superluminar/red)](https://superluminar.io//2022/05/17/cdk-construct-mit-projen-erstellen-testen-und-für-npm-nuget-pypi-veröffentlichen/)


> Example for a polyglot CDK construct created with [jsii] and [projen] for encrypted S3 Buckets. 

* [NPM Package][npm]
* [NuGet Package][nuget]
* [PyPi Package][pypi]

## Usage

```ts
import { EncryptedBucket } from 'encrypted-buckets';

new EncryptedBucket(stack, 'EncryptedBucket', {
  versioned: true,
});
```

## Further Reading

- [**superluminar.io**](https://superluminar.io) for a detailed guide in German

## License

Feel free to use the code, it's released using the [MIT license](LICENSE).

## Contribution

You are welcome to contribute to this project! 😘

To make sure you have a pleasant experience, please read the [code of conduct](CODE_OF_CONDUCT.md). It outlines core values and beliefs and will make working together a happier experience.

[projen]: https://github.com/projen/projen
[jsii]: https://github.com/aws/jsii
[npm]: https://www.npmjs.com/package/encrypted-bucket
[nuget]: https://www.nuget.org/packages/CDK.EncryptedBucket/
[pypi]: https://pypi.org/project/encrypted-bucket/
