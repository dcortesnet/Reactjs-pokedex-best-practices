import { Story, Meta } from "@storybook/react";
import { LoadingSpinnerLayout } from "./loading-spinner.layout";

export default {
  title: "Shared/components/LoadingSpinner",
  component: LoadingSpinnerLayout,
} as Meta;

export const Template: Story<any> = (args) => <LoadingSpinnerLayout />;
