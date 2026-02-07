import { Button } from "@repo/design-system/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@repo/design-system/components/ui/empty";
import type { Meta, StoryObj } from "@storybook/react";
import { ArrowUpRightIcon, FolderCodeIcon } from "lucide-react";

const meta = {
  title: "ui/Empty",
  component: Empty,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (args) => (
    <Empty {...args}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCodeIcon />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </EmptyContent>
      <Button
        asChild
        className="text-muted-foreground"
        size="sm"
        variant="link"
      >
        <Button variant="link">
          Learn More <ArrowUpRightIcon />
        </Button>
      </Button>
    </Empty>
  ),
} satisfies Meta<typeof Empty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
