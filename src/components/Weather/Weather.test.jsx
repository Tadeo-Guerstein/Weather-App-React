import React from 'react';
import Weather from './Weather';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// TDD 
test("Weather render cloud", async () => {
    // AAA Arrange Act Assert
    const { findByRole } = render(<Weather temperature={10} state="clouds"/>);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const temp = await findByRole("heading");

    expect(temp).toHaveTextContent("10");
})