import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    active: "boolean" as unknown as any,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Story = Template.bind({});
Story.args = {};
