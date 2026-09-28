---
sidebar_position: 1
---

# Installation

**Time needed:** About 30 minutes  
**Difficulty:** Beginner

## Requirements

- PHP 8.3 or higher
- MySQL 8.0+ or MariaDB 10.6+
- Composer
- Node.js 18+
- Web server (Apache or Nginx)

## Quick Install

1. Clone the repository
2. Run `composer install`
3. Run `npm install && npm run build`
4. Copy `.env.example` to `.env`
5. Run `php artisan key:generate`
6. Configure your database in `.env`
7. Run `php artisan migrate`

## Next Steps

Once installed, continue to [First Game Setup](/docs/getting-started/first-game).
