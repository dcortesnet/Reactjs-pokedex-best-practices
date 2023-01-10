import { Story, Meta } from "@storybook/react";
import { ErrorMessageLayout } from "./error-message.layout";

export default {
  title: "Shared/components/ErrorMessage",
  component: ErrorMessageLayout,
} as Meta;

export const Template: Story<any> = (args) => <ErrorMessageLayout />;
