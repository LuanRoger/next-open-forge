import { Button } from "@repo/design-system/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@repo/design-system/components/ui/button-group";
import { Input } from "@repo/design-system/components/ui/input";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ArrowLeftIcon,
  MinusIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";

const meta = {
  title: "ui/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroup className="hidden sm:flex">
        <Button aria-label="Go Back" size="icon" variant="outline">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <Button aria-label="More Options" size="icon" variant="outline">
          <MoreHorizontalIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Vertical: Story = {
  render: (args) => (
    <ButtonGroup
      aria-label="Media controls"
      className="h-fit"
      orientation="vertical"
      {...args}
    >
      <Button size="icon" variant="outline">
        <PlusIcon />
      </Button>
      <Button size="icon" variant="outline">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const SizeVariants: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="sm" variant="outline">
        Small
      </Button>
      <Button size="sm" variant="outline">
        Button
      </Button>
      <Button size="sm" variant="outline">
        Group
      </Button>
      <Button size="icon-sm" variant="outline">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const Separator: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="sm" variant="secondary">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button size="sm" variant="secondary">
        Paste
      </Button>
    </ButtonGroup>
  ),
};

export const Split: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const InputGroup: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Input placeholder="Search..." />
      <Button aria-label="Search" variant="outline">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  ),
};
