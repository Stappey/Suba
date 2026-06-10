# Contributing to Suba

Thank you for your interest in contributing to Suba.

Suba is an open-source reference implementation for stablecoin-powered mobility payments built on Stellar.

Our goal is to demonstrate how USDC can power real-world transportation and gig-economy experiences through fast settlement, flexible payouts, and seamless payment infrastructure.

We believe that blockchain adoption happens when users can benefit from the technology without needing to understand it.

Whether you're a mobile developer, backend engineer, designer, tester, technical writer, or blockchain enthusiast, your contributions can help shape the future of real-world stablecoin applications.

---

# Why Contribute?

Suba is more than a transportation application.

It is an open-source experiment in applying stablecoin infrastructure to one of the world's most common daily transactions: transportation.

Contributors have the opportunity to help build:

- Mobility infrastructure
- Stablecoin payment systems
- Stellar-based financial applications
- Open-source developer tooling
- Real-world blockchain use cases
- Gig-economy payment solutions

By contributing, you're helping create practical examples of how blockchain technology can solve everyday problems.

---

# How You Can Help

We welcome contributions across multiple areas.

## Product & User Experience

Help improve the rider and driver experience by contributing to:

- User onboarding
- Ride-booking flows
- Driver workflows
- Wallet experiences
- Accessibility improvements
- UX research
- Product feedback

## Mobile Development

Build and improve the rider and driver applications.

Examples include:

- New screens and components
- Performance optimization
- Push notifications
- Maps and location features
- Wallet integrations
- Offline support

## Backend Development

Help build the platform services that power Suba.

Areas include:

- Authentication
- Ride matching
- Fare calculations
- Settlement services
- Escrow systems
- Driver payouts
- Notifications
- Analytics

## Stellar & Payment Infrastructure

Help expand Suba's payment capabilities.

Examples:

- USDC settlement flows
- Sponsored transactions
- Wallet integrations
- Transaction monitoring
- Payment routing
- Developer tooling
- Blockchain observability

## Testing & Quality Assurance

Reliable systems require strong testing.

Contributions include:

- Unit tests
- Integration tests
- End-to-end testing
- Mobile testing
- Payment validation
- Edge-case analysis

## Documentation

Clear documentation helps grow the community.

Contribute to:

- Setup guides
- API documentation
- Architecture diagrams
- Tutorials
- Developer onboarding
- Technical specifications

---

# Getting Started

## Fork and Clone

```bash
git clone https://github.com/suba-labs/suba.git
cd suba
```

## Configure Environment Variables

```bash
cp .env.example .env
```

Update the environment values based on your local setup.

## Install Dependencies

```bash
cargo build
```

## Run the Application

```bash
cargo run
```

---

# Development Philosophy

When contributing to Suba, we encourage contributors to follow a few core principles.

### Keep Things Practical

Suba focuses on solving real-world problems.

Features should improve user experience, payment efficiency, platform reliability, or developer experience.

### Prioritize Simplicity

Simple solutions are usually better than complex ones.

Write code that future contributors can easily understand and maintain.

### Build for Reusability

Suba aims to become a reference implementation.

Whenever possible, build components and services that can be reused across future marketplace and payment applications.

### User Experience Comes First

Blockchain should remain an implementation detail.

Users should never need to understand wallets, transaction hashes, or settlement mechanics to use the platform successfully.

---

# Branch Naming

Please use descriptive branch names.

Examples:

```text
feature/driver-payouts
feature/usdc-payments
feature/ride-matching

fix/wallet-validation
fix/payment-timeout

docs/api-reference
docs/setup-guide
```

Avoid committing directly to the main branch.

---

# Commit Messages

Write clear and meaningful commit messages.

Examples:

```text
feat: add driver wallet payout support

feat: implement ride fare estimation

fix: resolve payment settlement validation issue

docs: improve onboarding documentation

test: add settlement service integration tests
```

Recommended format:

```text
type: short description
```

Types include:

```text
feat
fix
docs
refactor
test
chore
```

---

# Pull Requests

Before submitting a pull request:

1. Create a dedicated feature branch
2. Keep changes focused and scoped
3. Test your implementation
4. Update documentation if necessary
5. Ensure code follows project conventions

A good pull request should include:

- What changed
- Why it changed
- Screenshots (if UI-related)
- Testing steps
- Related issue references

---

# Reporting Issues

If you encounter a bug, please create an issue.

Helpful information includes:

- Expected behavior
- Actual behavior
- Steps to reproduce
- Screenshots
- Error logs

The more detail you provide, the easier it is to investigate and resolve the issue.

---

# Feature Proposals

We welcome new ideas.

Before building a major feature, open a discussion or issue describing:

- The problem being solved
- Why it matters
- Proposed solution
- Potential implementation approach

This helps ensure alignment with the project's goals and roadmap.

---

# Security

If you discover a security vulnerability, please report it privately to the maintainers rather than creating a public issue.

Examples include:

- Authentication bypasses
- Payment manipulation vulnerabilities
- Wallet security issues
- Sensitive data exposure
- Settlement logic exploits

We take security reports seriously and will investigate promptly.

---

# Community Expectations

Suba is built by an open community.

We ask contributors to:

- Be respectful
- Be constructive
- Welcome newcomers
- Share knowledge openly
- Focus on collaboration

Healthy communities build better software.

---

# Recognition

We value every contribution.

Contributors may be recognized through:

- Release notes
- Contributor acknowledgements
- Project showcases
- Community spotlights

Whether you contribute code, documentation, testing, design, or feedback, your work helps move the project forward.

---

# License

By contributing to Suba, you agree that your contributions will be licensed under the MIT License.