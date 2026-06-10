# Suba

Suba is a ride-booking platform that allows riders to pay for trips using either local currency or USDC, while allowing drivers to receive earnings in either local currency or USDC based on their preferred payout option.

The platform combines a familiar transportation experience with payment infrastructure powered by Stellar, making transportation payments more flexible, accessible, and efficient.

Suba is designed for everyone.

Users who prefer traditional payments can use local currency without interacting with blockchain technology.

Users who already use digital assets can pay directly with USDC on Stellar.

By supporting both traditional payments and stablecoin payments, Suba creates a practical bridge between everyday transportation services and blockchain-powered financial infrastructure.

---

# Contents

- [Problem](#problem)
- [Solution](#solution)
- [How Suba Works](#how-suba-works)
- [Payment Models](#payment-models)
- [Key Features](#key-features)
- [Ride & Payment Flows](#ride--payment-flows)
- [Architecture Overview](#architecture-overview)
- [Ecosystem Impact](#ecosystem-impact)
- [Tech Stack](#tech-stack)
- [Why Stellar](#why-stellar)
- [Security & Compliance](#security--compliance)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Open Source](#open-source)
- [Project Status](#project-status)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

---

# Problem

Transportation services process millions of payments every day.

While ride-booking platforms have transformed how people move around cities, payment and payout systems still present challenges for both riders and drivers.

## Driver Challenges

- Delayed access to earnings
- High transfer and withdrawal fees
- Limited payout options
- Dependence on traditional banking systems
- Difficulty receiving payments across regions

## Rider Challenges

- Limited payment flexibility
- Friction when traveling
- Dependence on local payment methods
- Difficulty using digital assets for everyday services

## Stablecoin Adoption Challenges

Stablecoins have become one of the most practical applications of blockchain technology.

However, most stablecoin activity remains concentrated in trading, remittances, and asset transfers.

There are very few consumer applications that demonstrate how stablecoins can be used in everyday services.

Suba aims to bridge this gap.

---

# Solution

Suba combines ride-booking services with flexible payment and payout infrastructure.

Riders can request trips, track drivers, and pay using either local currency or USDC.

Drivers can accept ride requests, manage trips, track earnings, and choose whether they want payouts in local currency or USDC.

The platform uses Stellar-powered settlement behind the scenes to support efficient USDC transactions while maintaining a simple user experience.

## Riders Can

- Request rides
- View fare estimates
- Track trips in real time
- Pay using local currency
- Pay using USDC

## Drivers Can

- Accept ride requests
- Manage trips
- Track earnings
- Receive payouts in local currency
- Receive payouts in USDC

---

# How Suba Works

## Step 1: Request a Ride

The rider enters a destination and requests transportation.

## Step 2: Driver Accepts

Nearby drivers receive the request and one accepts the trip.

## Step 3: Trip Begins

The rider can track the driver and monitor trip progress.

## Step 4: Payment Is Processed

The rider pays using either local currency or USDC.

## Step 5: Driver Receives Earnings

The driver receives earnings based on their selected payout preference.

---

# Payment Models

## Fiat → Fiat

Rider pays using local currency.

Driver receives local currency.

## USDC → USDC

Rider pays with USDC.

Driver receives USDC.

Settlement occurs on Stellar.

## USDC → Fiat

Rider pays with USDC.

Driver receives local currency.

Suba handles conversion and settlement behind the scenes.

---

# Key Features

## Mobility Features

- Rider onboarding
- Driver onboarding
- Driver verification
- Vehicle registration
- Ride booking
- Driver matching
- Fare estimation
- Real-time trip tracking
- Trip history
- Ratings and reviews

## Payment Features

- Fiat payments
- USDC payments
- Fiat payouts
- USDC payouts
- Transaction tracking
- Payment history
- Digital receipts

## Driver Features

- Earnings dashboard
- Ride management
- Wallet management
- Bank account management
- Payout preferences

## Rider Features

- Ride booking
- Fare estimation
- Trip tracking
- Payment selection
- Trip history

## Stellar Features

- USDC settlement
- Sponsored transactions
- Fast settlement
- Low transaction costs
- Wallet integrations

---

# Ride & Payment Flows

## Standard Ride Flow

1. Rider requests trip
2. Driver accepts trip
3. Trip begins
4. Trip completes
5. Payment is processed
6. Driver receives earnings

## Fiat Payment Flow

1. Rider selects fiat payment
2. Trip completes
3. Settlement occurs
4. Driver receives payout

## USDC Payment Flow

1. Rider selects USDC
2. Payment is authorized
3. Trip completes
4. Settlement executes on Stellar
5. Driver receives payout

---

# Architecture Overview

```text
Rider App
     │
     ▼
API Gateway
     │
 ┌───┴─────────────────┐
 │                     │
 ▼                     ▼
Ride Service      Payment Service
 │                     │
 ▼                     ▼
Matching Engine   Settlement Engine
                        │
                        ▼
                  Stellar Network
                        │
         ┌──────────────┴──────────────┐
         ▼                             ▼
    Driver Wallet            Fiat Settlement Partner
```

The backend manages:

- Authentication
- Ride matching
- Fare calculation
- Payment processing
- Settlement
- Notifications
- Earnings tracking

---

# Ecosystem Impact

Suba demonstrates how Stellar can power real-world consumer applications beyond remittances and trading.

The project contributes to the ecosystem by:

- Increasing practical USDC usage
- Demonstrating transportation payment workflows
- Providing reusable payment infrastructure patterns
- Encouraging stablecoin adoption
- Expanding consumer-focused Stellar applications

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

Suba requires payment infrastructure that is fast, affordable, and designed for moving value.

Stellar provides:

- Fast settlement
- Low fees
- Native USDC support
- Global accessibility
- Sponsored transactions
- Payment-focused infrastructure

These capabilities make Stellar an ideal foundation for transportation payments and payout systems.

---

# Security & Compliance

## Security

- Secure authentication
- Transaction validation
- Wallet security
- Fraud monitoring
- Audit-ready records
- Infrastructure monitoring

## Compliance

- Driver identity verification
- AML-aware payment flows
- Secure onboarding
- Privacy-focused data handling

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
│   ├── settlement-service/
│   ├── notification-service/
│   └── pricing-service/
│
├── packages/
│   ├── shared-types/
│   ├── shared-utils/
│   └── stellar-integration/
│
├── database/
├── tests/
├── docs/
├── README.md
├── CONTRIBUTING.md
└── LICENSE
```

---

# Open Source

Suba is an open-source project built to demonstrate practical transportation and payment infrastructure on Stellar.

Developers, designers, testers, and blockchain enthusiasts are welcome to contribute.

---

# Project Status

Suba is currently in MVP development.

Initial features include:

- Ride booking
- Driver onboarding
- Fiat payments
- USDC payments
- Fiat payouts
- USDC payouts
- Stellar settlement

---

# Future Improvements

- Delivery services
- Fleet management
- Corporate accounts
- Loyalty programs
- Cross-border transportation payments
- Public APIs
- SDKs

---

# Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

---

# License

This project is licensed under the MIT License.