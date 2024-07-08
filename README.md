# This Node.Js Cli Is Mainly For Cryptocurrency Prices And Rates

## Overview


The Node.js CLI for Cryptocurrency is a command-line interface application that provides real-time cryptocurrency statistics. 
It fetches data from various APIs and presents it in a user-friendly manner, allowing users to stay updated on the latest cryptocurrency prices and market trends.

## Features


- Real-time Data: Fetches real-time cryptocurrency statistics.
- Multiple Currencies: Supports multiple fiat currencies for conversion.
- Period Selection: Allows users to select different time periods for historical data.
- Table Pagination: Displays data in a paginated table format for easy reading.
- Customizable Output: Users can customize the output to show specific data points.


# Requirements

- Node.js: Version 12.x or higher.
- NPM: Version 6.x or higher.


# Installation


To install the CLI, ensure you have Node.js and NPM installed on your machine. Then, follow these steps:

- Clone the repository: `git clone https://github.com/auxy2/Node.js-CLI-For-Cryptocurrency.git
`
- Navigate to the project directory: `cd Node.js-CLI-For-Cryptocurrency`
- Install the dependencies: `npm install`
- Install the CLI globally: `npm install -g .`

## Usage
After installation, you can use the CLI with the command `crypto-cli`. Below are some examples of the commands you can use:

- Fetch latest prices: `crypto-cli prices`
- Fetch historical data: `crypto-cli history --currency BTC --period 7d`
- Convert currency: `crypto-cli convert --amount 100 --from USD --to BTC`
- 













