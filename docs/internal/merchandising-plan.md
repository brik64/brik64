# BRIK64 Merch Operating Plan

Internal document for CFO, CMO, and CEO. Do not link from public navigation.

## Objective

Launch a print-on-demand merch shop that can support the brand financially before the first platform customers land.

Primary goals:
- keep the store operationally lightweight
- route production to Spain when possible, otherwise to the US
- avoid inventory risk
- upgrade to paid provider plans only when the savings justify the monthly fee with a safety margin

## Recommended provider strategy

- Default provider: **Printful**
- Secondary benchmark: **Gelato**
- Cost reference only: **Printify**

Why Printful:
- consistent quality and fulfillment control
- Barcelona coverage for Europe plus US coverage
- easier to run as a branded store with minimal operational variance

## Product launch order

1. Camisetas
2. Stickers
3. Tote bags
4. Posters
5. Gorras
6. Hoodies

Rule of thumb:
- launch the lowest-risk, highest-conversion SKUs first
- treat hoodies as premium upsells, not as the initial volume driver

## Auto-subsidy algorithm

### Inputs

- `monthly_orders`: expected orders in the current month
- `savings_per_order`: incremental savings from paid plan vs free plan
- `plan_monthly_cost`: current monthly subscription price
- `safety_buffer`: 1.25 by default

### Decision rule

Upgrade to paid plan only if:

`monthly_orders * savings_per_order >= plan_monthly_cost * safety_buffer`

Recommended buffer:
- `1.25` for normal operations
- `1.35` if order volume is volatile

### Hysteresis rule

To avoid plan flapping:
- upgrade only after the condition is true for 2 consecutive months
- downgrade only after the condition is false for 2 consecutive months

### Priority order

1. Keep the free plan while savings do not cover the fee plus buffer
2. Move to the paid plan when savings clearly exceed the threshold
3. Revert to free only if the store falls below the threshold for multiple months

## Operating formula

Per order:

`net_profit = sale_price - product_cost - shipping - payment_fees - ad_allocation - return_reserve`

Monthly:

`monthly_plan_value = monthly_orders * savings_per_order`

Activation threshold:

`monthly_plan_value >= plan_monthly_cost * 1.25`

## Role split

### CMO

- owns Printful account setup
- manages catalog, design uploads, product launches, and storefront presentation
- monitors product mix and merchandising performance
- proposes product additions or removals

### CFO

- owns plan activation decision
- approves subscription payment when the activation threshold is met
- checks the plan against monthly performance and margin
- ensures the store remains self-funding

### CEO

- approves exceptions and strategic changes
- resolves tradeoffs between speed, brand, and margin
- confirms whether the merch shop remains a temporary funding bridge or becomes a long-term channel

## Practical rule set

- Do not buy a paid provider plan just because it looks cheaper in isolation.
- Activate only when the store can pay for itself through realized savings.
- Prefer Spain for European orders and the US for US orders when the provider supports it.
- Keep the public store page as a coming-soon mockup until the operational launch is ready.

## Assumptions

- The store starts without inventory.
- The store is integrated into the existing BRIK64 site.
- Printful account ownership sits with the CMO.
- Subscription activation authority sits with the CFO.
- The CEO signs off on exceptions only.
