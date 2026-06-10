# Suba

Suba is an open-source reference implementation for stablecoin-powered mobility payments on Stellar.

The project demonstrates how USDC can be integrated into real-world transportation and gig-economy services, enabling instant settlement, flexible driver payouts, and seamless payment experiences without requiring users to understand blockchain technology.

Rather than positioning itself as another transportation application, Suba serves as a practical blueprint for building consumer-facing applications powered by stablecoin settlement infrastructure.

By combining mobility services with Stellar-powered payments, Suba showcases how blockchain technology can support everyday economic activity while remaining invisible to end users.

The project is designed as a real-world MVP focused on financial inclusion, stablecoin adoption, gig-economy empowerment, and practical blockchain utility.

---

# Contents

- [Problem](#problem)
- [Vision](#vision)
- [Why Suba Matters](#why-suba-matters)
- [Solution](#solution)
- [Ecosystem Impact](#ecosystem-impact)
- [Key Features](#key-features)
- [Ride & Payment Flows](#ride--payment-flows)
- [Architecture Overview](#architecture-overview)
- [Tech Stack](#tech-stack)
- [Why Stellar](#why-stellar)
- [Security & Compliance](#security--compliance)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Project Status](#project-status)
- [Future Improvements](#future-improvements)
- [Use Cases](#use-cases)
- [Impact](#impact)
- [Contributing](#contributing)
- [License](#license)

---

# Problem

Transportation is one of the most frequent financial activities performed globally.

Millions of riders pay for transportation every day, while millions of drivers depend on transportation platforms as a primary source of income.

Despite the growth of digital transportation services, the financial infrastructure supporting these platforms remains largely dependent on traditional payment rails.

Drivers frequently face:

- Delayed access to earnings
- Dependence on traditional banking systems
- Limited payout flexibility
- High withdrawal and transfer costs
- Exposure to local currency instability
- Barriers to participating in the global digital economy

Riders often encounter:

- Limited payment flexibility
- Friction when making digital payments
- Challenges paying across borders while traveling
- Limited access to alternative payment methods

At the same time, stablecoins have emerged as one of the most practical applications of blockchain technology.

However, most stablecoin usage today remains concentrated in:

- Trading
- Remittances
- Financial speculation
- Asset transfers

There are still relatively few examples of stablecoins being integrated into everyday consumer applications that people use regularly.

This creates an opportunity to demonstrate how stablecoin-powered infrastructure can support real-world economic activity through transportation services.

---

# Vision

Suba aims to become a reference implementation for stablecoin-powered mobility and gig-economy payments on Stellar.

Our vision is to demonstrate how blockchain infrastructure can improve transportation payments without changing user behavior or requiring blockchain expertise.

By abstracting away technical complexity and focusing on practical utility, Suba showcases how stablecoins can power everyday transactions at scale.

Long-term, Suba aims to contribute to:

- Faster settlement infrastructure
- Financial inclusion
- Stablecoin adoption
- Flexible earnings for gig workers
- Cross-border payment accessibility
- Real-world blockchain utility

Beyond transportation, the architecture and payment infrastructure developed by Suba can serve as a foundation for other marketplace-based applications.

---

# Why Suba Matters

Many blockchain applications focus primarily on financial services.

Suba explores a different opportunity.

Transportation represents one of the most common and recurring economic activities in the world.

By integrating USDC settlement into transportation workflows, Suba demonstrates how blockchain infrastructure can move beyond speculation and become part of everyday commerce.

The project provides a practical example of how stablecoins can be embedded into consumer applications while maintaining a familiar user experience.

This approach helps bridge the gap between blockchain infrastructure and mainstream adoption.

---

# Solution

Suba combines transportation services with Stellar-powered settlement infrastructure.

Users interact with a familiar mobility experience while Stellar operates behind the scenes to facilitate fast, efficient, and low-cost payments.

The platform introduces stablecoin utility where it creates value while preserving accessibility for everyday users.

## Rider Experience

Riders can:

- Request transportation
- View fare estimates
- Track drivers in real time
- Pay using local payment methods
- Optionally pay using USDC
- Receive trip receipts
- View trip history

No blockchain knowledge is required.

Users interact with a familiar experience similar to existing transportation platforms.

## Driver Experience

Drivers can:

- Receive transportation requests
- Manage active trips
- Track earnings
- View payout history
- Configure payout preferences
- Manage wallets and payout accounts

Drivers may choose to receive earnings through:

- Local currency payouts
- USDC on Stellar

This provides greater flexibility while maintaining compatibility with existing financial systems.

## Stellar Settlement Layer

Suba uses USDC on Stellar to support:

- Near-instant settlement
- Low-cost transactions
- Stable-value payouts
- Future cross-border payment capabilities
- Financial inclusion initiatives

This creates a payment infrastructure that is efficient, scalable, and globally accessible.

---

# Ecosystem Impact

Suba contributes to the Stellar ecosystem by demonstrating:

- Real-world USDC utility
- Consumer-facing stablecoin adoption
- Stablecoin-powered marketplace infrastructure
- Mobility payment innovation
- Practical wallet integration patterns
- Fiat-to-stablecoin settlement workflows
- Open-source implementation examples

As the project evolves, Suba can serve as a blueprint for similar marketplace applications including:

- Logistics platforms
- Delivery services
- Freelance marketplaces
- Transportation networks
- Gig-economy applications

The project helps expand the range of real-world applications built on Stellar.

---

# Key Features

## Mobility Features

- Rider onboarding
- Driver onboarding
- Driver verification
- Vehicle registration
- Real-time ride matching
- Live trip tracking
- Fare estimation
- Trip history
- Ratings and reviews

## Payment Features

- Fiat payment support
- USDC payment support
- Driver payout preferences
- Escrow-based settlement
- Transaction tracking
- Digital receipts
- Payment history

## Driver Features

- Driver profile management
- Earnings dashboard
- Ride management
- Wallet management
- Bank account management
- Payout configuration

## Rider Features

- Ride booking
- Fare estimation
- Real-time tracking
- Payment selection
- Digital receipts
- Ratings system

## Stellar-Native Features

- USDC settlement
- Sponsored transactions
- Near-instant settlement
- Low-cost payments
- Wallet integrations
- Stablecoin-native payouts
- Cross-border payment readiness

---

# Ride & Payment Flows

## Standard Transportation Flow

1. Rider requests transportation
2. Nearby drivers receive trip request
3. Driver accepts trip
4. Rider tracks driver arrival
5. Trip begins
6. Trip completes
7. Payment settles
8. Driver receives earnings

## Fiat Payment Flow

1. Rider selects local payment method
2. Payment authorization occurs
3. Trip completes
4. Settlement is processed
5. Driver receives configured payout

## USDC Payment Flow

1. Rider selects USDC payment
2. Fare is converted to USDC
3. Rider confirms transaction
4. Funds enter escrow
5. Trip completes
6. Settlement executes on Stellar
7. Driver receives USDC

## Driver Payout Flow

1. Driver selects payout preference
2. Trip earnings are calculated
3. Settlement executes
4. Funds are distributed
5. Driver receives earnings in preferred format

---

# Architecture Overview

Suba follows a modular architecture designed for scalability, maintainability, and ecosystem contributions.

```text
Rider App
     │
     ▼
API Gateway
     │
 ┌───┴─────────────┐
 │                 │
 ▼                 ▼
Ride Service   Payment Service
 │                 │
 ▼                 ▼
Matching      Stellar Settlement
Engine             Layer
                     │
                     ▼
                    USDC
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
 Driver Wallet      Fiat Settlement Partner
```

The backend manages:

- Authentication
- Driver onboarding
- Ride matching
- Fare calculation
- Escrow handling
- Wallet management
- Settlement processing
- Notifications
- Analytics

---

# Tech Stack

## Mobile Applications

- React Native
- TypeScript

## Backend

- Rust
- Axum

## Database

- PostgreSQL
- Redis

## Blockchain

- Stellar Network

## Stablecoin

- USDC

## Infrastructure

- Stellar SDK
- Stellar RPC
- Docker
- GitHub Actions
- OpenAPI

---

# Why Stellar

Suba requires payment infrastructure optimized for high-frequency, low-value transactions that occur continuously throughout the day.

Transportation payments require:

- Fast settlement
- Low transaction costs
- Reliable transaction finality
- Stable-value assets
- Global accessibility

Stellar provides these capabilities natively through its efficient payment network and mature USDC ecosystem.

These characteristics make Stellar particularly well-suited for powering mobility and gig-economy payment infrastructure.

---

# Security & Compliance

## Security

- Secure authentication
- Transaction validation
- Escrow-based settlement
- Fraud detection systems
- Secure wallet integrations
- Infrastructure monitoring
- Audit-ready transaction records

## Compliance

- Driver KYC verification
- AML-aware payment workflows
- Secure onboarding processes
- Privacy-focused data handling
- Regulatory-conscious settlement design

---

# Project Structure

```text
suba/
│
├── apps/
│   ├── rider-app/
│   ├── driver-app/
│   └── admin-dashboard/
│
├── services/
│   ├── auth-service/
│   ├── ride-service/
│   ├── payment-service/
│   ├── wallet-service/
│   ├── notification-service/
│   └── pricing-service/
│
├── packages/
│   ├── shared-types/
│   ├── shared-utils/
│   └── stellar-integration/
│
├── database/
├── scripts/
├── tests/
├── docs/
├── .env.example
├── README.md
├── CONTRIBUTING.md
└── LICENSE
```

# Getting Started

## Clone Repository

```bash
git clone https://github.com/suba-labs/suba
cd suba
```

## Install Dependencies

```bash
cargo build
```

## Run Development Server

```bash
cargo run
```

---

# Project Status

Suba is currently in MVP development.

Initial development focuses on:

- Driver onboarding
- Rider onboarding
- Ride matching
- Real-time trip tracking
- Fiat payment integration
- USDC settlement infrastructure
- Driver payout flexibility
- Escrow-based settlement
- Stellar integration

---

# Future Improvements

- Fleet management tools
- Driver savings products
- Driver lending infrastructure
- Subscription transportation plans
- Corporate transportation accounts
- Loyalty programs
- Airport and tourism integrations
- Cross-border transportation payments
- Public transportation integrations
- Open APIs for mobility providers

---

# Use Cases

- Urban transportation
- Gig-economy payments
- Stablecoin-powered payouts
- Driver earnings management
- Marketplace settlement infrastructure
- Financial inclusion initiatives
- Cross-border transportation payments
- Consumer-facing stablecoin adoption

---

# Impact

Suba demonstrates how stablecoins can power everyday services beyond remittances and trading.

By integrating Stellar-powered settlement into transportation workflows, the project creates a practical example of blockchain infrastructure supporting real economic activity.

The project contributes to:

- Financial inclusion
- Stablecoin adoption
- Faster settlement systems
- Gig-worker empowerment
- Open-source innovation
- Growth of the Stellar ecosystem
- Real-world blockchain utility

---

# Contributing

We welcome contributions from developers, designers, blockchain enthusiasts, mobility innovators, and community members.

Areas where contributors can help include:

- Mobile development
- Backend engineering
- Stellar integrations
- Infrastructure
- Documentation
- UI/UX design
- Testing
- Community growth

Please review `CONTRIBUTING.md` before submitting a pull request.

---

# License

This project is licensed under the MIT License.