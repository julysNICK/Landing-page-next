import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import mock from './mock';
import { screen } from '@testing-library/dom';
import { theme } from '../../styles/theme';
describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);

    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });
  it('should not render links', () => {
    renderTheme(<NavLinks />);

    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);

    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.font.media.lteMedium,
      },
    );
  });
  it('should  match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
