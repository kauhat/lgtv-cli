import { Command, flags } from "@oclif/command";
import { setupApi } from "../../api.js"

class MessageCommand extends Command {
  static args = [
    {
      required: true,
      name: "message",
      description: "Your message to display",
    },
  ];

  async run() {
    const { args, flags } = this.parse(MessageCommand);

    const tv = await setupApi()

    this.log("Sending message")

    tv.request("ssap://system.notifications/createToast", {
      message: args.message,
    });

    this.exit(1)
  }
}

MessageCommand.description = `Send a message
...

Displays a message on the screen using the toast functionality

`;

MessageCommand.flags = {
  // name: flags.string({ char: "n", description: "name to print" }),
};

export default MessageCommand;
