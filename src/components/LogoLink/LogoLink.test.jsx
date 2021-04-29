import { screen } from '@testing-library/dom';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';
describe('<LogoLink />', () => {
  it('should  render text logo', () => {
    renderTheme(<LogoLink link="#target" text="olá mundo" />);
    expect(
      screen.getByRole('heading', { name: 'olá mundo' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'olá mundo' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should  render text logo', () => {
    renderTheme(
      <LogoLink link="#target" text="olá mundo" srcImg="image.jpg" />,
    );

    expect(screen.getByAltText('olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });
  it('should  render text logo', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="olá mundo" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
