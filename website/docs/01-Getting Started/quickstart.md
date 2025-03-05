# Quick Start
Get started installing Arc with a MakeFile

## Install Dependencies

The following programs are required for Arc to run:

```
All Installations:
- go >= 1.23.4
```

## Installation

First, clone the repository to your local system.
```
git clone https://github.com/d3b-center/Arc
```

Next, navigate to the Arc directory you just cloned, and use the following commands to start Arc:
```
# Build the Arc Gateway binary
make gateway

# Run Arc Gateway
./gateway_bin serve
```


## Configuration

Once Arc has started up for the first time it will do the following:
- Create a new directory `./data`
    - This is used to store PocketBase configuration data.
- Display a URL in the console
    - This URL is used to set up your first administrator account. Copy the link into a web browser, and enter an email
      and password that you will use to configure Arc moving forward.

Once you enter your email and password, it will redirect you to the Arc administration panel, where you can configure:
- Users
- Agents
- Routes
- Tunnels
- Settings

If you have an existing backup of your Arc Gateway, you can restore the backup by going to
Settings -> System -> Backups -> Upload backup, and selecting the backup you would like to restore.

NOTE: Once restored, it will overwrite any data currently stored in your instance of Arc. Back up any important
information. 
