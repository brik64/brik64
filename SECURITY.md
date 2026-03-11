# Security Policy

## Reporting a Vulnerability

To report a security vulnerability in BRIK-64, please email [admin@brik64.dev](mailto:admin@brik64.dev) with the subject line `[SECURITY]`.

Do not open a public GitHub issue for security vulnerabilities.

We will respond within 72 hours and work with you to understand and address the issue.

## Scope

Security reports are accepted for:
- The `brikc` compiler binary
- The PCD language specification
- The TCE certification process
- The `brik64-dist-releases` release infrastructure

## Cryptographic Verification

Every `brikc` release binary can be verified against the published SHA256 hash in the release `SHA256SUMS` file.

The compiler fixpoint hash (`7229cfcde9613de42eda4dd207da3bac80d2bf2b5f778f3270c2321e8e489e95`) is the authoritative fingerprint of the BRIK-64 compiler. A binary with a different fixpoint hash has been modified.
