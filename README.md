# Github Action for Encrypting Text
This is a action for encrypting text, currently only AES is supported.

## Usage
```yaml
name: Encryption

on:
  push:
    branches:
    - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: 'Encrypt Text'
      uses: hujiulong/action-encrypt@master
      with:
        # Encryption algorithm.
        # Default: 'aes-128-cbc'
        algorithm: 'aes-128-cbc'

        # Your secret key, required.
        key: ${{ secrets.ENCRYPTION_KEY }}

        # Text to be encrypted, required.
        text: '...'

        # Initialization vector.
        # Default: empty
        iv: ''

        # Output encoding.
        # Default: 'hex'
        encoding: 'hex'
      id: 'encryption'
    - name: 'Echo ciphertext'
      run: echo '${{ steps.encryption.outputs.ciphertext }}'
```

## License

[MIT license](LICENSE).
