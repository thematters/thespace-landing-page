import { IncomingWebhook } from "@slack/webhook";

export enum SlackMsgType {
  successful = "successful",
  failed = "failed",
  warning = "warning",
}

const getMsgTypeColor = (state?: SlackMsgType) => {
  switch (state) {
    case SlackMsgType.successful:
      return "#86C166";
    case SlackMsgType.failed:
      return "#CB1B45";
    case SlackMsgType.warning:
      return "#F9BF45";
    default:
      return "#BDC0BA";
  }
};

export const logToSlack = async ({
  message,
  data,
  type,
}: {
  message: string;
  data?: any;
  type?: SlackMsgType;
}) => {
  const webhookURL = process.env.SLACK_WEBHOOK_URL || "";

  if (!webhookURL) {
    return;
  }

  try {
    const webhook = new IncomingWebhook(webhookURL);
    await webhook.send({
      username: `[${process.env.NEXT_PUBLIC_RUNTIME_ENV}] thespace-landing-page`,
      attachments: [
        {
          color: getMsgTypeColor(type),
          pretext: message,
          text: data
            ? JSON.stringify(data, Object.getOwnPropertyNames(data), 4)
            : undefined,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
};
