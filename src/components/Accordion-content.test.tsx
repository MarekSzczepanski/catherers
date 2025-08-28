import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AccordionContent from './accordion-content';
import { vi } from 'vitest';

const mockData = [
  {
    text: 'Male at birth',
    features: [{ id: 'male_length', weight: 3, goalWeight: 1 }]
  },
  {
    text: 'Female at birth',
    features: [{ id: 'female_length', weight: 3, goalWeight: 1 }]
  }
];

describe('AccordionContent', () => {
  it('renders buttons', () => {
    render(<AccordionContent data={mockData} updateFeatureScore={() => {}} />);
    expect(screen.getByText('Male at birth')).toBeInTheDocument();
    expect(screen.getByText('Female at birth')).toBeInTheDocument();
  });

  it('calls updateFeatureScore when a button is clicked', async () => {
    const user = userEvent.setup();
    const updateFeatureScore = vi.fn();

    render(<AccordionContent data={mockData} updateFeatureScore={updateFeatureScore} />);

    const maleButton = screen.getByText('Male at birth');
    await user.click(maleButton);

    expect(updateFeatureScore).toHaveBeenCalledTimes(1);
  });

  it('handles multiple feature weights', async () => {
    const user = userEvent.setup();
    const updateFeatureScore = vi.fn();

    const multiFeatureData = [
      {
        text: 'MultiFeature',
        features: [
          { id: 'a', weight: 2, goalWeight: 1 },
          { id: 'b', weight: 3, goalWeight: 2 }
        ]
      }
    ];

    render(<AccordionContent data={multiFeatureData} updateFeatureScore={updateFeatureScore} />);
    const button = screen.getByText('MultiFeature');
    await user.click(button);

   	expect(updateFeatureScore).toHaveBeenCalledWith(
  		"multifeature",          // id
  		[
    		{ id: "a", weight: 2, goalWeight: 1 },
    		{ id: "b", weight: 3, goalWeight: 2 }
  		],
  		true                     // add=true
		);
  });

	it('toggles button click and unclick', async () => {
  const user = userEvent.setup();
  const updateFeatureScore = vi.fn();

  render(<AccordionContent data={mockData} updateFeatureScore={updateFeatureScore} />);
  const maleButton = screen.getByText('Male at birth');

  // Click
  await user.click(maleButton);
  expect(updateFeatureScore).toHaveBeenLastCalledWith(
    'male at birth',
    [{ id: 'male_length', weight: 3, goalWeight: 1 }],
    true
  );

  // Click again to unclick
  await user.click(maleButton);
  expect(updateFeatureScore).toHaveBeenLastCalledWith(
    'male at birth',
    [{ id: 'male_length', weight: 3, goalWeight: 1 }],
    false
  );
});

	it('locks related buttons when clicked', async () => {
  const user = userEvent.setup();
  const updateFeatureScore = vi.fn();

  render(<AccordionContent data={mockData} updateFeatureScore={updateFeatureScore} />);
  const maleButton = screen.getByText('Male at birth');
  const femaleButton = screen.getByText('Female at birth');

  // Initially enabled
  expect(maleButton).toBeEnabled();
  expect(femaleButton).toBeEnabled();

  // Click male -> female locked
  await user.click(maleButton);
  expect(femaleButton).toBeDisabled();

  // Unclick male -> female unlocked
  await user.click(maleButton);
  expect(femaleButton).toBeEnabled();
});

it('applies clicked styles via MUI classes', async () => {
    const user = userEvent.setup();
    const updateFeatureScore = vi.fn();

    render(<AccordionContent data={mockData} updateFeatureScore={updateFeatureScore} />);

    const maleButton = screen.getByText('Male at birth');

    // Click male
    await user.click(maleButton);

    // MUI sets success color and outlined variant for clicked
    expect(maleButton).toHaveClass('MuiButton-outlined', 'MuiButton-colorSuccess');
  });

});
