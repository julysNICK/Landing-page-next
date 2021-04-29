import { screen } from '@testing-library/react';
import { Textcomponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Textcomponent />', () => {
  it('should render correct', () => {
    renderTheme(<Textcomponent>Children</Textcomponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
  it('should render match snapshot', () => {
    const { container } = renderTheme(<Textcomponent>Children</Textcomponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
  it('should render with font medium', () => {
    renderTheme(<Textcomponent>Children</Textcomponent>);
    const paragraph = screen.getByText('Children');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });
});
