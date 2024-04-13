  <img alt="BlockBnb - Decentralized House Rental Platform" src="/public/HomePage.png">
    <h1 align="center">BlockBnb - Decentralized House Rental Platform</h1>

<p align="center">
   List, book, and review your apartments. 
</p>

<p align="center">
  <a href="https://twitter.com/anchit1909" target="_blank">
    <img src="https://img.shields.io/twitter/follow/anchit1909?style=flat&label=anchit1909&logo=twitter&color=0bf&logoColor=fff" alt="Anchit Sinha Twitter follower count" />
  </a>
  <a href="https://github.com/Anchit1909/decentralized-house-rental-platform" target="_blank">
    <img src="https://img.shields.io/github/stars/Anchit1909/decentralized-house-rental-platform?label=Anchit1909%2FBlockBnb" alt="BlockBnb repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#screenshots"><strong>Screenshots</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

BlockBnb is a decentralized application built on the Ethereum blockchain. It is a rental marketplace where users can list, book, and review apartments. The project revolves around `DappBnb.sol`, a Solidity-written Ethereum smart contract. It leverages the OpenZeppelin library to ensure secure and standardized development of the contract.

The core of the contract is defined by three primary structures: `ApartmentStruct`, `BookingStruct`, and `ReviewStruct`, representing an apartment, a booking, and a review, respectively.

## Features

- `createAppartment`: Allows a user to create a new apartment listing.
- `updateAppartment`: Allows the apartment owner to update the details of an apartment.
- `deleteAppartment`: Allows the apartment owner to delete an apartment listing.
- `getApartments`: Allows a user to fetch all available apartments.
- `getApartment`: Allows a user to fetch the details of a specific apartment.
- `bookApartment`: Allows a user to book an apartment for specific dates.
- `checkInApartment`: Allows a tenant to check into an apartment and triggers the payment process.
- `claimFunds`: Allows the apartment owner to claim funds after a booking is completed.
- `refundBooking`: Allows a tenant to cancel a booking and get a refund.
- `getUnavailableDates`: Allows a user to fetch all booked dates for a specific apartment.
- `getBookings`: Allows a user to fetch all bookings for a specific apartment.
- `getBooking`: Allows a user to fetch the details of a specific booking.
- `addReview`: Allows a tenant to add a review for an apartment.
- `getReviews`: Allows a user to fetch all reviews for a specific apartment.

## Tech Stack

- Javascript
- [Solidity](https://soliditylang.org/)
- [NextJS](https://nextjs.org/)
- [Hardhat](https://hardhat.org/)
- [Alchemy](https://dashboard.alchemy.com/)
- [EthersJs](https://docs.ethers.io/v5/)
- [Redux-Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Screenshots

### Home Page

<img alt="Home Page" src="/public/HomePage.png">

### Room Page

<img alt="Room Page" src="/public/RoomPage.png">

### Edit Room Page

<img alt="Edit Room Page" src="/public/EditRoomPage.png">

### Add Room Page

<img alt="Add Room Page" src="/public/AddRoomPage.png">

### Bookings Page

<img alt="Bookings Page" src="/public/BookingsPage.png">

### Add Review

<img alt="Add Review" src="/public/AddReview.png">

## Running Locally

Supply the following keys in your `.env` variable:

```sh
NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8545
NEXT_PUBLIC_ALCHEMY_ID=<YOUR_ALCHEMY_PROJECT_ID>
NEXT_PUBLIC_PROJECT_ID=<WALLET_CONNECT_PROJECT_ID>
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=somereallysecretsecret
```

`YOUR_ALCHEMY_PROJECT_ID`: [Get Key Here](https://dashboard.alchemy.com/)
`WALLET_CONNECT_PROJECT_ID`: [Get Key Here](https://cloud.walletconnect.com/sign-in)

Follow these steps to run the application:

1. Install the package modules by running the command: `yarn install`
2. Start the Hardhat server: `yarn blockchain`
3. Run the contract deployment script: `yarn deploy`
4. Run the contract seeding script: `yarn seed`
5. Spin up the Next.js development server: `yarn dev`

Now, your application should be up and running.

## Author

- Anchit Sinha ([@anchit1909](https://twitter.com/anchit1909))
