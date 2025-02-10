import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the form and allows submission', () => {
  render(<App />);

  // Verifica se os campos do formulário estão na tela
  expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/número/i)).toBeInTheDocument();

  // Simula o preenchimento dos campos e envio do formulário
  fireEvent.change(screen.getByLabelText(/nome completo/i), {
    target: { value: 'João Silva' },
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'joao@exemplo.com' },
  });
  fireEvent.change(screen.getByLabelText(/número/i), {
    target: { value: '123456789' },
  });

  fireEvent.click(screen.getByText(/confirmar/i));

  // Verifica se o formulário foi enviado
  expect(screen.getByText(/pessoas que preencheram o formulário/i)).toBeInTheDocument();
});
