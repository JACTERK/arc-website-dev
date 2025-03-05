# Arc Healthcheck

Healthcheck Decision for Arc Components

### Context

Healthchecks are an important component in assuring availability for tunneled routes. This document aims to identify which Arc component (Agent or Gateway)  should be responsible for measuring and reporting circuit health. If a Target is unavailable due to an unhealthy status the Gateway shall notify the Client and optionally alert, eliminating what would be a failed request.

### Terms

* Client - Web browsers, scripts requesting HTTP resources, curl, wget etc...
* Target - The HTTP/TCP resource the Client is requesting
* Arc Agent - Agent responsible for proxying to Target
* Arc Gateway - Main HTTP/HTTPS entrypoint for all requests, routing Clients to appropriate Agent.
* Last mile - The connection between Agent and Target
* Circuit - The complete (internal) path a request takes from : Arc gateway -> Arc agent -> Target -> Arc agent -> Arc gateway


### Healthcheck on Agent : Pros

* Less metered network traffic
* Less system and network overhead on the gateway

### Healthcheck on Agent : Cons

* Additional system resources required, may impact low-powered devices (such as IoT)
* Does not provide full-circuit validation


### Healthcheck on Gateway : Pros

* Easier to scale Gateway nodes
* Assures health of both Agent and Target, full-Circuit validation


### Healthcheck on Gateway : Cons

* Healthcheck events are currently logged and can be noisy, this can be fixed in code
* Complexities when HA is made available (which gateway is responsible for measuring circuit health?)


### Alternative options

If a Client requests a Target and the Agent times out awaiting the response the target can be marked unhealthy and no further requests will be routed until the Agent verifies the Target is healthy. This eliminates the need for persistent healthchecks at the cost of a single failed Client request. Once the Target has been marked healthy the healthcheck loop stops until a future error.

### Decision

TBD