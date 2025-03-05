# Gateway Healthcheck

Gateway healthcheck for AWS ALB

Arc Gateway can be configured to send healthcheck packets to an ALB (Application Load Balancer).
To configure this healthcheck, you first want to add the following value to your running configuration:

```
{
  "system": {
    ...
    "gateway_healthcheck_port": (Healthcheck Port (Int)),
  }
}
```

If the port is greater than 0, then the message `gateway healthcheck running` will be displayed in the terminal, and
the `AlbHealthCheck` goroutine will run.

When the function is called, it will send an `http.StatusOK` header along with a `{"status": "ok"}` JSON  
response to the port configured. 