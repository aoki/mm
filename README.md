# Moving Mouse

The 'mm' command is used to keep the mouse moving to prevent it from sleeping.
This command moves the mouse 1 pixel up and 1 pixel down every `MM_MOVE_INTERVAL` minutes (default is 3 minutes).

## How to Run

```shell
mm
```

### Customise

- `NODE_ENV`: Display debug log if you set it to `development`.
- `MM_MOVE_INTERVAL`: Mouse movement interval in minutes.
