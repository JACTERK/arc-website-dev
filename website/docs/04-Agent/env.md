# Environment Variable Configuration for Arc Agent

Arc Agent uses environment variables in order to set the following values:
- Username
- Password
- Gateway URL
- API URL

The Username and Password is the same that you have configured in the Gateway under the `Agents` tab.

The Gateway URL is the URL of your Gateway, usually starting with `wss://`, and ending in `:443`.

The API URL is usually the same url as the Gateway URL, but starting with `https://`, and ending in `:443`. 

## Environment Variable Names
The names of the variables are as followed:
```
Username: ARC_AGENT_AUTH_USERNAME

Password: ARC_AGENT_AUTH_PASSWORD

Gateway URL: ARC_AGENT_GATEWAY_URL

API URL: ARC_AGENT_API_URL
```


# Setting Environment Variables:
## Windows (Command Prompt/PowerShell):
```
# Temporary (current session)
set MY_ENV_VAR=your_value  # Command Prompt  
$env:MY_ENV_VAR="your_value"  # PowerShell

# Permanent (System Properties)
1. Search "Environment Variables" in Start.
2. Add/Edit variables under "User variables" or "System variables."
```

## Mac OS / Linux (Bash/Zsh):
```
# Temporary (current session)
export MY_ENV_VAR="your_value"

# Permanent
# Add to ~/.bashrc, ~/.zshrc, or ~/.profile
echo 'export MY_ENV_VAR="your_value"' >> ~/.bashrc
source ~/.bashrc  # Reload config
```

# Adding More Configuration Options
The configuration options are managed in `agent/utils.go` in the `loadConfig()` function. 

The function takes in an Agent pointer, and will return an error if one of the configuration options are not found. 

To add a new configuration option for Arc Agent, define the name and env key under the existing variables, then add
a check value. 

The variable names should be camel case, and the environment variables should follow the 
`ARC_AGENT_VARIABLE_NAME` naming convention. 

Additionally, the `[TYPE]` needs to be replaced with either a `string`, 
`int`, `float`, or `bool`. Below is an example of what this would look like:

```
...
gatewayURL := os.Getenv("ARC_AGENT_GATEWAY_URL")
exampleVariable := os.Getenv("ARC_AGENT_EXAMPLE_VARIABLE")

...

# Check for a required environmental variable
if exampleVariable != "" {
    agent.Config.Set("exampleVariable", [TYPE], exampleVariable)
} else {
    errSlice = append(errSlice, "ARC_AGENT_EXAMPLE_VARIABLE")
}

# Check for a non-required environmental variable
agent.Config.Set("exampleVariable", [TYPE], exampleVariable)

# Check for a non-required environmental variable with a default value
if exampleVariable != "" {
    agent.Config.Set("exampleVariable", [TYPE], exampleVariable)
} else {
    agent.Config.Set("exampleVariable", [TYPE], "DEFAULT_VALUE")
}
```

If the configuration value is required, then appending the environment variable name to `errSlice` will stop the Agent
from starting unless it is set. If it is not required, don't append to errSlice, and if you have a default value you can
set that in the `else{}` statement after checking. 