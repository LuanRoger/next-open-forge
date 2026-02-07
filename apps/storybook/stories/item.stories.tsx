import { Button } from "@repo/design-system/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@repo/design-system/components/ui/item";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ui/Item",
  component: ItemGroup,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "outline", "muted"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["default", "sm", "xs"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    variant: "default",
    size: "default",
  },
  render: (args) => (
    <Item {...args}>
      <ItemContent>
        <ItemTitle>Basic Item</ItemTitle>
        <ItemDescription>
          A simple item with title and description.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Action
        </Button>
      </ItemActions>
    </Item>
  ),
} satisfies Meta<typeof Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
