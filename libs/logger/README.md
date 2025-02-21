<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/logger/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/logger

Logger built with extensive features and accessbility in mind.

## Features

### 1. **Log Levels**

Different levels help categorize the importance of logs:

- **DEBUG** – Detailed information, typically of interest only when diagnosing problems.
- **INFO** – Confirmation that things are working as expected.
- **WARNING** – An indication that something unexpected happened or indicative of some problem in the near future.
- **ERROR** – Due to a more serious problem, the software has not been able to perform some function.
- **FATAL** – A serious error, indicating that the program itself may be unable to continue running.

### 2. **Log Formatting**

Readable and informative logs, with customizable formats including:

- Timestamps (e.g., ISO 8601 format)
- Log level indicators
- Namesapce, File name, line number, and function name
- Plain, JSON, JSON + HTML

### 3. **Log Rotation & Retention**

Automatically manage log files by size, time, or number of files. Keeps disk usage in check without losing important data.

### 4. **Asynchronous Logging**

Non-blocking logging ensures your application’s performance isn’t hindered by logging operations, especially useful for high-performance applications.

### 5. **Contextual Information**

Attach contextual data (e.g., user ID, session ID) to logs to understand the state of the application when the log was recorded.

### 6. **External Integrations**

Support for sending logs to external systems:

- **Log management platforms** (e.g., ELK stack, Splunk)
- **Cloud services** (e.g., AWS CloudWatch, Azure Monitor)
- **Alerting systems** (e.g., PagerDuty, Slack)

### 7. **Filtering and Searching**

Easily filter and search logs based on level, keywords, or context—critical for fast troubleshooting.

### 8. **Performance Monitoring**

Ability to measure execution time or memory usage associated with specific operations.

### 9. **Security Features**

Ability to predict sensitive data and notify developer

- **Anonymization**: Masking sensitive information.
- **Access Control**: Restricting log access based on user roles.

### 10. **Customization and Extensibility**

Ability to create custom log levels, formats, and handlers to fit specific needs.

A combination of these features makes a logger robust, reliable, and user-friendly. Do you have a specific use case in mind, like a web app or a microservice setup?

### 11. **Dynamic Configuration**

Ability to configure logger without stopping the application

### 12. **Cross Platform**

Compatabile to all operating-systems (OS) and Web browsers

## Installation

```shell
pnpm add @rline/logger
```

## Usage

- [ ] add example for the logger library

```typescript
logger(); // output: logger
```

## Accessability

### Color Choice

We choose the following colors to use for accessability purposes

- Blue (#0072B2) – Easily distinguishable and vibrant. (title)
- Orange (#E69F00) – Stands out well without blending into other hues. (warning)
- Green (#009E73) – Works for most types of color blindness. (info)
- Purple (#CC79A7) – Provides good contrast without being confused with red or blue. (debug)
- Vermilion (#D55E00) - It’s a deep orange-red that remains distinguishable for most types of color blindness. (error)

```typescript
export const colors = {
  blue: '\x1b[34m', // Title
  orange: '\x1b[38;5;214m', // Warning (closest ANSI approximation for Orange)
  green: '\x1b[32m', // Info
  purple: '\x1b[35m', // Debug
  vermilion: '\x1b[31m', // Error (red is closest to vermilion)
  reset: '\x1b[0m', // Reset color
};
```

## Documentation

Detailed documentation [Documentation](https://rbrightline.github.io/common/logger/)





## Funding

Thank you for using `@puq/core` It's an open-source project, and maintaining it takes time and effort. If you find this library useful, please consider supporting its ongoing development. Your contributions help ensure that the project stays up-to-date, secure, and well-maintained.

[Instant Funding](https://cash.app/$puqlib)

### Your funding will go toward

- **Bug fixes and updates** to ensure compatibility with the latest versions of dependencies.
- **New features** that will make the library even more powerful.
- **Documentation** improvements to help users get the most out of [Your Library Name].
- **General maintenance** to keep the library running smoothly and securely.

Contact to the developer: [robert.brightline@gmail.com]

[Support the developer](https://cash.app/$puqlib)
