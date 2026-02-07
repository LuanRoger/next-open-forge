import { Badge } from "@repo/design-system/components/ui/badge";
import { Spinner } from "@repo/design-system/components/ui/spinner";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ui/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (args) => <Spinner {...args} />,
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-6">
      <Spinner {...args} className="size-3" />
      <Spinner {...args} className="size-4" />
      <Spinner {...args} className="size-6" />
      <Spinner {...args} className="size-8" />
    </div>
  ),
};

export const InBadge: Story = {
  render: (args) => (
    <div className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Spinner {...args} data-icon="inline-start" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner {...args} data-icon="inline-start" />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner {...args} data-icon="inline-start" />
        Processing
      </Badge>
    </div>
  ),
};
