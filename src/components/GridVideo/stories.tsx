import { GridVideo } from '.';

export default {
  title: 'GridVideo',
  component: GridVideo,
  args: {
    children: 'GridVideo',
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <GridVideo {...args} />
    </div>
  );
};
